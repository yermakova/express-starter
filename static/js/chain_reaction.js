$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

var balls = [];
  var b0 = {x:50, y:50, radius:20, color:'red'};
  var b1 = {x:150, y:150, radius:30, color:'blue'};
  var b2 = {x:250, y:250, radius:25, color:'pink'};
balls.push(b0);
balls.push(b1);
balls.push(b2);


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
  for (var i = 0; i < balls.length; i++) {
    drawball(balls[i].x,balls[i].y, balls[i].radius, balls[i].color); 
    
  }
};

  // Handle a canvas click event
  $('#game_canvas').click(function(e) {
    // Find the mouse x and y relative to the top-left corner of the canvas
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    // PUT STUFF HERE
  });

  updateGame();
});

