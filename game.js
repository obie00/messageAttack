var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

/*var x = canvas.width/2;
var y = canvas.height-30;
var characterSize = 10;
var dx = 2;
var dy = -2;*/

var player = {
    x : canvas.width/2,
    y : canvas.height-30,
    characterSize : 10,
    dx : 2,
    dy : -2,
    drawCharacter : function(){
        context.beginPath();
        context.rect(this.x, this.y, this.characterSize, this.characterSize);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
    }
};

/*function drawCharacter(){
    context.beginPath();
    context.rect(x, y, characterSize, characterSize);
    context.fillStyle = "blue";
    context.fill();
    context.closePath();
}*/


/*
drawCharacter : function(){
        context.beginPath();
        context.rect(this.x, this.y, this.characterSize, this.characterSize);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
        
        if((player.x>(canvas.width-player.dx-player.characterSize))||(player.x<(-player.dx))){
            player.dx = -player.dx;
        }
    
        if((player.y>(canvas.height-player.dy-player.characterSize))||(player.y<(-player.dy))){
            player.dy = -player.dy;
        }
    
        player.x += player.dx;
        player.y += player.dy;
    }
*/

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.drawCharacter();
    //x + dx > canvas.width - characterSize || x + dx < characterSize
    if((player.x>(canvas.width-player.dx-player.characterSize))||(player.x<(-player.dx))){
        player.dx = -player.dx;
    }
    
    if((player.y>(canvas.height-player.dy-player.characterSize))||(player.y<(-player.dy))){
        player.dy = -player.dy;
    }
    
    player.x += player.dx;
    player.y += player.dy;
    
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw);