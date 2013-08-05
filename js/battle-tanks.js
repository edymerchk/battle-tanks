$(function() {
 var socket = io.connect('http://localhost', {port: 8080});


var left = function(){
  console.log("lef");
  toX = $('#tank').position().left - 50
        $('#tank').css('left', toX)
}

var right = function(){
  console.log("right");
  toX = $('#tank').position().left + 50
  $('#tank').css('left', toX)
}

var angle = function (value) {
  // console.log(value);
  
}
socket.on('left', left);
socket.on('right', right);
socket.on('angle', function (data) {
  angle(data);
});

});