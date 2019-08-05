class Nav {
    constructor(data, root) {
        this.root = root;
        this.data = data;
    }
    init() {
        this.creEle();
        this.addEvent();
        this.addClick();
    }
    creEle() {
        let html5 = this.data.map(function (e, i) {
            // console.log(i, e)
            let html1 = e.text.map(function (ele) {
                return ` <a href="#">${ele}</a>`;
            }).join("");
            let html2 = e.left.map((a) => {
                let html3 = a.text.map((b) => {
                    return `<a href="#">${b}</a>`;
                }).join("");
                return `<div class = lala><h3>${a.name}</h3>
                <p>${html3}</p></div>`;
            }).join("");
            // console.log(e.right);
            let d = e.right.src;
            // console.log(d);
            let html4 = Array.from(d).map((c) => {
                return `<a href="#"><img src = "${c}"></a>`;
            }).join("");
            // console.log(e)
            return ` <li><dl><dt><strong><a href="#">${e.title}</a></strong>
                    <p>${html1}</p></dt>
                                <dd>
                                    <div class="t_left">${html2}</div>
                                    <div class="t_right">
                                      <h3>${e.right.name}</h3>
                <div>${html4}</div>
                                    </div>
                                </dd>
                            </dl>
                        </li>`;
        }).join("");
        let html = `
            
                <div class="nav-box">
                    <h3>全部商品分类</h3>
                    <ul class="nav-tab">
                    ${html5}
                    </ul>
                </div>
                <ul class="nav-list">
                    <li><a class="fl" href="#">首页</a></li>
                    <li><a class="fl" href="#">纸尿裤</a></li>
                    <li><a class="fl" href="#">奶粉</a></li>
                    <li><a class="fl" href="#">正品保证<span></span></a></li>
                    <li><a class="fl" href="#">早教音乐</a></li>
                    <li><a class="fl" href="#">药品信息</a></li>
                    <li><a class="fl" href="#">信息报告</a></li>
                </ul>
       `
        $(`<div class="content">${html}</div>`).appendTo(this.root);
    }
    addEvent() {
        $(".nav-tab").on("mouseenter", "dl", function () {
            // console.log(1);
            $(this).children("dd").addClass("ddactive").siblings().removeClass("ddactive");
            // $(this).children("dt").addClass("dthover");
            $(this).addClass("dlh");

        })
        $(".nav-tab").on("mouseleave", "dl", function () {
            // console.log(2);
            $(this).children("dd").removeClass("ddactive");
            // $(this).parent().removeClass("lihover");
            $(this).removeClass("dlh");

        })
        $(".nav-list").on("mouseenter", "li", function () {
            $(this).children("a").addClass("liactive")
        })
        $(".nav-list").on("mouseleave", "li", function () {
            $(this).children("a").removeClass("liactive");
            $(".nav-list li").eq(0).children("a").addClass("liactive");
        })
        $(".nav-list li").eq(0).children("a").addClass("liactive");

    }
    addClick() {
        $(".nav-tab").on("click", "li", function () {
            // console.log($(this).index());
            window.localStorage.setItem("i", $(this).index());
            window.open(`http://127.0.0.1/code/mia/Gitmia/mia/html/miaList.html`, "_self");
        });
        $(".nav-list").on("click", "li", function () {
            let a = $(this).index();
            if (a == 0) {
                window.open(`http://127.0.0.1/code/mia/Gitmia/mia/miaindex.html`, "_self");
            }
            else if (a == 1 || a == 2) {
                window.localStorage.setItem("i", 0);
                window.open(`http://127.0.0.1/code/mia/Gitmia/mia/html/miaList.html`, "_self");
            }
            else if (a > 2 && a < 7) {
                window.localStorage.setItem("i", 6);
                window.open(`http://127.0.0.1/code/mia/Gitmia/mia/html/miaList.html`, "_self");

            }
        });
    }
}