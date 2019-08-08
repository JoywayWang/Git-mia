
class Mialist {
    constructor() {
    }
    init() {
        this.creEle();
    }
    creEle() {
        // console.log(9282);
        $(`<div class="toph" id="back"></div>
        <div class="nav"></div>
         <div class="selectlist clearfix"></div>
        <div id="nav">
        <li>人气</li>
        <li>售价降序</li>
        <li>售价升序</li>
        </div>
        <div id="app"></div>
        <div id="page" class="page"></div>
        <div class = "footer"></div>
        `).appendTo("body");
    }
};
class Listn {
    constructor(index) {
        this.data = "";
        this.orderType = 0;
        this.html = "";
        this.index = index;
    }
    init() {
        this.sendAjax(0);
        this.addEve();
        this.addclick();
        // console.log(this.index);
    }
    creEle() {
        this.html = this.data.map(ele => {
            return `<div class="product-item">
                        <a href="##" id="${ele.gid}"><img class="item-img" src=${ele.src}> </a>
                        <div class="item-info">
                            <span class="priceA">￥${ele.sale_price}</span>
                            <span class="priceB">￥${ele.original_price}</span>
                            <div class="item-info-name"><a href="##">${ele.title}</a></div>
                            <div class="tahoma_active"><span class="active-type">${ele.active_type}</span><span
                                    class="active-text"></span>${ele.active_text}</div>
                        </div>
                    </div>`;
        }).join("");
        $("#app").html(this.html);
    }
    sendAjax(page) {
        let self = this;

        $.ajax({
            type: "post",
            url: `../api/getDataList${self.index}.php`,
            data: `page=${page}&orderType=${self.orderType}`,
            dataType: "json",
            success: function (response) {
                self.data = response;
                // console.log(self.data);
                self.creEle();
            }
        });
    }
    addEve() {
        let that = this;
        window.localStorage.setItem("page", 0);
        $.ajax({
            type: "post",
            url: `../api/getPageCount${that.index}.php`,
            dataType: "json",
            success: function (response) {
                let pageSize = response;
                // window.localStorage.setItem("page", index);

                that.html = '';
                for (let i = 0; i < pageSize; i++) {
                    $("#page").append(`<a href="javascript:;">${i + 1}</a>`)
                }
                $("#page").children("a").eq(0).addClass("active");
            }
        });

        $("#page").on("click", "a", function () {
            // console.log(23);
            var index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            window.localStorage.setItem("page", index);
            that.sendAjax(index);
        })

        $("#nav li").click(function () {
            that.orderType = $(this).index();
            window.localStorage.setItem("oT", that.orderType);

            that.sendAjax(0);
        })
    }
    addclick() {
        $("#app").on("click", ".product-item", function () {
            let gid = Number($(this).children("a").attr("id"));
            console.log(gid);
            window.localStorage.setItem("gid", gid);
            window.open(`http://127.0.0.1/code/mia/Gitmia/mia/html/details.html`, "_blank");
        })
    }
};
// (new Mialist()).init();
$(function () {
    new Promise(function (resolve, reject) {
        (new Mialist()).init();
        resolve();
    })
        .then(function () {
            return new Promise(function (resolve, reject) {
                let a = Cookie.getItem("usn");
                console.log(a);

                (new Header(".toph", a)).init();
                // (new Header(".toph")).init();
                resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("../serverside/tab.json",
                    function (data) {
                        (new Nav(data, ".nav")).init();
                        $(".nav-tab").css("display", "none");
                        $(".nav-box").hover(function () {
                            $(".nav-tab").css("display", "block");
                        }, function () {
                            $(".nav-tab").css("display", "none");
                        }
                        );
                    }); resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "post",
                    url: "../api/getSelectlist.php",
                    // data: "data",
                    dataType: "json",
                    success: function (response) {
                        // console.log(response);
                        let a = response[localStorage.i];
                        let b = a.setext;
                        let dataa = JSON.parse(b);
                        (new Selectlist(dataa, ".selectlist")).init();
                    }
                });

                resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                // console.log(localStorage.i);
                (new Listn(localStorage.i)).init();
                resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                (new Footer(".footer")).init();
                resolve();
            })
        })
        .then(function () {
            return new Promise(function (resolve, reject) {
                (new Adv("body")).init();
                resolve();
            })
        })

})
