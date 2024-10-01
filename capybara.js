let currCockroach;
let currCapybaraTile;
let score = 0;
let gameOver = false;
let winSound = new Audio("./win.mp3");


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

    setInterval(setCocroach, 2000);
    setInterval(setCapybara, 3000);
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
    cocroach.classList.add("appear-animate");

    let num = getRandomTile();

    if(currCapybaraTile && currCapybaraTile.id === num){
        return;
    }

    currCockroach = document.getElementById(num);
    currCockroach.appendChild(cocroach);

    setTimeout(() => {
        cocroach.classList.remove("appear-animate");  
        cocroach.classList.add("disappear-animate");     
    }, 1500); 
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
    capybara.classList.add("appear-animate");

    let num = getRandomTile();

    if(currCockroach && currCockroach.id === num){
        return;
    }

    currCapybaraTile = document.getElementById(num);
    currCapybaraTile.appendChild(capybara);
}

function selectTile(){
    if(gameOver){
        return;
    }
    if(this == currCockroach){
        score += 10;
        document.getElementById("score").innerText = score.toString();
        currCockroach.innerHTML = "";
        setCocroach();
    }
    else if (this == currCapybaraTile){
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
        currCapybaraTile.innerHTML = "";
        currCockroach.innerHTML ="";
        winSound.play();
    }
}
