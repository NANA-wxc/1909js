//主模块文件--加载或者调用模块
//require 调用模块，接收二个参数。
//第1个参数是一个数组，表示所依赖的模块  
//第2个参数是一个回调函数，当前面指定的模块都加载成功后，它将被调用。


//require调用模块，一个页面可以有多个，define定义模块，一个页面只能有一个。

// require(['sum'],function(s1){//s1:mod1模块  
//     console.log(s1.sum())
// });

//require(['effect','lunbo','sum']);//调用三个模块

require(['jqmod']);




