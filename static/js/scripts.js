/**
 * Created by chenkuan on 2017/3/17.
 */
$(document).ready(function () {

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
});