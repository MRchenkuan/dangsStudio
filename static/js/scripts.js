/**
 * Created by chenkuan on 2017/3/17.
 */
$(document).ready(function () {
    var $body = $("body");
    var $window = $(window);
    var $shader = $("#shader");
    var _scrollCount= 0;
    $window.scroll(function (e) {
        if(_scrollCount++ >3)$shader.fadeOut(1000);
    })
    $body.delegate('#shader',"click",function () {
        $shader.fadeOut(1000);
    });

    var pices = document.querySelectorAll("#imageFrame .pice")
    var $imageFrame = $("#imageFrame");
//    var $imageFrameCtrl = $("#imageFrameCtrl");
    var $contactFrame = $("#contact-frame");
    Array.prototype.some.call(pices,function (it,id) {
        it.style.left = id * $imageFrame.width()+"px";
    });
    var index = 0;
    var width = $imageFrame.width();
    setInterval(function () {
        // control
//        $imageFrameCtrl.find("li").removeClass("active").eq(index).addClass("active")
        // 图片
        $imageFrame.animate({
            scrollLeft:width*index++
        },1000,'swing');

        // 复原
        if(index>=pices.length){
            index = 0 ;
        }
    },5000);
    $body.delegate("#link-qq","mouseenter",function (e) {
        e.stopPropagation();
        $contactFrame.css({
            left:0,
            opacity:1
        })
    }).click(function () {
        $contactFrame.css({
            left:'-1rem',
            opacity:0
        })
    })
});