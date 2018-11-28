document.getElementById("reloadTitle").onclick = function() {
    location.reload(true);
};
document.getElementById("newGame").onclick = function() {
    document.getElementById("mainMenu").style.display = "none";
    document.getElementById("codeTypes").style.display = "block";
};

document.getElementById("initial").onclick = function() {
    document.getElementById("noiseCanvas").style.display = "block";
    document.gameState = 1;/*notstarted:0, started:1, finished:2*/
    document.codeType = 0;/*0 = repetition ; 1 = parity ; 2 = 2d ; 3 = hamming*/
    document.curruption = 0;
    
    document.getElementById("matrices").style.display = "none";
}