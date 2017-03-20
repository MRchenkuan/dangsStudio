/**
 * Created by chenkuan on 2017/3/19.
 */
var $body = $("body");
var $neck = $("#neck");
var $imgFrame = $body.find(".imgFrame").eq(0);
var $window = $(window);
var $shader = $("#shader");
var $navList = $("#navList");
var _scrollCount= 0;

if(location.hash.indexOf("#nosdr")>=0){
    $shader.hide()
}
$window.scroll(function (e) {
    $neck.css({
        transform:"translateY(-"+$window.scrollTop()/3+"px)"
    });

    if($imgFrame.length>0){
        if(($window.scrollTop()+$(window).height()/3) >= $imgFrame.position().top){
            $imgFrame.css({
                transform: "translateY(0px)"
            })
        }else{
            $imgFrame.css({
                transform: "translateY(30px)"
            })
        }
    }
    if(_scrollCount++ >3)$shader.fadeOut(1000);
});
$body.delegate('#shader',"click",function () {
    $shader.fadeOut(1000);
});
//顶部事件
$body.delegate(".icon","click",function (e) {
    e.stopPropagation();
    var $target = $(e.target);
    var target = $target.attr("data-target");
    if(target){
        $(".msgPop").removeClass("msgPopActive");
        $("#"+target).addClass("msgPopActive");
    }
}).delegate(".msgPop","click",function (e) {
    e.stopPropagation()
}).click(function () {
    $(".msgPop").removeClass("msgPopActive");
});

// 导航条链接
var navLinks = [
    './index.html#nosdr',
    "./about.html",
    "./makeup.html",
    "#",
    "./works.html",
    "#",
    "./corperation.html",
    "#"
];
$navList.find('a').each(function (id,it){
    var _class= it.getAttribute("class");
    if(!_class || _class.indexOf("active")<0){
        it.setAttribute("href",navLinks[id]);
    }
});