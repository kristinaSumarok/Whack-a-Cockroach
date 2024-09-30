let currCockroach;
let currCapybaraTile;
let score = 0;
let gameOver = false;


window.onload = function() {
    setGame();
}

function setGame() {

    for(let i=0;i<9;i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setCocroach, 1000);
    setInterval(setCapybara, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setCocroach() {
    if(gameOver){
        return;
    }
    if(currCockroach){
       currCockroach.innerHTML ="";
    }
   let cocroach = document.createElement("img");
    cocroach.src = "./cockroach.png";

    let num = getRandomTile();

    if(currCapybaraTile && currCapybaraTile.id === num){
        return;
    }

    currCockroach = document.getElementById(num);
    currCockroach.appendChild(cocroach);
}

function setCapybara(){
    if(gameOver){
        return;
    }

    if(currCapybaraTile){
        currCapybaraTile.innerHTML = "";
    }
    let capybara = document.createElement("img");
    capybara.src = "./capybara.png";

    let num = getRandomTile();

    if(currCockroach && currCockroach.id === num){
        return;
    }

    currCapybaraTile = document.getElementById(num);
    currCapybaraTile.appendChild(capybara);
}

function selectTile(){
    if(this == currCockroach){
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this == currCapybaraTile){
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver=true;
    }
}
