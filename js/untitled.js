document.addEventListener("DOMContentLoaded", function (event) {
  var randomNumber = Math.floor(Math.random(3)*10);
  var obj = JSON.parse("");
  var imagesrc = obj.list[randomNumber].imageSource;
  var title = obj.list[randomNumber].title;
  var text = obj.list[randomNumber].text;
  var songsrc = obj.list[randomNumber].song;
  $(".cover").attr("src",imagesrc);
  $(".sentence").append(text);
  $(".audio-title").append(title);
  $("#audio-player").attr("src",sonsgsrc);
      },
false);

