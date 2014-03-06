$(document).ready(function() {
  //this is how we acquire control of the canvas
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext("2d");

  $('#clear').click(function() {
    context.clearRect(0, 0, canvas.width, canvas.height);
  });

  //---------------------------------------------------------------------------
  //Write your code for p1-p12 here
  //p1
$('#p1').click(function() {
	context.strokeStyle = 'purple';
    context.strokeRect(30, 20, 50, 55);
   

    
  });
$('#p2').click(function() {
	context.strokeStyle = 'red';
    context.strokeRect(100, 100, 100, 100);
    
  });
$('#p3').click(function() {
    context.beginPath();
    context.strokeStyle = 'blue';
    context.arc(44, 99, 30, Math.PI/50, Math.PI/2);
    
    
    context.stroke();
  });
$('#p4').click(function() {
    context.beginPath();
    context.strokeStyle = 'pink';
    context.arc(440, 299, 30, Math.PI/15, Math.PI/16);
    
    context.closePath();
    context.stroke();
  });

$('#p5').click(function() {
      context.beginPath();
      context.strokeStyle = 'orange';
      context.moveTo(100, 150);
      context.lineTo(450, 50);
      context.stroke();
  });

$('#p6').click(function() {
   	  context.strokeStyle = 'green';
      context.strokeRect(300, 20, 50, 55);

  });

$('#p7').click(function() {
      context.beginPath();
      context.arc(400, 400, 40, 2 * Math.PI, false);
      context.fillStyle = 'red';
      context.fill();
      context.lineWidth = 5;
      context.strokeStyle = 'red';
      context.stroke();
  });

$('#p8').click(function() {
	  context.beginPath();
      context.rect(188, 50, 200, 100);
      context.fillStyle = 'yellow';
      context.fill();
      context.lineWidth = 7;
      context.strokeStyle = 'blue';
      context.stroke();
 });

$('#p9').click(function() {
for (var i = 0; i <= 250; i=i+50) {
	context.lineWidth = 2;
      context.strokeStyle = 'grey';
        context.strokeRect(0, i, 50, 50);       
        }
});

$('#p10').click(function() {
	context.strokeStyle = 'black';
for (var i = 0; i <= 500; i=i+5) {
	context.lineWidth = 1.5;
    context.strokeRect(0, i, 5, 5);       
        }
});
  //
$('#p11').click(function() {
	context.strokeStyle = 'black';
for (var i = 0; i <= 500; i=i+5) {
		for (var j = 0; j<=500; j=j+5) {
			context.lineWidth = 1.5;
		    context.strokeRect(j, i, 5, 5);       
        }}
});


$('#p12').click(function() {
for (var radius = 1; radius <= 60; radius=radius+3) {
	  context.beginPath();
      context.arc(250, 250, radius, 4*Math.PI, 2*Math.PI);
      context.stroke();
  }
});

$('#p13').click(function() {
	context.beginPath();
    context.moveTo(75,40);
    context.bezierCurveTo(75,37,70,25,50,25);
    context.bezierCurveTo(20,25,20,62.5,20,62.5);
    context.bezierCurveTo(20,80,40,102,75,120);
    context.bezierCurveTo(110,102,130,80,130,62.5);
    context.bezierCurveTo(130,62.5,130,25,100,25);
    context.bezierCurveTo(85,25,75,37,75,40);
    context.fill();

});
  //


  //

  //

});

//
