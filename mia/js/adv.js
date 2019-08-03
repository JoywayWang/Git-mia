class Adv {
    constructor(root) {
        this.root = root;
    }
    init() {
        // console.log(12456);

        this.creEle();
        this.addeve()
    }
    creEle() {
        let html = `<div class="navleft">
        <img class="leftimg1" src="https://img.miyabaobei.com/d1/p3/2016/05/19/c2/8f/c28f17d15a13149cfa89f18dc32efb87.png">
        <img class="leftimg2" src="https://img.miyabaobei.com/d1/p5/2016/11/15/d0/07/d007602602b2889dca7a8b7dbd43cb3a963181367.png">
        </div>
        <div class="navright"">
         <div class="navlist">
            <ul>
            <li><a href="##"><i class="iconfont icon-ai-cart"></i>购物车</a></li>
            <li><i class="iconfont icon-zixundianhua"></i>咨询</li>
            <li><i class="iconfont icon-zixun1"></i>微信<div class="wx-f"></div></li>
            </ul>
            <div class="side-top"><a href ="#back"><i></i></a></div>
        </div>`;
        $(`<div class= "nav">${html}</div>`).appendTo(this.root);
    }
    addeve() {
        $(".navlist").find("li").eq(2).hover(function () {
            console.log(1231);
            // $(".wx-f").addClass("wxfactive");
            $(".wx-f").animate({
                position: "absolute",
                width: "157px",
                height: "193px",
                bottom: "1px",
                background: "url(../ img / wxf.png) no - repeat",
                display: "block",
                right: "30px"
            }, 1000);

        }, function () {
            // out
        }
        );
    }
}