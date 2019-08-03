class Banner {
    constructor(data, root) {
        this.data = data;
        this.root = root;
    }
    init() {
        let self = this;
        // console.log(111)
        $(`
               <div class="swiper-container">
                <div class="swiper-wrapper"></div>
                 <div class="swiper-pagination"></div>
                 <div class="swiper-button-prev"></div>
                 <div class="swiper-button-next"></div>
                 </div>
               `).appendTo(this.root);
        // $(".nav").after(".");
        this.data.map(function () {
            $(`<div class="swiper-slide"></div>`).appendTo(".swiper-wrapper")
        })
            ;
        $(".swiper-slide").each(function () {
            $(this).css("background", `url(./img/${self.data[$(this).index()]})`);

        });
        var mySwiper = new Swiper('.swiper-container', {
            // direction: 'vertical', // 垂直切换选项
            loop: true, // 循环模式选项

            // 如果需要分页器
            pagination: {
                el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            }, autoplay: true

        })
    }

}