class Sign {
    constructor() {
        this.r = "";
    }
    init() {
        this.creEle();
        this.usn = $("#usn");
        this.pho = $("#pho");
        this.psw = $("#psw");
        this.psw2 = $("#psw2");
        this.yzm = $("#yzm");
        this.getCaptcha();
        this.addBlur();
        this.addEveforbtn();
        this.addclick();

    }
    creEle() {
        let html = `<div class="loginlogo">
        </div>
        <div class="logincontent">
            <div class="login_t">
                <h3>注册账号</h3>
            </div>
            <div class="sign_m">
                <div class="login_ml">
                    <label for="usn">用户名：</label>
                    <label for="pho">手机号：</label>
                    <label for="psw">密 码：</label>
                    <label for="psw2">确认密码：</label>
                    <label for="yzm">验证码：</label>
                </div>
                <div class="login_mr">
                    <div class="divforinput"><input type="text" id="usn">
                        <p></p>
                    </div>
                    <div class="divforinput"><input type="text" id="pho">
                        <p></p>
                    </div>
                    <div class="divforinput"><input type="text" id="psw">
                        <p></p>
                    </div>
                    <div class="divforinput"><input type="text" id="psw2">
                        <p></p>
                    </div>
                    <div class="divforinput"><input class="input2" type="text" id="yzm">
                    <canvas width="114.5" height="30"  id="captcha1"></canvas>
                        <p></p>
                    </div>
                </div>
            </div>
            <button>点击注册</button>
            <div class="login_b">
                <p>使用以下账号登录：</p>
                <a class="login_wx" href="jvascript:;" title="使用微信帐号登录"></a>
                <a class="login_sina" href="jvascript:;" title="使用新浪微博帐号登录"></a>
                <a class="sign2login" href="##">已注册！点击登录</a>
            </div>
        </div>
        <div class="logintext">
            Copyright ©2019 蜜缇(上海)网络科技有限公司 Miyabaobei.com 保留一切权利。客服热线： 010-10108088。沪ICP备16004431号-2
        </div>`;
        $(`<div class="login">${html}</div>`).appendTo("body");
    }
    getCaptcha() {
        let captcha1 = new Captcha();
        captcha1.draw(document.querySelector('#captcha1'), r => {
            // console.log(r, '验证码1');
            this.r = r;
        });
    }
    addBlur() {
        this.n1 = 0;
        this.n2 = 0;
        this.n3 = 0;
        this.n4 = 0;
        this.n5 = 0;
        this.usnreg = /^[A-Za-z0-9]{6,16}$/;
        this.phoreg = /^1[3-9]\d{9}$/;
        this.pswreg = /^[A-Za-z0-9]{6,16}$/;
        this.addEveforblur1($("#usn"), this.usnreg, "用户名");
        this.addEveforblur2($("#pho"), this.phoreg, "手机号码");
        this.addEveforblur3($("#psw"), this.pswreg, "密码");
        this.addEveforpsw2();
        this.addEveforyzm($("#yzm"), "验证码");
    }
    addEveforblur1(ele, reg, name) {
        let self = this;
        let a = ele.blur(function () {
            let text = ele.val().trim();
            let titp = ele.nextAll("p");
            if (text.length == 0) {
                titp.html(`${name}不能为空！`);
            } else if (!reg.test(text)) {
                titp.html(`${name}格式不正确！`);
            } else {
                titp.html("");
                self.n1 = 1;

            }
        })

    }
    addEveforblur2(ele, reg, name) {
        let self = this;
        let a = ele.blur(function () {
            let text = ele.val().trim();
            let titp = ele.nextAll("p");
            if (text.length == 0) {
                titp.html(`${name}不能为空！`);
            } else if (!reg.test(text)) {
                titp.html(`${name}格式不正确！`);
            } else {
                titp.html("");
                self.n2 = 1;
            }
        })

    }
    addEveforblur3(ele, reg, name) {
        let self = this;
        let a = ele.blur(function () {
            let text = ele.val().trim();
            let titp = ele.nextAll("p");
            if (text.length == 0) {
                titp.html(`${name}不能为空！`);
            } else if (!reg.test(text)) {
                titp.html(`${name}格式不正确！`);
            } else {
                titp.html("");
                self.n3 = 1;
            }
        })

    }
    addEveforyzm(ele, name) {
        let self = this;
        ele.blur(function () {
            let text = ele.val().trim();
            let titp = ele.nextAll("p");
            if (text.length == 0) {
                titp.html(`${name}不能为空！`);
            } else if (text.toLowerCase() != self.r.toLowerCase()) {
                titp.html(`${name}输入不正确！`);
            } else {
                titp.html("");
                self.n4 = 1;

            }
        })
    }
    addEveforpsw2() {
        let self = this;

        $("#psw2").blur(function () {
            let text = $(this).val().trim();
            let titp = $(this).nextAll("p");
            if (text.length == 0) {
                titp.html(`密码不能为空！`);
            } else if (text != $("#psw").val().trim()) {
                titp.html(`您输入的密码不匹配`);
            } else {
                titp.html("");
                self.n5 = 1;
            }
        })
    }
    addEveforbtn() {
        $("button").click(() => {
            let self = this
            if ((this.n1 + this.n2 + this.n3 + this.n4 + this.n5) == 5) {
                $.ajax({
                    type: "post",
                    url: "../serverside/usertask.php",
                    data: `usn=${this.usn.val().trim()}&psw=${this.psw.val().trim()}&pho=${this.pho.val().trim()}`,
                    dataType: "json",
                    success: function (response) {

                        if (response.status == "success") {
                            alert(response.msg);
                            Cookie.setItem("usn", self.usn.val().trim(), 1, '/');
                            Cookie.setItem("new", 1, 1, '/');
                            window.location.href = "../miaindex.html";
                        } else {
                            console.log(response.msg);
                            alert(response.msg);
                        }
                    }
                });
            }
            else {
                alert("请完善信息")
            }
        })
    }
    addclick() {
        $(".sign2login").click(() => {
            window.location.href = "../html/login.html";
        })
        $(".loginlogo").click(() => {
            window.location.href = "../miaindex.html";
        })
    }

}