$(function(){
    var clientH=$(window).height();
    var num=0;
    var flag=true;
    // $("#fullpage").mousedown(function (e) {
    //     e.preventDefault();
    // })
    // $("#fullpage").mousemove(function (e) {
    //     e.preventDefault();
    // })
    touch.on("body","swipeup","#fullpage",function(){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }

        flag=false;

        $("#fullpage").css({
            "marginTop":-num*clientH,
            transition:"margin-top 1s ease"
        })
    });

    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css({
            "marginTop":-num*clientH,
            transition:"margin-top 1s ease"
        })
    })
    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
    });
});