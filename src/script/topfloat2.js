
$(function(){       
    //获取要定位元素距离浏览器顶部的距离
    let navH = $("#loutinav").offset().top;
    //滚动条事件
    $(window).scroll(function(){
            //获取滚动条的滑动距离
            let scroH = $(this).scrollTop();
            //滚动条的滑动距离大于等于定位元素距离浏览器顶部的距离，就固定，反之就不固定
            if(scroH>=navH){
                    $("#loutinav").css({"position":"fixed","top":50});
            }else if(scroH<navH){
                    $("#loutinav").css({"position":"static"});
            }
        //     console.log(scroH==navH);
    })
})