class BannerManager {
    constructor(data, root = document.body) {
        this.data = data;
        this.slider = null;
        this.sliderBox = null;
        this.sliderControl = null;
        this.sliderNav = null;
        this.root = root;

        this.sliderItemWidth = 700;
        this.index = 0;
        this.sliderItemCount = this.data.length;
        this.timer = null;
    }
    init() {
        this.createHTML();
        this.root.appendChild(this.slider);
        this.addClickHandle();
        this.autoPlay();
        this.addMouseHandle();
        this.switchSlideNavItem();
        this.addClickNacItemHandle();
    }
    createHTML() {
        let sliderBox = document.createElement("ul");
        sliderBox.className = "slider-box";
        sliderBox.innerHTML = this.data.map((item) => {
            return `<span class="slider-box-item"><img src=${item}></span>`
        }).join("");

        let sliderControl = document.createElement("div");
        sliderControl.className = "slider-control";
        sliderControl.innerHTML = `
                        <span class="prev">&lt;</span>
                        <span class="next">&gt;</span>
                    `
        let sliderNav = document.createElement("ol");
        sliderNav.className = "slider-nav";
        sliderNav.innerHTML = this.data.map((item, i) => {
            return `<span class="slider-nav-item">${i + 1}</span>`
        }).join("");

        let slider = document.createElement("div");
        slider.className = "slider";
        slider.appendChild(sliderBox);
        slider.appendChild(sliderControl);
        slider.appendChild(sliderNav);

        this.slider = slider;
        this.sliderBox = sliderBox;
        this.sliderControl = sliderControl;
        this.sliderNav = sliderNav;

    }
    autoPlay() {
        this.timer = setInterval(() => {
            this.next();
        }, 2000);
    }
    setRandomColor() {
        let getColor = () => {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            let a = Math.random();
            return `rgba(${r},${g},${b},${a})`;
        }

        Array.from(this.sliderBox.children).forEach((ele) => {
            ele.style.background = getColor();
        })
    }
    addClickHandle() {
        this.sliderControl.onclick = (e) => {
            if (e.target.className == "prev") {
                this.prev();
            } else if (e.target.className == "next") {
                this.next();
            }
        }
    }
    next() {
        this.index++;
        /* 临界值检查 */
        if (this.index > (this.sliderItemCount - 1)) {
            this.index = 0;
        }
        this.sliderBox.style.left = -this.index * this.sliderItemWidth + "px";
        this.switchSlideNavItem();
    }
    prev() {
        this.index--;
        /* 临界值检查 */
        if (this.index < 0) {
            this.index = this.sliderItemCount - 1;
        }
        this.sliderBox.style.left = -this.index * this.sliderItemWidth + "px";
        this.switchSlideNavItem();
    }
    addMouseHandle() {
        this.slider.onmouseenter = () => {
            clearInterval(this.timer);
        }

        this.slider.onmouseleave = () => {
            this.autoPlay();
        }
    }
    switchSlideNavItem() {
        Array.from(this.sliderNav.children).forEach((ele) => {
            ele.className = "slider-nav-item"
        })
        this.sliderNav.children[this.index].className = "slider-nav-item active";
    }
    addClickNacItemHandle() {
        Array.from(this.sliderNav.children).forEach((ele, i) => {
            ele.onclick = () => {
                this.index = i;
                this.switchSlideNavItem();
                this.sliderBox.style.left = -this.index * this.sliderItemWidth + "px";
            }
        })
    }
}
