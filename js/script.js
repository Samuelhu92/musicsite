// carousel button control
  $(document).ready(function(){
    // Activate Carousel
    $("#myCarousel").carousel({interval:false});

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#myCarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#myCarousel").carousel(1);
    });
    $(".left").click(function(){
        $("#myCarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#myCarousel").carousel("next");
    });
  });


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
      var lyric = str.split("/").join("<br>");

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
      var lyric = str.split("/").join("<br>");

      $(".cover").attr("src", imagesource);
      $(".comment-sentence").html(text1);
      $(".audio-title").html(title1);
      $("#audio-player").attr("src", songsource);
      $(".lyric").html(lyric);
      var title1 = null;
      var text1 = null;



})


// background video connection and fadeout
var myvid = document.getElementById('bgvid');
var myvids = [
  "video/fullscreen1.mp4",
  "video/fullscreen2.mp4",
  "video/fullscreen3.mp4",
];

var activeVideo = 0;

myvid.addEventListener('ended', function() {

  if (activeVideo < myvids.length-1){
  // update the new active video index
  activeVideo = activeVideo+1;

  // update the video source and play
  myvid.src = myvids[activeVideo];
  myvid.play();
  }
  else {
    function myvidFade() {
    myvid.classList.add("stopfade");
    }
    myvid.pause();
    myvidFade();
  }
});




$(function () {

// Same as document.addEventListener("DOMContentLoaded"...

  // Same as document.querySelector("#navbarToggle").addEventListener("blur",...
  $("#navbarToggle").blur(function (event) {
    var screenWidth = window.innerWidth;
    if (screenWidth < 768) {
      $("#collapsable-nav").collapse('hide');
    }
  });

  // In Firefox and Safari, the click event doesn't retain the focus
  // on the clicked button. Therefore, the blur event will not fire on
  // user clicking somewhere else in the page and the blur event handler
  // which is set up above will not be called.
  // Refer to issue #28 in the repo.
  // Solution: force focus on the element that the click event fired on
  $("#navbarToggle").click(function (event) {
    $(event.target).focus();
  });
});










$(document).ready(function(){
  $(window).resize(function() {
      $("video").css("display","block");
      $("video").css("height", window.innerHeight);
      $("video").css("width", window.innerWidth);

});
});

