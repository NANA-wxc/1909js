let ajax=new XMLHttpRequest();
ajax.open('get','http://localhost/UNIQLO/php/conn1.php',true);
ajax.send();
ajax.onreadystatechange=function(){
    if(ajax.readyState===4){

        let jsondata=ajax.responseText;
        // console.log(JSON.parse(jsondata));
        let newsdata=JSON.parse(jsondata)
        let strhtml = ""
            for (let value of newsdata) {
                strhtml += `<a href="javascript:;"><li>
                        <img src="${value[`trade picture url`]}" alt="">
                    <p>${value[`trade kind`]}</p><p>${value[`trade size`]}</p><br><p>${value[`trad name`]}</p>
                    <span>￥${value[`trade price`]}</span>
                </li></a>
              `;
            
            
            }
            

                document.querySelector('#ac_add').innerHTML = strhtml




    }
}