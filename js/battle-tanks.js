
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
    val = (value.value - 512)/4
    $("#tank").css({ WebkitTransform: 'rotate(' + val + 'deg)'});
  }


  socket.on('left', left);
  socket.on('right', right);
  socket.on('angle', function (data) {
    angle(data);
    shoot();
  });



  var shoot = function (angle) {
    setInterval(function(){
      var imgpos = $('#bullet').offset().left;
      var imgwidth = $('#bullet').width();
      console.log(imgpos)
    },1000)  
  }

});