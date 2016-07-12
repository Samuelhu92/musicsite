var curIndex = 0;
var container = $(".html");
var sumCount = $(".section").length;
var $window = $(window);
var duration = 500;
//时间控制
var aniTime = 0;
var scrollFunc = function (e) {
        //如果动画还没执行完，则return
        if(new Date().getTime() < aniTime + duration){
            return false;
        }
        e = e || window.event;
        var t = 0;
        if (e.wheelDelta) {//IE/Opera/Chrome
            t = e.wheelDelta;
            if (t > 0 && curIndex > 0) {
                //上滚动
                movePrev();
            } else if (t < 0 && curIndex < sumCount - 1) {
                //下滚动
                moveNext();
            }
        } else if (e.detail) {//Firefox
            t = e.detail;
            if (t < 0 && curIndex > 0) {
                //上滚动
                movePrev();
            } else if (t > 0 && curIndex < sumCount - 1) {
                //下滚动
                moveNext();
            }
        }
    };

    function moveNext(){
        //获取动画开始时的时间
        aniTime = new Date().getTime();
        container.css("transform", "translate3D(0, -" + (++curIndex) * $window.height() + "px, 0)");
    }

    function movePrev(){
        //获取动画开始时的时间
        aniTime = new Date().getTime();
        container.css("transform", "translate3D(0, -" + (--curIndex) * $window.height() + "px, 0)");
    }

    function init(){
        /*注册事件*/
        if (document.addEventListener) {
            document.addEventListener('DOMMouseScroll', scrollFunc, false);
        }//W3C
        window.onmousewheel = document.onmousewheel = scrollFunc;//IE/Opera/Chrome

        container.css({
            "transition": "all 5s ease-in-out",
            "-moz-transition": "all 5s ease",
            "-webkit-transition": "all 5s ease"
        });
    }

    init();


// random insert music recommendation into html
$(document).ready(function(){
      $.getJSON("songoutput/output.json",function(json){
        obj=json;
      });

      var obj = (function () {
      var obj = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': "songoutput/output.json",
          'dataType': "json",
          'success': function (data) {
          obj = data;
          }
      });
    return obj;
})();
      var randomNumber = Math.floor(Math.random()*obj.length);
      var imagesource = obj[randomNumber]["imagesrc"];
      var title1 = obj[randomNumber]["title"];
      var text1 = obj[randomNumber]["text"];
      var songsource = obj[randomNumber]["songsrc"];
      var str = obj[randomNumber]["lyric"];
      var lyric = str.split("／").join("<br>");
      $(".cover").attr("src", imagesource);
      $(".comment-sentence").append(text1);
      $(".audio-title").append(title1);
      $("#audio-player").attr("src", songsource);
      $(".lyric").append(lyric);
});
// change button settings
$(".btn").on("click",function(){
       $.getJSON("songoutput/output.json",function(json){
        obj=json;
      });
      var obj = (function () {
      var obj = null;
      $.ajax({
          'async': false,
          'global': false,
          'url': "songoutput/output.json",
          'dataType': "json",
          'success': function (data) {
          obj = data;
          }
      });
    return obj;
})();
      var randomNumber = Math.floor(Math.random()*obj.length);
      var imagesource = obj[randomNumber]["imagesrc"];
      var title1 = obj[randomNumber]["title"];
      var text1 = obj[randomNumber]["text"];
      var songsource = obj[randomNumber]["songsrc"];
      var str = obj[randomNumber]["lyric"];
      var lyric = str.split("／").join("<br>");
      $(".cover").attr("src", imagesource);
      $(".comment-sentence").html(text1);
      $(".audio-title").html(title1);
      $("#audio-player").attr("src", songsource);
      $(".lyric").html(lyric);
      var title1 = null;
      var text1 = null;
})
jQuery('#openWeixin').qrcode({width: 64,height: 64,render:"canvas",text: "http://whatithinkwhenilisten.com"});
jQuery(document).ready(function(){
  $('.qrcode').attr("src", $('#openWeixin').find("canvas")[0].toDataURL("image/png"));
          //分享到微信
        $('.weixin-share').click(function() {
            $('.qrcode').show();
        });
        $(document).on("click", ".qrcode",
        function() {
            $('.qrcode').hide();
        });
});
// background video connection and fadeout
var myvid = document.getElementById('bgvid');
myvid.addEventListener('ended', function() {
    function myvidFade() {
    myvid.classList.add("stopfade");
    }
    myvid.pause();
    myvidFade();
  });
$(function () {
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});

