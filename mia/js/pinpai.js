class Pinpai {
    constructor(data, root) {
        this.data = data;
        this.root = root;
    }
    init() {
        this.creEle();
        this.addEve();

    }
    creEle() {
        // console.log("品牌部分执行");

        let html1 = $.map(this.data, function (elementOrValue, indexOrKey) {
            let html2 = $.map(elementOrValue.src, function (e, i) {
                return ` <a href="#"><img src="${e}" alt=""/></a>`;
            }).join("");
            return ` <div class="ppbox">
                <h3>${elementOrValue.title}</h3>
                <div class="brands">${html2}</div>
                </div>`
        }).join("");
        $(`<div class="content">${html1}</div>`).appendTo(this.root);
    }
    addEve() {
        let item = $(".ppbox");
        let index = 0;
        setInterval(() => {
            item.eq(index).addClass("ppactive").siblings().removeClass("ppactive");
            index++;
            if (index >= this.data.length) {
                index = 0;
            }
        }, 2000);
    }
}
