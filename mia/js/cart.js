class Cartbox {
    constructor() {
    }
    init() {
        $(`<div class="cartbox">
        <div class="toph"></div>
        <div class="cart2"></div>
        <div class="footer"></div>
        </div>`).appendTo("body")
    }
}
class Cart {
    constructor(root) {
        this.root = root;
    }
    init() {
        this.getData();
        // this.creEle();

    }
    getData() {
        let self = this;
        $.ajax({
            type: "get",
            url: "../api/getCatData.php",
            // data: "data",
            dataType: "json",
            success: function (data) {
                console.log(data);
                var html = data.map(function (ele) {
                    return ` <tr>
                                <td style="width: 60px"><span class="cbox"><input type="checkbox" ${ele.isactive == 1 ? "checked" : ""} name="" id=""></span>
                                </td>
                                <td style="width: 333px"><img src="${ele.src}" alt="">
                                    <p>${ele.title}</p>
                                </td>
                                <td class="jiage"><i>${ele.price}</i><del>${ele.op}</del></td>
                                <td>
                                    <div class="slbox"><span class="jian">-</span>
                                        <input type="text" name="" class="cartsuliang" value="${ele.num}">
                                        <span class="jia">+</span></div>
                                </td>
                                <td class="xiaoji"><i></i></td>
                                <td><em>删除</em></td>
                            </tr>`;
                }).join("");
                self.creEle(html);
            }
        });
    }
    creEle(html) {
        $(` <div class="content"><div class="kong"><i class="iconfont icon-ai-cart"></i>
                    <h3>您还没有为您可爱的宝宝挑选任何商品哦~</h3>
                    <p>您可以去<a href="../miaindex.html">首页 </a>挑选宝宝喜欢的商品</p>
                </div>
                <div class="cartlist">
                    <h3>我的购物车</h3>
                    <table>
                        <thead>
                            <tr>
                                <th><span class="cbox"><input type="checkbox" name="" id=""></span><label
                                        for="">全选</label></th>
                                <th style="width: 280px">商品</th>
                                <th>单价</th>
                                <th>数量</th>
                                <th>小计</th>
                                <th>操作</th>
                            </tr>
                        </thead>
                        <tbody>
                           ${html}
                        </tbody>
                        <tfoot>
                            <tr>
                                <td><span class="cbox">
                                        </span><label for="">全选</label></td>
                                <td><a href="##">删除选择商品</a></td>
                                <td><a href="##">清除无效商品</a></td>
                                <td><a href="##">移入收藏夹 </a> </td>
                                <td class="fr"><button type="button">去结算</button>
                                </td>

                                <td class="fr">已选择商品<b>5</b> 件 合计（不含运费和进口税）：<b>¥3025</b> </td>

                            </tr>
                        </tfoot>
                    </table>
                </div></div>`).appendTo(this.root);
        this.addClick();
        this.calcRow();
        this.calCol();
    }
    addClick() {
        let self = this;
        $(".cbox").click(function () {
            console.log("点击事件");
            $(this).toggleClass("cboxactive")
        });
        $(".jian").click(function () {
            let inp = $(this).siblings("input");
            let text = inp.val() - 1;
            text < 1 ? inp.val(1) : inp.val(text);
            self.calcRow();
        });
        $(".jia").click(function () {
            let inp = $(this).siblings("input");
            let text = Number(inp.val()) + 1;
            text > 10 ? inp.val(10) : inp.val(text)
            self.calcRow();
        });
        $(".cartsuliang").on('input', function () {
            self.calcRow();
        })

    }
    calcRow() {
        $.each($(".cartlist tbody").children(), function (indexInArray, valueOfElement) {
            let aaa = $(this).children();
            aaa.eq(4).children("i").html("￥" + Number(aaa.eq(2).children("i").text()) * Number(aaa.eq(3).find("input").val()))
        });
    }
    calCol() {
        $(".cartlist tbody").children().each((i, e) => {
            // console.log(e, i, this);

        })
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
            (new Cart(".cart2")).init();
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