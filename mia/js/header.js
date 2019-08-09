class Header {
    constructor(root = "body", a = 0) {
        this.root = root;
        this.a = a;
    }

    init() {
        this.creEle();
        this.addEventfortop();
        this.addEventforheader();
    }

    creEle() {
        console.log(this.a);

        if (this.a == 0) {
            this.a = "你好，欢迎来到蜜芽！";
            this.b = "cospan1";
            this.c = "cospan2";
        } else {
            this.a = `你好，${this.a}`;
            this.b = "cospan2";
            this.c = "cospan1";
        }
        let htmltop = ` <div class="content"><a class="a-souji fl"href="#"><i class="iconfont icon-shouji"></i><span>手机蜜芽</span></a>
        <a id="tuicu" class="fr ${this.b}"href="">退出</a><a class="fr"href="#">帮助中心</a><a class="fr ${this.c}"href="#" id="zhuce">免费注册</a><em class="fr">|</em><a class="fr ${this.c}"href="#" id = "denglu">登录</a><span class="fr">${this.a}</span></div>`;
        let htmlheader = `<div class="content"><a class="logo"href="#"><img src="https://img.miyabaobei.com/d1/p4/2016/11/15/6e/92/6e9213dbef73af424807b48100a7933a745368439.png"
        alt=""></a><div class="r"><div class="search"><div class="Nsearch"><input class="N_a"type="text"placeholder="兔头妈妈甄选"><input class="N_b"

        type="button"value="搜索"><div class="lenovoWord"></div></div><p class="hot"><a href="#">沛多力DHA</a></p></div><div class="cart"><a><i class="iconfont icon-ai-cart"></i><span>购物车</span></a><div class="cart-more"><div>购物车还没有商品，快去选购吧！</div></div></div></div></div>`;
        $(`<div class="top">${htmltop}
            </div><div class="header">${
            htmlheader
            }

            </div>`).appendTo(this.root);
    }

    addEventfortop() {
        $(".top").on("mouseenter", "a", function () {
            $(this).addClass("a_active");
        }

        );

        $(".top").on("mouseleave", "a", function () {
            $(this).removeClass("a_active");
        }

        );
        $("#tuicu").click(function () {
            Cookie.setItem("usn", "", -1, "/");
        });
        $("#denglu").click(function () {
            window.location.href = "/code/mia/Gitmia/mia/html/login.html";
        })
        $("#zhuce").click(function () {
            window.location.href = "/code/mia/Gitmia/mia/html/sign.html";
        })
        $(".cart").click(function () {
            window.open("/code/mia/Gitmia/mia/html/cart.html", "_self");
        })
    }

    addEventforheader() {
        $(".cart").on("mouseenter", function () {
            $(this).addClass("a-hover");
            $(this).children("a").addClass("ahovera clearfix");
            $(this).children("div").addClass("cart-morehover");
        }

        ); $(".cart").on("mouseleave", function () {
            $(this).removeClass("a-hover");
            $(this).children("a").removeClass("ahovera clearfix");
            $(this).children("div").removeClass("cart-morehover");
        }

        ); $(".logo").click(function () {
            window.open(`http://127.0.0.1/code/mia/Gitmia/mia/miaindex.html`, "_self");
        })
            ; $(".cart").click(function () {
                window.open("/code/mia/Gitmia/mia/html/cart.html", "_self");
            })
    }
}