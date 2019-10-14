! function () {
    function Lunbox() {
        this.banner = $('.xbanner');
        this.btns = $('.xbtn span');
        this.imgs = $('.xscroll img');
        this.prev = $('.xprev');
        this.next = $('.xnext');
        //整个效果的思路：索引(前一个按钮索引，当前按钮索引);
        this.previndex = 0; //前一个索引
        this.index = 0; //当前索引
    }

    Lunbox.prototype.init = function () {
        let _this = this;
        this.btns.on('click', function (ev) {
            _this.index = $(this).index() //当前点击的按钮的索引
            _this.tabswitch(ev);
            _this.previndex = _this.index; //将当前索引给前一个索引。
        });

        this.banner.hover(function () {
            _this.prev.show();
            _this.next.show();
        }, function () {
            _this.prev.hide();
            _this.next.hide();
        });

        this.next.on('click', function (ev) {
            _this.rightclick(ev);
        });


        this.prev.on('click', function (ev) {
            _this.leftclick(ev);
        });


    };

    //图片切换的过程
    Lunbox.prototype.tabswitch = function (ev) {
        this.btns.eq(this.index).addClass('hover').siblings('span').removeClass('hover');

        if (this.index === 0 && this.previndex === 5) {
            if (ev.target.tagName === 'SPAN') { //点击按钮
                this.imgs.eq(this.previndex).animate({
                    left: 1280
                });
                this.imgs.eq(this.index).css('left', '-1280px').animate({
                    left: 0
                });
            } else {
                this.imgs.eq(this.previndex).animate({
                    left: -1280
                });
                this.imgs.eq(this.index).css('left', '1280px').animate({
                    left: 0
                });
            }

        } else if (this.index === 5 && this.previndex === 0) {
            if (ev.target.tagName === 'SPAN') { //点击按钮
                this.imgs.eq(this.previndex).animate({
                    left: -1280
                });
                this.imgs.eq(this.index).css('left', '1280px').animate({
                    left: 0
                });
            } else {
                this.imgs.eq(this.previndex).animate({
                    left: 1280
                });
                this.imgs.eq(this.index).css('left', '-1280px').animate({
                    left: 0
                });
            }

        } else if (this.index > this.previndex) {
            this.imgs.eq(this.previndex).animate({
                left: -1280
            });
            this.imgs.eq(this.index).css('left', '1280px').animate({
                left: 0
            });
        } else if (this.index < this.previndex) {
            this.imgs.eq(this.previndex).animate({
                left: 1280
            });
            this.imgs.eq(this.index).css('left', '-1280px').animate({
                left: 0
            });
        }

    };

    //左右箭头切换
    Lunbox.prototype.rightclick = function (ev) {
        this.index++;
        if (this.index > this.btns.length - 1) {
            this.index = 0;
            this.previndex = 5;
        }
        this.tabswitch(ev);
        this.previndex = this.index; //将当前索引给前一个索引。
    };

    Lunbox.prototype.leftclick = function (ev) {
        this.index--;
        if (this.index < 0) {
            this.index = 5;
            this.previndex = 0;
        }
        this.tabswitch(ev);
        this.previndex = this.index; //将当前索引给前一个索引。
    }

    new Lunbox().init();
}();