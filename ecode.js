
/*
0 = repetition
1 = parity
2 = 2d
3 = hamming
*/
var message0 = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
var message0t = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];
function generate0(){
    for (var i in message0){
    var val = Math.floor(Math.random() * 2);
    for(var j = 0; j<4; j++){
        message0[i][j] = val;
        message0t[i][j] = val;
    }
}
}
function currupt0(message){
    for (var x = 0; x < document.curruption; x++){
        var i = Math.floor(Math.random() * 4);
        var j = Math.floor(Math.random() * 4);
            var val = (message0t[i][j]+1)%2;
            message0[i][j] = val;
        
    }
}
function displayf0(message){
    document.getElementById("r0").innerHTML = message0[0][0];
    document.getElementById("r1").innerHTML = message0[0][1];
    document.getElementById("r2").innerHTML = message0[0][2];
    document.getElementById("r3").innerHTML = message0[0][3];
    document.getElementById("r4").innerHTML = message0[1][0];
    document.getElementById("r5").innerHTML = message0[1][1];
    document.getElementById("r6").innerHTML = message0[1][2];
    document.getElementById("r7").innerHTML = message0[1][3];
    document.getElementById("r8").innerHTML = message0[2][0];
    document.getElementById("r9").innerHTML = message0[2][1];
    document.getElementById("r10").innerHTML = message0[2][2];
    document.getElementById("r11").innerHTML = message0[2][3];
    document.getElementById("r12").innerHTML = message0[3][0];
    document.getElementById("r13").innerHTML = message0[3][1];
    document.getElementById("r14").innerHTML = message0[3][2];
    document.getElementById("r15").innerHTML = message0[3][3];
}

function displayt0(message){
    document.getElementById("r0").innerHTML = message0t[0][0];
    document.getElementById("r1").innerHTML = message0t[0][1];
    document.getElementById("r2").innerHTML = message0t[0][2];
    document.getElementById("r3").innerHTML = message0t[0][3];
    document.getElementById("r4").innerHTML = message0t[1][0];
    document.getElementById("r5").innerHTML = message0t[1][1];
    document.getElementById("r6").innerHTML = message0t[1][2];
    document.getElementById("r7").innerHTML = message0t[1][3];
    document.getElementById("r8").innerHTML = message0t[2][0];
    document.getElementById("r9").innerHTML = message0t[2][1];
    document.getElementById("r10").innerHTML = message0t[2][2];
    document.getElementById("r11").innerHTML = message0t[2][3];
    document.getElementById("r12").innerHTML = message0t[3][0];
    document.getElementById("r13").innerHTML = message0t[3][1];
    document.getElementById("r14").innerHTML = message0t[3][2];
    document.getElementById("r15").innerHTML = message0t[3][3];
}
function compare0(){
    if(document.getElementById("r0").innerHTML == message0t[0][0]){
        document.getElementById("r0").style.backgroundColor = "green";
    }else {document.getElementById("r0").style.backgroundColor = "red";}
    if(document.getElementById("r1").innerHTML == message0t[0][1]){
        document.getElementById("r1").style.backgroundColor = "green";
    }else {document.getElementById("r1").style.backgroundColor = "red";}
    if(document.getElementById("r2").innerHTML == message0t[0][2]){
        document.getElementById("r2").style.backgroundColor = "green";
    }else {document.getElementById("r2").style.backgroundColor = "red";}
    if(document.getElementById("r3").innerHTML == message0t[0][3]){
        document.getElementById("r3").style.backgroundColor = "green";
    }else {document.getElementById("r3").style.backgroundColor = "red";}
    if(document.getElementById("r4").innerHTML == message0t[1][0]){
        document.getElementById("r4").style.backgroundColor = "green";
    }else {document.getElementById("r4").style.backgroundColor = "red";}
    if(document.getElementById("r5").innerHTML == message0t[1][1]){
        document.getElementById("r5").style.backgroundColor = "green";
    }else {document.getElementById("r5").style.backgroundColor = "red";}
    if(document.getElementById("r6").innerHTML == message0t[1][2]){
        document.getElementById("r6").style.backgroundColor = "green";
    }else {document.getElementById("r6").style.backgroundColor = "red";}
    if(document.getElementById("r7").innerHTML == message0t[1][3]){
        document.getElementById("r7").style.backgroundColor = "green";
    }else {document.getElementById("r7").style.backgroundColor = "red";}
    if(document.getElementById("r8").innerHTML == message0t[2][0]){
        document.getElementById("r8").style.backgroundColor = "green";
    }else {document.getElementById("r8").style.backgroundColor = "red";}
    if(document.getElementById("r9").innerHTML == message0t[2][1]){
        document.getElementById("r9").style.backgroundColor = "green";
    }else {document.getElementById("r9").style.backgroundColor = "red";}
    if(document.getElementById("r10").innerHTML == message0t[2][2]){
        document.getElementById("r10").style.backgroundColor = "green";
    }else {document.getElementById("r10").style.backgroundColor = "red";}
    if(document.getElementById("r11").innerHTML == message0t[2][3]){
        document.getElementById("r11").style.backgroundColor = "green";
    }else {document.getElementById("r11").style.backgroundColor = "red";}
    if(document.getElementById("r12").innerHTML == message0t[3][0]){
        document.getElementById("r12").style.backgroundColor = "green";
    }else {document.getElementById("r12").style.backgroundColor = "red";}
    if(document.getElementById("r13").innerHTML == message0t[3][1]){
        document.getElementById("r13").style.backgroundColor = "green";
    }else {document.getElementById("r13").style.backgroundColor = "red";}
    if(document.getElementById("r14").innerHTML == message0t[3][2]){
        document.getElementById("r14").style.backgroundColor = "green";
    }else {document.getElementById("r14").style.backgroundColor = "red";}
    if(document.getElementById("r15").innerHTML == message0t[3][3]){
        document.getElementById("r15").style.backgroundColor = "green";
    }else {document.getElementById("r15").style.backgroundColor = "red";}
    
}
function endGame(){
    if(document.gameState == 2){
        currupt0(0);
        displayf0(0);
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
    generate0();
};