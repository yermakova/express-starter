$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  var drawSquare = function(x, y, sideLen, color) {
    context.strokeStyle = color;
    context.strokeRect(x, y, sideLen, sideLen);

  };

  var drawCircle = function(x, y, radius, color) {
    context.beginPath();
    context.strokeStyle = color;
    context.arc(x, y, radius, 0, 2*Math.PI);
    context.closePath();
    context.stroke();
  };
  

  // Write drawTriplet function here

var drawTriplet = function(x, y, color) {
    context.strokeStyle = color;
    drawCircle (x, y, 30, color);
    drawCircle (x + 20, y + 30, 30, color);
    drawCircle (x - 20, y + 30, 30, color);
  };

  // Challenge:
  // Write drawTriangle

var drawTriangle = function(x, y, sideLen, color) {
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(x + sideLen, y + (sideLen*Math.sqrt(3)));
    context.lineTo(x - sideLen, y + (sideLen*Math.sqrt(3)));
    context.closePath();
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = 'orange';
    context.stroke();

  };

  // drawTriforce

  var drawTriforce = function (x, y, color) {
    drawTriangle(x, y, 20, color);
    drawTriangle(x+20, y+35, 20, color);
    drawTriangle(x-20, y+35, 20, color);

  };

  // drawTripleTriforce,

var drawTripleTriforce = function(x, y, color) {
    drawTriforce(x, y, color);
    drawTriforce(x-40, y+70, 'green');
    drawTriforce(x+40, y+70, 'light purple');
  }
  // drawSierpinski functions here

function drawSierpinski(x, y, color) {
  drawTripleTriforce(x,y, color);
  drawTripleTriforce(x+80,y+140, 'pink');
  drawTripleTriforce(x-80,y+140, 'coral');
}

  $('#p1').click(function() {
    drawSquare(100, 200, 50, 'blue');
  });

  $('#p2').click(function() {
    drawSquare(300, 100, 25, 'green');
  });

  $('#p3').click(function() {
    drawCircle(100, 200, 50, 'red');
  });

  $('#p4').click(function() {
    drawCircle(300, 100, 25, 'black');
  });

  //---------------------------------------------------------------------------
  //Write your code for p5-p11 here
  //
$('#p5').click(function() {
    drawCircle(250, 200, 50, 'green');
    drawCircle(250, 300, 50, 'green');
    drawCircle(200, 250, 50, 'green');
    drawCircle(300, 250, 50, 'green');
    drawCircle(250, 250, 50, 'blue');
    drawSquare(200, 200, 100, 'red');
  });

 $('#p6').click(function() {
    drawTriplet(300, 300, 'green');
  });

 $('#p7').click(function() {
    drawTriplet(350, 350, 'blue');
  });

$('#p8').click(function() {
    drawTriplet(150, 350, 'red');
    drawTriplet(250, 350, 'yellow');
    drawTriplet(450, 350, 'grey');
    drawTriplet(60, 350, 'pink');
  });

$('#p9').click(function() {
    drawTriangle(100,100,50,'black');
  });

$('#p10').click(function() {
    drawTriforce(250,200,'pink');
  });

$('#p11').click(function() {
    drawTripleTriforce(250,100,'grey');
  });

$('#p12').click(function() {
    drawSierpinski(250,10,'grey');
  });

});
