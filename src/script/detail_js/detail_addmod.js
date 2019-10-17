require(['config'], function () { //调用config配置模块
    require(['jquery','jqcookie'], function () { //加载模块
        let ajax=new XMLHttpRequest();
        ajax.open('get','http://localhost/UNIQLO/php/conn_detail.php',true);
        ajax.send();
        ajax.onreadystatechange=function(){
            if(ajax.readyState===4){
        
                let jsondata=ajax.responseText;
                let newsdata=JSON.parse(jsondata)
                let sid_data1=newsdata[0].url.split(',')
                // console.log(sid_data1)
                let strhtml = ''
                    for (let value in sid_data1) {
                        // console.log(sid_data1[value])

                        strhtml += `<li>
                                <img src="${sid_data1[value]}" alt="">
                        </li>
                      `;                  
                    }
                    // console.log(strhtml)
                   
                    document.getElementById('register_photo_add').innerHTML=strhtml
                    
                    picli=document.querySelectorAll('#register_photo_add li');
                   console.log(picli)
                   console.log(picli[1]);

//                    function bufferMove(obj, json, fn) {
//                     var speed = 0;
//                     function getstyle(obj, attr) {
//                         if (window.getComputedStyle) {
//                             return getComputedStyle(obj)[attr];
//                         } else {
//                             return obj.currentStyle[attr];
//                         }
//                     }
//                     clearInterval(obj.timer);
//                     obj.timer = setInterval(function () {
//                         var bstop = true;
//                         for (var attr in json) {
//                             var currentvalue = null;
//                             if (attr === 'opacity') {
//                                 currentvalue = Math.round(getstyle(obj, attr) * 100);
//                             } else {
//                                 currentvalue = parseInt(getstyle(obj, attr));
//                             }
//                             speed = (json[attr] - currentvalue) / 5;
//                             speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
//                             if (currentvalue !== json[attr]) {
//                                 if (attr === 'opacity') {
//                                     obj.style.opacity = (currentvalue + speed) / 100;
//                                     obj.style.filter = 'alpha(opacity=' + (currentvalue + speed) + ')';
//                                 } else {
//                                     obj.style[attr] = currentvalue + speed + 'px';
//                                 }
//                                 bstop = false;
//                             }
//                         }
//                         if (bstop) {
//                             clearInterval(obj.timer);
//                             fn && typeof fn === 'function' && fn();
//                         }
//                     }, 1000 / 60);
//                 };
//                    let showlinum = 5;                
//     let btntop = document.querySelector('#reg_commodity_but_top');
//     let btnbottom = document.querySelector('#reg_commodity_but_bottom');
//     let listul = document.querySelector('#ulist ul');

// btnbottom.onclick = function () {
//     let liTop = picli[1].offsetTop;
//     if (showlinum < picli.length) {
//         btntop.style.background = '';
//         showlinum++;
//         if (showlinum === picli.length) {
//             btnbottom.style.color = '#fff';
//         }
//         bufferMove(listul, {
//            top: -(showlinum - 5) * liTop
//         });
//     }
// };



// btntop.onclick = function () {
//     let liTop = picli[1].offsetTop;
//     if (showlinum > 5) {
//         btnbottom.style.color = '#333';
//         showlinum--;
//         if (showlinum === 5) {
//             btntop.style.color = '#fff';
//         }
//         bufferMove(listul, {
//             top: -(showlinum - 5) * liTop
//         });
//     }
// };1
                }
                
            }
        
        
    });
});