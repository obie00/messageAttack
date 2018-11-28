var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var noiseImage = new Image();
noiseImage.src = 'noiseImage.png';
var playerImage = new Image();
playerImage.src = 'playerImage.png';
var gameMode = "nonSet";
/*
0 = repetition
1 = parity
2 = 2d
3 = hamming
*/
var message0 =[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
for (var i in message0){
    for(var j = 0; j<4; j++){
        message0[i][j] = Math.floor(Math.random() * 2);
    }
}
var message0t = message0;
function currupt(message){
    var i = Math.floor(Math.random() * 5);
    var j = Math.floor(Math.random() * 5);
    var val = Math.floor(Math.random() * 2);
    message0[i][j] = val;
}
/*var message3 =[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];*/
var noiseAI = {
    size : 10,
    xarmy : [canvas.width-10, canvas.width-10, canvas.width-10, canvas.width-10],
    yarmy  : [],
    dx : -2,
    dy : -2,
    characterSize : 10,
    drawNoise : function(i) {
        context.drawImage(noiseImage, this.xarmy[i]-10, this.yarmy[i]-10, 30 ,30);
        context.beginPath();
        context.rect(this.xarmy[i], this.yarmy[i], this.characterSize, this.characterSize);
        context.fillStyle = "red";
        context.fill();
        context.closePath();
        
        if((this.xarmy[i]>(canvas.width-this.dx-this.characterSize))||(this.xarmy[i]<(-this.dx))){
            //this.dx = -this.dx;
            this.xarmy[i] = canvas.width-10;
        }
    
        if((this.yarmy[i]>(canvas.height-this.dy-this.characterSize))||(this.yarmy[i]<(-this.dy))){
            this.dy = -this.dy;
        }
    
        this.xarmy[i] += this.dx;
        //this.yarmy[i] += this.dy;
        
        
    }
};

var player = {
    movement : {
        left : false,
        up : false,
        right : false,
        down : false
    },
    x : 0,
    y : canvas.height/2,
    characterSize : 10,
    dx : 2,
    dy : 2,
    getMovement : function(){
        if(this.movement.left){
            if(this.x > this.dx){
                this.x += -this.dx;
            }
        }
        
        if(this.movement.right){
            if(this.x < (canvas.width-this.dx-this.characterSize)){
                this.x += this.dx;
            }
        }
        
        if(this.movement.up){
            if(this.y > this.dy){
                this.y -= this.dy;
            }
            
        }
        
        if(this.movement.down){
            if(this.y < (canvas.height-this.dy-this.characterSize)){
                this.y += this.dy;
            }
        }
    },
    drawCharacter : function(){
        context.drawImage(playerImage, this.x-10, this.y-10, 30 ,30);
        context.beginPath();
        context.rect(this.x, this.y, this.characterSize, this.characterSize);
        context.fillStyle = "blue";
        context.fill();
        context.closePath();
        /*
        if((player.x>(canvas.width-player.dx-player.characterSize))||(player.x<(-player.dx))){
            player.dx = -player.dx;
        }
    
        if((player.y>(canvas.height-player.dy-player.characterSize))||(player.y<(-player.dy))){
            player.dy = -player.dy;
        }
        
        player.x += player.dx;
        player.y += player.dy;
        */
        this.getMovement();
    }
};

function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);
    player.drawCharacter();
    for (var i in noiseAI.xarmy){
        noiseAI.drawNoise(i);
    }
    requestAnimationFrame(draw);
}




for (i = 0; i < 5; i++)

for ( var i = 0; i < noiseAI.size; i++){
    noiseAI.xarmy[i] = canvas.width-10;
    var randy = Math.floor(Math.random() * canvas.height);
    while(noiseAI.yarmy.includes(randy)){
        randy = Math.floor(Math.random() * canvas.height);
    }
    noiseAI.yarmy[i] = randy;
}


function buttonPressedHandler(key){
    switch (key.keyCode){
        case 37:
            player.movement.left = true;
            break;
        case 38:
            player.movement.up = true;
            break;
        case 39:
            player.movement.right = true;
            break;
        case 40:
            player.movement.down = true;
            break;
    }
}

function buttonReleasedHandler(key){
    switch (key.keyCode){
        case 37:
            player.movement.left = false;
            break;
        case 38:
            player.movement.up = false;
            break;
        case 39:
            player.movement.right = false;
            break;
        case 40:
            player.movement.down = false;
            break;
    }
}
window.addEventListener('keydown', buttonPressedHandler, false);
window.addEventListener('keyup', buttonReleasedHandler, false);
requestAnimationFrame(draw);