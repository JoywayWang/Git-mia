class Tuijian {
    constructor(data, root) {
        this.data = data;
        this.root = root;
    }
    init() {
        this.creEle();
        this.addEve();

    }
    creEle() {
        let html = $.map(this.data, function (elementOrValue, indexOrKey) {
            return `<a class="tuia" href="##">
                    <div class="gds-img"> <img
                            src="${elementOrValue.src}" alt="">
                    </div>
                    <div class="rim">
                        <div class="tit">${elementOrValue.name}</div>
                        <p class="desc">${elementOrValue.jieshao}</p>
                        <i class="gsh-mark" style="display:none;">自营</i>
                        <div class="price">
                            <span class="new">秒杀价:¥<em>${elementOrValue.mprice}</em></span>
                            <span class="old">市场价:¥<del>${elementOrValue.sprice}</del></span>
                        </div>
                        <p class="buy">${elementOrValue.buynum}人已买</p> <span class="btn">马上抢</span>
                    </div>
                </a>`;
        }).join("");
        $(`<div class="content">
            <h3>为你推荐<span>千万妈妈 精明之选</span></h3>
            <div class="tyuid">
               ${html}
            </div>
        </div>`).appendTo(this.root);
    }
    addEve() {
        $(".tyuid").on("mouseenter", ".tuia", function () {
            $(this).find("img").addClass("gdsactive");
            $(this).find(".tit").addClass("titactive");
        });

        $(".tyuid").on("mouseleave", ".tuia", function () {
            $(this).find("img").removeClass("gdsactive");
            $(this).find(".tit").removeClass("titactive");
        });
        $(".btn").hover(function () {
            $(this).addClass("btnhover");
        }, function () {
            $(this).removeClass("btnhover");

        })

    }
}