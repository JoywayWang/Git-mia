class Newuser {
    constructor(data, root, n = 0) {
        this.data = data;
        this.root = root;
        this.n = n;
    }
    init() {
        this.creEle();
        if (this.n == 1) {
            this.addEve();
            Cookie.setItem("new", 1, -1, '/');

        }
    }
    creEle() {
        $(`<div class="content"><a href="##"><img src="${this.data}" alt=""></a></div>`).appendTo(this.root)
    }
    addEve() {
        setTimeout(() => {
            $(this.root).slideDown("slow").delay(800).fadeOut().fadeIn();
        }, 1000);
    }
}