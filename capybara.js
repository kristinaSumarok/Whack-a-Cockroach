let currCockroach;

window.onload = function() {
    setGame();
}

function setGame() {

    for(let i=0;i<9;i++){
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setCocroach, 2000);//2000 mil seconds = 2 seconds
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setCocroach() {

    if(currCockroach){
       currCockroach.innerHTML ="";
    }
   let cocroach = document.createElement("img");
    cocroach.src = "./cockroach.png";

    let num = getRandomTile();
    currCockroach = document.getElementById(num);
    currCockroach.appendChild(cocroach);

}
