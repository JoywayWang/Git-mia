class Nav {
    constructor(root = "body") {
        this.root = root;
    }
    init() {
        this.creEle();
    }
    creEle() {
        let html = `<nav class="nav">
            <div class="content">
                <div class="nav-box">
                    <h3>全部商品分裂</h3>
                    <ul class="nav-tab">
                        <li>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>
                            <dl>
                                <dt>
                                    <strong><a href="#">奶粉/纸尿裤</a></strong>
                                    <p>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">奶粉/</a>
                                        <a href="#">奶粉裤</a>
                                        <a href="#">纸尿裤</a>
                                        <a href="#">奶粉/</a>
                                    </p>
                                </dt>
                                <dd>
                                    <div class="t_left"></div>
                                    <div class="t_right"></div>
                                </dd>
                            </dl>


                        </li>
                    </ul>
                </div>
                <ul class="nav-list">
                    <li><a class="fl" href="#">首页</a></li>
                    <li><a class="fl" href="#">纸尿裤</a></li>
                    <li><a class="fl" href="#">奶粉</a></li>
                    <li><a class="fl" href="#">正品保证<span></span></a></li>
                    <li><a class="fl" href="#">首页</a></li>
                    <li><a class="fl" href="#">纸尿裤</a></li>
                    <li><a class="fl" href="#">奶粉</a></li>
                </ul>
            </div>
        </nav>`
        $(`<div class= "mia"></div>`).appendTo(this.root);
    }
}