class Newuser {
    constructor(data, root) {
        this.data = data;
        this.root = root;
    }
    init() {
        this.creEle();
        this.addEve();
    }
    creEle() {
        console.log(111);

        $(`<div class="content"><a href="##"><img src="${this.data}" alt=""></a></div>`).appendTo(this.root)
    }
    addEve() {
        setTimeout(() => {
            $(this.root).slideDown("slow").delay(800).fadeOut().fadeIn().delay(3000).slideUp("slow");
        }, 3000);
    }
}