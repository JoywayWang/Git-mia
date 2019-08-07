class Cartbox {
    constructor() {

    }
    init() {
        $(`<div class="cartbox">
        <div class="toph"></div>
        <div class="cart"></div>
        <div class="footer"></div>
        </div>`).appendTo("body")
    }
}
class Cart {
    constructor() {

    }
    init() {

    }
    creEle() {

    }
}
$(function () {
    new Promise(function (resolve, reject) {
        (new Cartbox()).init();
        resolve();
    }).then(function () {
        return new Promise(function (resolve, reject) {
            let a = Cookie.getItem("usn");
            (new Header(".toph", a)).init();
            resolve();
        })
    }).then(function () {
        return new Promise(function (resolve, reject) {
            let item = $(".header .content").children(".r").empty();
            $(`<div class="ddzt">
             <span>1.我的购物车</span>
             <span>2.填写核对订单信息</span>
             <span>3.成功提交订单</span>
            </div>`).css({
                "width": "435px",
                "height": "42px",
                "float": "right",
                "margin- top": "30px",
                "line - height": "42px",
                "background": "url(https://www.miyabaobei.hk/resources/images/cart_step_fN.png)"
            }).appendTo(item);
            $(".ddzt span").css({
                "display": "block",
                "float": "left",
                "width": "144px",
                "height": "42px",
                "line-height": "42px",
                "font-size": "12px",
                "text-align": "center"
            });
            resolve();
        })
    }).then(function () {
        return new Promise(function (resolve, reject) {
            // let a = Cookie.getItem("usn");
            (new Cart()).init();
            resolve();
        })
    }).then(function () {
        return new Promise(function (resolve, reject) {
            (new Footer(".footer")).init();
            resolve();
        })
    }).then(function () {
        return new Promise(function (resolve, reject) {
            (new Adv(".cartbox")).init();
            resolve();
        })
    })
})