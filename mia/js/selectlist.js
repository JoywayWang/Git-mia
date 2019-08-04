class Selectlist {
    constructor(data, root) {
        this.data = data;
        this.root = root;
    }
    init() {
        this.creEle();
    }
    creEle() {
        let html = this.data.map(function (e, i) {
            let html2 = e.text.map(function (ele) {
                return `<a href="##">${ele}</a>`;
            }).join("");
            console.log(i, e);
            return ` <li><dl><dt>${e.title}</dt><dd>${html2}</dd></dl></li>`
        }).join("");
        $(`<ul>${html}</ul>`).appendTo(this.root);
    }
}