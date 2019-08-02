class Header {
    constructor(root = "body") {
        this.root = root;
    }

    init() {
        this.creEle();
        this.addEventfortop();
        this.addEventforheader();
    }

    creEle() {
        let htmltop = ` <div class="content"><a class="a-souji fl"href="#"><i class="iconfont icon-shouji"></i><span>手机蜜芽</span></a><a class="fr"href="#">帮助中心</a><a class="fr"href="#">免费注册</a><em class="fr">|</em><a class="fr"href="#">登录</a><span class="fr">你好，欢迎来到蜜芽！</span></div>`;
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

        )
    }
}