class Detailbox {
    constructor() {

    }
    init() {
        $(`
        <div class="toph" id="back"></div><div class="nav"></div>
        <div class = "debox"></div><div class = "footer"></div>
        `).appendTo("body");
    }
}
class Details {
    constructor(data, root) {
        this.root = root;
        this.data = data;
    }
    init() {
        this.creEle();
        this.addClick();
        this.addHover();
        this.addEveforbtn();
        this.addclickforcart();
        // this.addbig();
    }
    creEle() {
        $(`<div class="details">
        <div class="content">
            <p>
                <a class="deback" href="#">首页</a>
                <span>&gt;</span>
                <a class="deback" href="#">列表</a>
                <span>&gt;${this.data.title}</span>
            </p>
            <dl class="dedl" id="magnifier1">
                <dt>
                    <div class="debig class="zoomTarget"">
                    <img class="imgh0" src="${this.data.src}" alt="">
                    <img class="imgh1" src="${this.data.src}" alt="">
                    <img class="imgh2" src="${this.data.src}" alt="">
                    <img class="imgh3" src="${this.data.src}" alt="">
                    <img class="imgh4" src="${this.data.src}" alt="">
                    </div>
                    <div class="delit">
                    <img class="imgh0" src="${this.data.src}" alt="">
                    <img class="imgh1" src="${this.data.src}" alt="">
                    <img class="imgh2" src="${this.data.src}" alt="">
                    <img class="imgh3" src="${this.data.src}" alt="">
                    <img class="imgh4" src="${this.data.src}" alt="">
            </div>
                </dt>
                <dd>
                    <div class="detop">
                        <img src="https://img03.miyabaobei.com/d1/p2/2016/01/12/e9/11/e91156a566041019ba5661348b8bd97b.png"
                            alt="" class="logo_cun">
                        <span>新西兰品牌</span><i>|</i><span>蜜芽保税仓发货</span>
                    </div>
                    <div class="demid">
                        <span class="baoyou">[包邮]</span><a href="##">新西兰原装
                        </a><span>${this.data.title} </span>
                        <div>${this.data.title}</div>
                    </div>
                    <div class="price_box">
                        <div class="price_info">
                            <span class="tit_txt">售价</span>
                            <span class="pbox_price">
                                <i class="pbox_yen">¥</i><em>${this.data.sale_price}</em></span><span
                                class="pbox_market"><span>¥</span><del>${this.data.original_price}</del></span>
                            <span class="jks">进口税<span class="layer_shui">按照国家最新政策，对跨境商品征收相应进口税</span></span>
                        </div>
                        <span class="tit_txt">优惠</span>
                        <a href="##">
                            <div class="markwarp"><i class="mark-manzeng">限时秒杀</i>每人限购5件,
                                总限购200件,
                                超出按照原价计算</div>
                        </a><a href="/promotion-89275.html">
                            <div class="markwarp"><i class="mark-tejia">${this.data.active_text}</i>${this.data.active_type}</div>
                        </a>
                    </div>
                    <dl class="taozhuang">
                        <dt>套装</dt>
                        <dd><span class="item_list">2件装</span><span class="item_list">2件装</span><span
                                class="item_list">2件装</span></dd>
                    </dl>
                    <dl class="suliang">
                        <dt>数量</dt>
                        <dd class="num_box">
                            <span class="num_f">-</span>
                            <em class="num_c">1</em>
                            <span class="num_r">+</span>
                        </dd>
                    </dl>
                    <div class="dabtn clearfix">
                        <div class="button_f">
                            <a href="javascript:void(0)" class="btn_j">加入购物车</a>
                        </div>
                        <div class="button_g">
                            <a href="javascript:void(0)" class="btn_k">
                                <i class="iconfont icon-shoucang"></i>
                                <span>收藏</span>
                            </a>
                        </div>
                    </div>
                    <dl class="other clearfix">
                        <dt>编码：</dt>
                        <dd>1076457</dd>
                    </dl>
                    <div class="obtom">
                        <ul class="clearfix">
                            <li>自营<span>本商品由蜜芽自营仓库发货</span></li>
                            <li>包邮<span>本商品支持包邮，除港澳台和部分偏远地区(如新疆、青海、西藏等)外，您无需承担运费</span></li>
                            <li class="">不支持7天放心退<span>本商品不支持7天无理由退货</span></li>
                            <li class="">正品保障<span>所有商品均有太平洋保险承包产品质量保证险</span></li>
                        </ul>
                    </div>
                </dd>
        </div>
    </div>
    <div class="jimg">
        <div class="content">
            <div class="w860">
                <img src="../img/l1.jpg" alt=""><img src="../img/l2.jpg" alt=""><img src="../img/l3.jpg" alt=""><img
                    src="../img/l4.jpg" alt=""><img src="../img/l5.jpg" alt=""><img src="../img/l6.jpg" alt=""><img
                    src="../img/l7.jpg" alt="">
            </div>
        </div>
    </div>`).appendTo(this.root);
    }
    addbig() {
        var magnifierConfig = {
            magnifier: "#magnifier1", //最外层的大容器
            width: 400, //承载容器宽
            height: 400, //承载容器高
            moveWidth: null, //如果设置了移动盒子的宽度，则不计算缩放比例
            zoom: 10 //缩放比例
        };
        var _magnifier = magnifier(magnifierConfig);
    }
    addClick() {
        $(".deback").eq(0).on("click", () => {
            window.open(`http://127.0.0.1/code/mia/Gitmia/mia/miaindex.html`, "_self");
        });
        $(".deback").eq(1).on("click", () => {
            window.open(`http://127.0.0.1/code/mia/Gitmia/mia/html/miaList.html`, "_self");
        })
    }
    addHover() {
        $(".debig img").eq(0).addClass("imgh")
        // console.log($(".debig img").eq(0));

        $(".delit").on("mouseenter", "img", function () {
            $(".debig img").eq($(this).index()).addClass("imgh").siblings().removeClass("imgh");
        })
    }
    addEveforbtn() {
        $(".num_f").click(() => {
            let text = $(".num_c").text() - 1;
            text < 1 ? $(".num_c").text(1) : $(".num_c").text(text);
        })
        $(".num_r").click(() => {
            let text = Number($(".num_c").text()) + 1;
            text > 10 ? $(".num_c").text(10) : $(".num_c").text(text);
        })

    }
    addclickforcart() {
        $(".btn_j").click(() => {
            // console.log(this.data);
            var gid = this.data.gid * 1;
            var price = this.data.sale_price;
            var num = $(".num_c").text();
            var src = this.data.src;
            var title = this.data.title;
            var op = this.data.original_price;


            $.ajax({
                type: "get",
                url: "../api/addCart.php",
                data: `gid=${gid}&price=${price}&num=${num}&src=${src}&title=${title}&op=${op}`,
                dataType: "json",
                success: function (response) {
                    console.log(response);
                    var text = response["totalRow"];
                    // localStorage.setItem("gs", text)

                    $(".gwcsl").html(text)

                }
            });
        })
    }
}

//加载页面
$(function () {
    new Promise(function (resolve, reject) {
        (new Detailbox()).init();
        resolve();
    })
        .then(function () {
            return new Promise(function (resolve, reject) {
                let a = Cookie.getItem("usn");
                (new Header(".toph", a)).init();
                // (new Header(".toph")).init();
                resolve();
            })
        })
        .then(function () {
            return new Promise(function (resolve, reject) {
                $.ajax({
                    type: "post",
                    url: `../api/getDataList${localStorage.i}.php`,
                    data: `page=${localStorage.page}&orderType=${localStorage.oT}`,
                    dataType: "json",
                    success: function (response) {
                        // console.log(124567890);
                        var suju = "";
                        for (const i of response) {
                            // console.log( localStorage.gid, response);
                            if (i.gid == localStorage.gid) {
                                suju = i;
                            }
                        };
                        (new Details(suju, ".debox")).init();
                        resolve();
                    }
                });

            })
        })
        .then(function () {
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

    //下面的是$(function(){})的结尾
})