class Dapai {
    constructor(data, root) {
        this.data = data;
        this.root = root;
    }
    init() {
        // console.log("大牌页是否执行")
        this.creEle();
        this.addEve();
    }
    creEle() {
        let html = $.map(this.data, function (elementOrValue, indexOrKey) {
            let html2 = $.map(elementOrValue.list, function (ele, index) {
                let b = ` <div class="blank_items">
                    <a href="###">
                        <div class="gds-img">
                            <img class="lazyload"
                                src="${ele.img}">
                            <span class="free_tax">满减</span>
                        </div>
                        <div class="gds-desc">
                            <p class="tit">${ele.text}</p>
                            <div class="price">
                                <span class="new">¥<em>${ele.nprice}</em></span><span class="old">¥<del>${ele.oprice}</del></span>
                            </div>
                        </div>
                    </a>
                </div>`;
                return b;
            }).join("");
            let a = ` <div class="dolist"><div class="lisdiv clearfix">
            <div class="dtop"><div class="tdiv"><a href="###" target="_blank">
            <span class="blank_img"><span class="blank_span"></span>
            <img class="blank_img" src="${elementOrValue.src}"></span>${elementOrValue.title} </a>
            </div></div><div class="dbot">${html2}</div></div>`;
            return a;
        }).join("");
        $(`<div class="content">
            <h3 class="mod-h3">大牌尖货<span>全世界的品牌 优惠特卖</span></h3>${html}</div>
        </div>`).appendTo(this.root);
    }
    addEve() {

    }
}