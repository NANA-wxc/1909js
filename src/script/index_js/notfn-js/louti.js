class louti {
    constructor() {
        this.loutinav = $('#loutinav');
        this.loutili = $('#loutinav li').not('.last');
        this.louceng = $('#merch_list .louceng');
        this.last = $('.last');
    }
    init() {
        let _this = this;

        let $top = $(window).scrollTop();//获取当前的scrollTop值
        if ($top >= 700) {
            this.loutinav.show();
        } else {
            this.loutinav.hide();
        }
        //1.拖动滚动显示隐藏楼梯
        $(window).on('scroll', function () {
            let $top = $(this).scrollTop();
            if ($top >= 700) {
                _this.loutinav.show();
            } else {
                _this.loutinav.hide();
            }
            //4.拖动滚轮，楼梯和楼层对应
            //利用楼层的top值进行判断。
            _this.louceng.each(function (index, element) {
                //每一个楼层的top值，固定的值。
                let $loucengtop = _this.louceng.eq(index).offset().top + $(element).height() / 2;
                if ($loucengtop > $top) {
                    _this.loutili.removeClass('active1');
                    _this.loutili.eq(index).addClass('active1');
                    return false;
                }
            });

        });
        //2.点击左侧的楼梯，显示右侧对应的图层
        this.loutili.on('click', function () {
            $(this).addClass('active1').siblings('li').removeClass('active1');
            //获取每一个楼层的top值
            let $loucengtop = _this.louceng.eq($(this).index()).offset().top;
            //document.documentElement.scrollTop=100
            $('html,body').animate({
                scrollTop: ($loucengtop-100)
            });
        });  
        //3.回到顶部
        this.last.on('click', function () {
            $('html,body').animate({
                scrollTop: 0
            });
        });
    }
}
new louti().init()