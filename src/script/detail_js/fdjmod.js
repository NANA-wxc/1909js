require(['config'], function () { //调用config配置模块
    require(['jquery','jqcookie','detail_addmod'], function () {

        let sf = document.querySelector('##reg_photo .photo_sm_xk');
        let bf = document.querySelector('#reg_photo .photo_bg');
        let spic = document.querySelector('#reg_photo .photo_bg img');
        console.log(sf)
        console.log(bf)
        console.log(spic)


        spic.onmouseover = function () {
            sf.style.visibility = 'visible';
            bf.style.visibility = 'visible';
            //计算小放的尺寸
            sf.style.width = spic.offsetWidth * bf.offsetWidth / bpic.offsetWidth + 'px';
            sf.style.height = spic.offsetHeight * bf.offsetHeight / bpic.offsetHeight + 'px';
            //求比例
            let bili = bpic.offsetWidth / spic.offsetWidth;
            this.onmousemove = function (ev) {
                var ev = ev || window.event;
                let l = ev.clientX - wrap.offsetLeft - sf.offsetWidth / 2;
                let t = ev.clientY - wrap.offsetTop - sf.offsetHeight / 2;
                if (l <= 0) {
                    l = 0;
                } else if (l >= spic.offsetWidth - sf.offsetWidth) {
                    l = spic.offsetWidth - sf.offsetWidth - 2;
                }
    
                if (t <= 0) {
                    t = 0;
                } else if (t >= spic.offsetHeight - sf.offsetHeight) {
                    t = spic.offsetHeight - sf.offsetHeight - 2;
                }
                sf.style.left = l + 'px';
                sf.style.top = t + 'px';
    
                bpic.style.left = -bili * l + 'px';
                bpic.style.top = -bili * t + 'px';
            }
        };
    
        spic.onmouseout = function () {
            sf.style.visibility = 'hidden';
            bf.style.visibility = 'hidden';
        };
    

    });
});