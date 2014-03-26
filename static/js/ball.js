
$(document).ready(function() {
  //initialize canvas
  var canvas = document.getElementById("canvas");
  var context = canvas.getContext("2d");
  var width = canvas.width;
  var height = canvas.height;
  var x = 20;
  var y = 20;
  var vy = 3;
  var vx = 3;
  var a = 500;
  var b = 50;
  var va = -3;
  var vb = -3;

  //PUT STUFF HERE

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'pink';
    context.fill();
    context.closePath();
    context.stroke();
  };

  var drawCircle2 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
    context.stroke();
  };
  var drawCircle3 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    context.closePath();
    context.stroke();
  };
    var drawCircle4 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = 'cyan';
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'green';
    context.fill();
    context.closePath();
    context.stroke();
  };
    var drawCircle5 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = 'purple';
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
    context.stroke();
  };

    var drawCircle6 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'black';
    context.fill();
    context.closePath();
    context.stroke();
  };

  var drawCircle7 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'red';
    context.fill();
    context.closePath();
    context.stroke();
  };
  var drawCircle8 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'yellow';
    context.fill();
    context.closePath();
    context.stroke();
  };
    var drawCircle9 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = 'cyan';
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'pink';
    context.fill();
    context.closePath();
    context.stroke();
  };
    var drawCircle10 = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = 'purple';
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.fillStyle = 'blue';
    context.fill();
    context.closePath();
    context.stroke();
  };

/* 
var drawSquare = function(x, y, h, w) {
      context.beginPath();
      context.rect(0, 0, 1000, 1000);
      context.fillStyle = 'grey';
      context.fill();
      context.lineWidth = 1;
      context.strokeStyle = 'blue';
      context.stroke();
    }

drawSquare();
*/



  //run an iteration of the game
  var updateGame = function() {
    context.clearRect(0,0,1000,1000);
    if (x < 20 || x > 580) vx = -vx;
    if (y < 20 || y > 580) vy = -vy;
    x+=vx;
    y+=vy;

    if (a > 500 || a < 30) va = -va;
    if (b > 500 || b < 30) vb = -vb;
    a+=va;
    b+=vb;

    drawCircle(x,y,20,'gold');
    drawCircle2(x+50,y,20,'gold');
    drawCircle3(x+100,y,20,'gold');
    drawCircle4(x+150,y,20,'gold');
    drawCircle5(x+200,y,20,'gold');
    
    drawCircle6(a+200,b,10,'gold');
    drawCircle7(a+100,b,25,'gold');
    drawCircle8(a+150,b,20,'gold');
    drawCircle9(a+250,b,30,'gold');
    drawCircle10(a+50,b,20,'gold');
    setTimeout(updateGame, 10);   
};

  updateGame();
});





