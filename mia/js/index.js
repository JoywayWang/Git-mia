class Boxele {
    constructor(root = "body") {
        this.root = document.body;
    }
    init() {
        this.creEle();
    }
    creEle() {
        $(`<div class= "mia"></div>`).appendTo(this.root);
    }
}

$(function () {
    new Promise(function (resolve, reject) {
        (new Boxele()).init();
        resolve();
    })
        .then(function () {
            return new Promise(function (resolve, reject) {
                (new Header(".mia")).init()
            })
        })

})