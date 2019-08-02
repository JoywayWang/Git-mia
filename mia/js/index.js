class Boxele {
    constructor(root = "body") {
        this.root = document.body;
    }
    init() {
        this.creEle();
    }
    creEle() {
        $(`<div class= "mia">
            <div class="toph"></div>
             <div class="nav"></div>
             <div class="banner"></div>
             <div class="pinpai"></div>
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
                $.getJSON("./serverside/tab.json",
                    function (data) {
                        (new Nav(data, ".nav")).init();
                    }); resolve();
            })
        }).then(function () {
            return new Promise(function (resolve, reject) {
                $.getJSON("./serverside/banner.json",
                    function (data) {
                        (new Banner(data, ".banner")).init();
                    }); resolve();
            })

        })
})