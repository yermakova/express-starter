$(document).ready(function() {
  // Get access to canvas in HTML file
  var canvas = document.getElementById('game_canvas');
  var context = canvas.getContext('2d');
  var width = canvas.width;
  var height = canvas.height;

var reactions = [];
var numBalls = 10;
var balls = [];
var reacting = false;
var numReacted = 0;
var gameState = 'menu';
var menuText = 'Click to play!';
 
 /* var b0 = {x:50, y:50, radius:20, color:'red', vy:3, vx:3};
  var b1 = {x:150, y:150, radius:30, color:'blue', vy:2, vx:3};
  var b2 = {x:250, y:250, radius:25, color:'pink', vy:4, vx:1};
balls.push(b0);
balls.push(b1);
balls.push(b2);
*/ 


for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:190*Math.random(), 
            y:700*Math.random(), 
            radius:80*Math.random(), 
            color:'PaleTurquoise', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

/* for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:700*Math.random(), 
            y:760*Math.random(), 
            radius:40*Math.random(), 
            color:'aqua', 
            vy:3*Math.random(), 
            vx:-15*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:700*Math.random(), 
            y:770*Math.random(), 
            radius:30*Math.random(), 
            color:'blue', 
            vy:9*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:700*Math.random(), 
            y:700*Math.random(), 
            radius:20*Math.random(), 
            color:'DeepSkyBlue ', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};

for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:500*Math.random(), 
            y:770*Math.random(), 
            radius:15*Math.random(), 
            color:'slateblue', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};


for (var i = 0; i <= numBalls; i++) {
  var b3 = {x:500*Math.random(), 
            y:700*Math.random(), 
            radius:25*Math.random(), 
            color:'LightSkyBlue', 
            vy:7*Math.random(), 
            vx:-10*Math.random()};
  balls.push(b3);

};
*/


 

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

  // When I click to play, that's when the game starts

  var updateGame = function() {

    context.clearRect(0,0,1000,1000);
  
if (gameState == 'menu') {
  context.fillStyle = "Pink";
  context.font = "40px Arial";
  context.fillText(menuText, 50, 50);
} else if (gameState === 'playing') {

  for (var i = 0; i < reactions.length; i++) { 
      reactions[i].timer++;
    if (reactions[i].timer>200) {
      reactions[i].radius--;
    } else if (reactions[i].radius<30) {
      reactions[i].radius++;
    }
    if (reactions[i].radius === 0) {
      reactions.splice(i,1);
      i--;
    }
  }

  
  for (var j = 0; j < reactions.length; j++) {
    
         for (var i = 0; i < balls.length; i++) {
               var collided = false; 
                
                var xdiff = Math.abs(balls[i].x - reactions[j].x);
                var ydiff = Math.abs(balls[i].y - reactions[j].y);
                var dist = Math.sqrt(xdiff * xdiff + ydiff * ydiff);
                 
                  if (dist<=(balls[i].radius + reactions[j].radius)) {
                  collided = true; 
                   numReacted++;
                  if (collided === true) {
                      var newrxn = 
                      {x:balls[i].x, 
                      y:balls[i].y,
                      radius:1, 
                      color:'orange',
                      timer:0
                      }
                      reactions.push(newrxn);
                  balls.splice(i,1);
                  i--;
                }

                
               } 

                context.fillStyle = "blue";
                context.font = "20px Arial";
                context.fillText("Reactions: " + numReacted, 50, 50);

             }
            console.log(balls[i], reactions[j]);   
            }  
    
  for (var i = 0; i < balls.length; i++) {
          if (balls[i].x < 5|| balls[i].x > 760) balls[i].vx = -balls[i].vx;
          if (balls[i].y < 5 || balls[i].y > 760) balls[i].vy = -balls[i].vy;
          balls[i].x+=balls[i].vx;
          balls[i].y+=balls[i].vy;
          drawball(balls[i].x,balls[i].y, balls[i].radius, balls[i].color); 
      for (var j = 0; j < reactions.length; j++) {
          drawball(reactions[j].x,reactions[j].y, reactions[j].radius, reactions[j].color); 
          }

if ((reacting === true) && (reactions.length === 0)) {
  menuText = 'Game Over! You reacted ' + numReacted + ' balls';
  gameState = 'menu';
}

   
}}


 requestAnimationFrame(updateGame);

};

  // Handle a canvas click event


  $('#game_canvas').click(function(e) {
    
    // Find the mouse x and y relative to the top-left corner of the canvas
  if (gameState === 'menu') {
    gameState = 'playing';
  }

  if ((reacting === false) && (gameState === 'playing')) {
    reacting = true;
    var x = e.pageX - $(this).offset().left;
    var y = e.pageY - $(this).offset().top;
    
    for (var i = 0; i <= reactions.length; i++) { 

            var rxnclick = 
                {x:x, 
                y:y,
                radius:1, 
                color:'lightgreen',
                timer:0 
              }
  
        }
   
  reactions.push(rxnclick);

}

 });

  updateGame();
});

