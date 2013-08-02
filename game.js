var five = require("johnny-five"),
left, right, led,
board = new five.Board(),
io = require('socket.io').listen(8080);


io.sockets.on('connection', function (socket) {
  board.on('left', function(){
    socket.emit('left');
  });
  board.on('right', function(){
    socket.emit('right');
  });
  board.on('angle', function(value){
    socket.emit('angle', value);
  });
});

board.on("ready", function() {
  left = new five.Button(2);
  right = new five.Button(4);
  led = new five.Led(3);

  potentiometer = new five.Sensor({
    pin: "A5",
    freq: 250
  });



  potentiometer.on("read", function( err, value ) {
    //console.log( value, this.normalized );
    board.emit('angle',{value: value});
  });

  left.on("down", function() {
    led.on();
  });
  left.on("up", function() {
    board.emit('left');
    led.on();
  });

  right.on("down", function() {
    led.on();
  });
  right.on("up", function() {
    board.emit('right');
    led.on();
  });
});