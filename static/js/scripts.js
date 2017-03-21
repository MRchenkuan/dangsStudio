/**
 * Created by chenkuan on 2017/3/17.
 */
$(document).ready(function () {

    var pices = document.querySelectorAll("#imageFrame .pice")
    var $imageFrame = $("#imageFrame");

    var pices2 = document.querySelectorAll("#body2 .pice");
    var $body2 = $("#body2");
    var $imageFrame2 = $body2.find(".carousel").eq(0);
    var $imageFrameCtrl2 = $body2.find(".carouselCtrl").eq(0);

    var pices3 = document.querySelectorAll("#body3 .pice");
    var $body3 = $("#body3");
    var $imageFrame3 = $body3.find(".carousel").eq(0);
    var $imageFrameCtrl3 = $body3.find(".carouselCtrl").eq(0);

    makePicesRun($imageFrame,pices,false,5000,1000);
    makePicesRun($imageFrame2,pices2,$imageFrameCtrl2,4500,800);
    makePicesRun($imageFrame3,pices3,$imageFrameCtrl3,4000,800);

    function makePicesRun($imageFrame,pices,$imageFrameCtrl,duration,speed) {
        Array.prototype.some.call(pices,function (it,id) {
            it.style.left = id * $imageFrame.width()+"px";
        });
        var index = 0;
        var width = $imageFrame.width();
        setInterval(function () {
            // control
            if($imageFrameCtrl)
            $imageFrameCtrl.find("li").removeClass("active").eq(index).addClass("active")
            // 图片
            $imageFrame.animate({
                scrollLeft:width*index++
            },speed,'swing');

            // 复原
            if(index>=pices.length){
                index = 0 ;
            }
        },duration);
    }
});