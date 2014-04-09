$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

var numBalls = 300;

var balls = [];
 
 /* var b0 = {x:50, y:50, radius:20, color:'red', vy:3, vx:3};
  var b1 = {x:150, y:150, radius:30, color:'blue', vy:2, vx:3};
  var b2 = {x:250, y:250, radius:25, color:'pink', vy:4, vx:1};
balls.push(b0);
balls.push(b1);
balls.push(b2);
*/

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:190*Math.random(), 
            y:200*Math.random(), 
            radius:95*Math.random(), 
            color:'PaleTurquoise', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:900*Math.random(), 
            y:930*Math.random(), 
            radius:40*Math.random(), 
            color:'aqua', 
            vy:3*Math.random(), 
            vx:-15*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:700*Math.random(), 
            y:1000*Math.random(), 
            radius:40*Math.random(), 
            color:'blue', 
            vy:4*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:700*Math.random(), 
            y:900*Math.random(), 
            radius:5*Math.random(), 
            color:'DeepSkyBlue ', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:500*Math.random(), 
            y:1000*Math.random(), 
            radius:15*Math.random(), 
            color:'slateblue', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:500*Math.random(), 
            y:900*Math.random(), 
            radius:15*Math.random(), 
            color:'LightSkyBlue', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};


 

 var drawball = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = color;
    context.fill();
    context.closePath();
    context.stroke();
  };



  // Run an interation of the game
  var updateGame = function() {
  
  context.clearRect(0,0,1000,1000);
  for (var i = 0; i < balls.length; i++) {

    
    if (balls[i].x < 5|| balls[i].x > 780) balls[i].vx = -balls[i].vx;
    if (balls[i].y < 5 || balls[i].y > 780) balls[i].vy = -balls[i].vy;
    balls[i].x+=balls[i].vx;
    balls[i].y+=balls[i].vy;

    drawball(balls[i].x,balls[i].y, balls[i].radius, balls[i].color); 
    
  }
    requestAnimationFrame(updateGame);
};

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    for (var i = 0; i <= 0; i++) {
    var bclick = {x:200*Math.random(), 
            y:230*Math.random(), 
            radius:40*Math.random(), 
            color:'orangered', 
            vy:3*Math.random(), 
            vx:-15*Math.random()};
  balls.push(bclick);

};
  });

  updateGame();
});

