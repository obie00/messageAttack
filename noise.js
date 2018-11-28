var canvas = document.getElementById("noiseCanvas");
var context = canvas.getContext("2d");
var noiseImage = new Image();
noiseImage.src = 'noiseImage.png';
var playerImage = new Image();
playerImage.src = 'playerImage.png';
/*
0 = repetition
1 = parity
2 = 2d
3 = hamming
*//*
var message0 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var message0t = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
for (var i in message0){
    var val = Math.floor(Math.random() * 2);
    for(var j = 0; j<4; j++){
        message0[i][j] = val;
        message0t[i][j] = val;
    }
}

var curruption = 0;
function currupt(message){
    curruption = curruption + 1;
    var i = Math.floor(Math.random() * 4);
    var j = Math.floor(Math.random() * 4);
    //var val = Math.floor(Math.random() * 2);
    val = (message0t[i][j]+1)%2;
    message0[i][j] = val;
}*/
/*var message3 =[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];*/
var noiseAI = {
    size : 8,
    xarmy : [],
    yarmy  : [],
    dx : [],
    characterSize : [],
    invinsibleTime : 0,
    drawNoise : function(i) {
        context.drawImage(noiseImage, this.xarmy[i]-this.characterSize[i], this.yarmy[i]-this.characterSize[i], this.characterSize[i]*3 ,this.characterSize[i]*3);
        
        //if((this.xarmy[i]>(canvas.width-this.dx-this.characterSize))||(this.xarmy[i]<(-this.dx))){
        if(this.xarmy[i]<-this.dx[i]){
            var randcs = Math.floor(Math.random() * 6);
            noiseAI.characterSize[i] = randcs * 5;
            var randx = Math.floor(Math.random() * 140);
            this.xarmy[i] = canvas.width-this.characterSize[i]+randx;
            var randy = Math.floor(Math.random() * canvas.height);
            noiseAI.yarmy[i] = randy;
            var randdx = Math.floor(Math.random() * 10);
            if(randdx == 0){
                noiseAI.dx[i] = -1;
            }else{
                noiseAI.dx[i] = (randdx / 5)*-1;
            }
            
        }
    
        //if((this.yarmy[i]>(canvas.height-this.dy-this.characterSize))||(this.yarmy[i]<(-this.dy))){
    
        this.xarmy[i] += this.dx[i];
        
        this.checkCollision(i);
        
    },
    checkCollision : function(i){
        var xact = this.xarmy[i] + (this.characterSize[i]/2);
        var yact = this.yarmy[i] + (this.characterSize[i]/2);
        var xdif = Math.abs(player.x - xact);
        var ydif = Math.abs(player.y - yact);
        if((xdif < this.characterSize[i]+2)&&(ydif < this.characterSize[i])){
            var d = new Date();
            if((d.getTime() - this.invinsibleTime)>400){
                this.invinsibleTime = d.getTime();
                document.curruption = document.curruption + 1;
            }
        }
        
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
    characterSize : 5,
    dx : 0.5,
    dy : 0.5,
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
        context.drawImage(playerImage, this.x-this.characterSize, this.y-this.characterSize, 10 ,10);
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
        if(this.x > canvas.width-this.characterSize-5){
            document.gameState = 2;
            document.getElementById("noiseCanvas").style.display = "none";
        }
    }
};

function draw(){
    if(document.gameState == 1){
        context.clearRect(0, 0, canvas.width, canvas.height);
        player.drawCharacter();
        for (var i in noiseAI.xarmy){
            noiseAI.drawNoise(i);
        }
    }
    requestAnimationFrame(draw);
}


for ( var i = 0; i < noiseAI.size; i++){
    var randcs = Math.floor(Math.random() * 6);
    noiseAI.characterSize[i] = randcs * 5;
    var randx = Math.floor(Math.random() * 140);
    noiseAI.xarmy[i] = canvas.width-10+randx;
    var randy = Math.floor(Math.random() * canvas.height);
    while(noiseAI.yarmy.includes(randy)){
        randy = Math.floor(Math.random() * canvas.height);
    }
    noiseAI.yarmy[i] = randy;
    var randdx = Math.floor(Math.random() * 10);
    if(randdx == 0){
        noiseAI.dx[i] = -1;
    }else{
        noiseAI.dx[i] = (randdx / 5)*-1;
    }
    
}


function buttonPressedHandler(key){
    key.preventDefault();
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