class Boxele {
    constructor(root = "body") {
        this.root = document.body;
    }
    init() {
        this.creEle();
    }
    creEle() {
        $(`<div class= "mia" id="back">
            <div class="toph"></div>
             <div class="nav"></div>
             <div class="banner"></div>
             <div class="pinpai"></div>
             <div class = "newuser"></div>
             <div class="tuijianlist"></div>
             <div class="dapailist"></div>
             <div class="footer"></div>
        </div>`).appendTo(this.root);
    }
}

$(function () {
    new Promise(function (resolve, reject) {
        (new Boxele()).init();
        resolve();
    })
        .then(function () {
            return new Promise(function (resolve, reject) {
                (new Header(".toph")).init();
                resolve();
            })

        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "post",
                    url: "./api/gettab.php",
                    success: function (res) {
                        let response = JSON.parse(res)
                        let newdata = response.map(item => {
                            let o = new Object()
                            for (let i in item) {
                                if (i === 'text' || i === 'left' || i === 'right') {
                                    o[i] = JSON.parse(item[i])
                                } else {
                                    o[i] = item[i]
                                }
                            }
                            return o
                        })
                            // console.log(newdata);
                            (new Nav(newdata, ".nav")).init();
                        resolve();
                    }
                });

            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("./serverside/banner.json",
                    function (data) {
                        (new Banner(data, ".banner")).init();
                    }); resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("./serverside/pinpai.json",
                    function (data) {
                        (new Pinpai(data, ".pinpai")).init();
                    }); resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                let data = "https://img.miyabaobei.com/d1/p5/2018/01/18/c3/57/c357db838165214d83c42c1543962c74448442151.jpg";
                // console.log(33);
                let a = new Newuser(data, ".newuser");
                a.init();
                ; resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("./serverside/tuijian.json",
                    function (data) {
                        let p = new Tuijian(data, ".tuijianlist");
                        p.init()
                    }); resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("./serverside/floor.json",
                    function (data) {
                        let p = new Dapai(data, ".dapailist");
                        p.init()
                    }); resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                (new Footer(".footer")).init();
                resolve();
            })
        })
        .then(function () {
            return new Promise(function (resolve, reject) {
                (new Adv(".mia")).init();
                resolve();
            })
        })
})
