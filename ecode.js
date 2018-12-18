
/*
0 = repetition
1 = parity
2 = 2d
3 = hamming
*/
var message0 = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];
var message0t = [[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]];

function generateRepitition(){
    for (var i in message0){
        var val = Math.floor(Math.random() * 2);
        for(var j = 0; j<7; j++){
            message0[i][j] = val;
            message0t[i][j] = val;
            
        }
        
    }
}

function curruptRepitition(){
    for (var x = 0; x < document.curruption; x++){
        var i = Math.floor(Math.random() * 5);
        var j = Math.floor(Math.random() * 7);
        var val = (message0t[i][j]+1)%2;
        message0[i][j] = val;
    }
}

function generateParity(){
    for (var i in message0){
        var parityCheck = 0;
        for(var j = 0; j<6; j++){
            var val = Math.floor(Math.random() * 2);
            message0[i][j] = val;
            message0t[i][j] = val;
            parityCheck = (parityCheck + val)%2;
        }
        message0[i][j] = parityCheck;
        message0t[i][j] = parityCheck;
    }
}

function curruptParity(){
    for (var x = 0; x < document.curruption; x++){
        var i = Math.floor(Math.random() * 5);
        var j = Math.floor(Math.random() * 6);
        var val = (message0t[i][j]+1)%2;
        message0[i][j] = val;
    }
}

function generate2dParity(){
    var yCheck = [0,0,0,0,0,0,0];
    for (var i=0;i<4;i++){
        var xCheck = 0;
        for(var j = 0; j<6; j++){
            var val = Math.floor(Math.random() * 2);
            message0[i][j] = val;
            message0t[i][j] = val;
            yCheck[j] = (yCheck[j] + val)%2;
            xCheck = (xCheck + val)%2;
        }
        message0[i][j] = xCheck;
        message0t[i][j] = xCheck;
        yCheck[6]=(yCheck[6]+xCheck)%2;
    }
    for(var i=0; i<7; i++){
        message0[4][i] = yCheck[i];
        message0t[4][i] = yCheck[i];
    }
}

function currupt2dParity(){
    for (var x = 0; x < document.curruption; x++){
        var i = Math.floor(Math.random() * 5);
        var j = Math.floor(Math.random() * 6);
        var val = (message0t[i][j]+1)%2;
        message0[i][j] = val;
    }
}

function displayf0(){
    //var i = 0;
    //var button  = document.getElementById("r" + i);
    var k = 0;
    for(var i=0; i<5; i++){
        for(var j=0; j<7; j++){
            document.getElementById("r" + k).innerHTML = message0[i][j];
            ++k;
        }
    }
}

function displayt0(){
    var k = 0;
    for(var i=0; i<5; i++){
        for(var j=0; j<7; j++){
            document.getElementById("r" + k).innerHTML = message0t[i][j];
            ++k;
        }
    }
}
function compare0(){
    var k = 0;
    for(var i=0; i<5; i++){
        for(var j=0; j<7; j++){
            if(document.getElementById("r" + k).innerHTML == message0t[i][j]){
                document.getElementById("r" + k).style.backgroundColor = "green";
            }else {
                document.getElementById("r" + k).style.backgroundColor = "red";
            }
            ++k;
        }
    }
}
function endGame(){
    if(document.gameState == 2){
        switch(document.codeType){
            case 0:
                curruptRepitition();
                break;
            case 1:
                curruptParity();
                break;
            case 2:
                currupt2dParity();
                break;
        }
        displayf0();
        document.getElementById("matrices").style.display = "block";
        document.getElementById("submit").style.display = "inline";
        return;
    }
    requestAnimationFrame(endGame);
}
requestAnimationFrame(endGame);

document.getElementById("submit").onclick = function(){
    compare0();
    displayt0();
}

document.getElementById("Repitition").onclick = function() {
    document.getElementById("initial").style.display = "inline";
    document.getElementById("menu").style.display = "none";
    //document.gameState = 1;
    document.codeType = 0;
    generateRepitition();
};

document.getElementById("Parity").onclick = function() {
    document.getElementById("initial").style.display = "inline";
    document.getElementById("menu").style.display = "none";
    //document.gameState = 1;
    document.codeType = 1;
    generateParity();
};

document.getElementById("2dParity").onclick = function() {
    document.getElementById("initial").style.display = "inline";
    document.getElementById("menu").style.display = "none";
    //document.gameState = 1;
    document.codeType = 2;
    generate2dParity();
}