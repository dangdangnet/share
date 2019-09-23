function layerSuccess(msg,url) {
    layer.msg(msg,{icon:1,time:1000,offset:'20px'});
    if(typeof url !='undefined'){
        setTimeout(function () {
            location.href = url;
        },1000)
    }
}

function layerError(msg) {
    layer.msg(msg,{icon:2,time:2000,offset:'20px'});

}

//ajax post提交，然后layer弹窗效果
function ajaxPost(url,jsonData,callbackFunc){
    $.ajax({
        url:url,
        data:jsonData,
        type:'post',
        dataType:'json',
        success:function(response){
            var status = false;
            //登陆成功
            if(response.code == '1'){
                status = true;
                layerSuccess(response.msg,response.url);
            }else{
                layerError(response.msg);
            }
            //执行回调函数
            if(typeof callbackFunc != 'undefined'){
                callbackFunc(status);
            }
        }
    })
}