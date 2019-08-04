
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
        <li>默认排序</li>
        <li>售价排序(从高到低)</li>
        <li>售价排序(从低到高)</li>
        </div>
        <div id="app"></div>
        <div id="page" class="page"></div>
        <div class = "footer"></div>
        `).appendTo("body");
    }
};
class Listn {
    constructor() {
        this.data = "";
        this.orderType = 0;
        this.html = "";
    }
    init() {
        this.sendAjax(0);
        this.addEve();
    }
    creEle() {
        this.html = this.data.map(ele => {
            return `<div class="product-item">
                        <a target="_blank"><img class="item-img" src=${ele.src}> </a>
                        <div class="item-info">
                            <span class="priceA">￥${ele.sale_price}</span>
                            <span class="priceB">￥${ele.original_price}</span>
                            <div class="item-info-name"><a href="">${ele.title}</a></div>
                            <div class="tahoma_active"><span class="active-type">${ele.active_type}</span><span
                                    class="active-text"></span>${ele.active_text}</div>
                        </div>
                    </div>`;
        }).join("");
        $("#app").html(this.html);
    }
    sendAjax(page) {
        let self = this;
        // let page = 0;
        $.ajax({
            type: "post",
            url: "../api/getDataList.php",
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
        $.ajax({
            type: "post",
            url: "../api/getPageCount.php",
            dataType: "json",
            success: function (response) {
                let pageSize = response;
                that.html = '';
                for (let i = 0; i < pageSize; i++) {
                    $("#page").append(`<a href="javascript:;">${i + 1}</a>`)
                }
                $("#page").children("a").eq(0).addClass("active");
            }
        });

        $("#page").on("click", "a", function () {
            console.log(23);
            var index = $(this).index();
            $(this).addClass("active").siblings().removeClass("active");
            that.sendAjax(index);
        })

        $("#nav li").click(function () {
            that.orderType = $(this).index();
            that.sendAjax(0);
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
                (new Header(".toph")).init();
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

                $.getJSON("../serverside/selectlist.json",
                    function (data) {
                        data = data[6];
                        (new Selectlist(data, ".selectlist")).init();
                    }
                );
                resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                (new Listn()).init();
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
