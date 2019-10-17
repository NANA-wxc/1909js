require(['config'], function () { //调用config配置模块
    require(['jquery','jqcookie','detail_addmod'], function () {
        
        function bufferMove(obj, json, fn) {
            var speed = 0;
            function getstyle(obj, attr) {
                if (window.getComputedStyle) {
                    return getComputedStyle(obj)[attr];
                } else {
                    return obj.currentStyle[attr];
                }
            }
            clearInterval(obj.timer);
            obj.timer = setInterval(function () {
                var bstop = true;
                for (var attr in json) {
                    var currentvalue = null;
                    if (attr === 'opacity') {
                        currentvalue = Math.round(getstyle(obj, attr) * 100);
                    } else {
                        currentvalue = parseInt(getstyle(obj, attr));
                    }
                    speed = (json[attr] - currentvalue) / 5;
                    speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
                    if (currentvalue !== json[attr]) {
                        if (attr === 'opacity') {
                            obj.style.opacity = (currentvalue + speed) / 100;
                            obj.style.filter = 'alpha(opacity=' + (currentvalue + speed) + ')';
                        } else {
                            obj.style[attr] = currentvalue + speed + 'px';
                        }
                        bstop = false;
                    }
                }
                if (bstop) {
                    clearInterval(obj.timer);
                    fn && typeof fn === 'function' && fn();
                }
            }, 1000 / 60);
        };
           let showlinum = 5;                
let btntop = document.querySelector('#reg_commodity_but_top');
let btnbottom = document.querySelector('#reg_commodity_but_bottom');
let listul = document.querySelector('#ulist ul');

btnbottom.onclick = function () {
let liTop = picli[1].offsetTop;
if (showlinum < picli.length) {
btntop.style.background = '';
showlinum++;
if (showlinum === picli.length) {
    btnbottom.style.color = '#fff';
}
console.log(picli);
bufferMove(listul, {
   top: -(showlinum - 5) * liTop
});
}
};

console.log(picli[1]);
        console.log(1);

btntop.onclick = function () {
let liTop = picli[1].offsetTop;
if (showlinum > 5) {
btnbottom.style.color = '#333';
showlinum--;
if (showlinum === 5) {
    btntop.style.color = '#fff';
}
bufferMove(listul, {
    top: -(showlinum - 5) * liTop
});
}
};
});
});