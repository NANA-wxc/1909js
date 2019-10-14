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
       

                strhtml += `<li>
                        <img src="${value[`trade picture url`]}" alt="">
                    <span>${value[`trade kind`]}</span><span>${value[`trade size`]}</span><br><span>${value[`trad name`]}</span><span>${value[`trade price`]}</span>
                </li>
              `;
            
            
            }
            

                document.querySelector('#ac_add').innerHTML = strhtml




    }
}