//调用模块
require(['config'], function () { //调用config配置模块
    require(['jquery','jqcookie'], function () { //加载模块

        $(function(){       
            //获取要定位元素距离浏览器顶部的距离
            let navH = $(".xpartCon").offset().top;
            //滚动条事件
            $(window).scroll(function(){
                    //获取滚动条的滑动距离
                    let scroH = $(this).scrollTop();
                    //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
                    if(scroH>=navH){
                            $(".xpartCon").css({"position":"fixed","top":0});
                    }else if(scroH<navH){
                            $(".xpartCon").css({"position":"static","margin":"0 auto"});
                    }
                    // console.log(scroH==navH);
            })
        })
    });
});