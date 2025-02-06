function rock(){
let min = 1;
let max = 3;
let randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomIntInRange);
     if(randomIntInRange==1){
        document.getElementById("trr").innerText="Tie,regina chose rock";
    }
     else if(randomIntInRange==2){
        document.getElementById("trr").innerText="Lost,regina chose paper";
    }
     else{
        document.getElementById("trr").innerText="Won,regina chose scissor";
    }
}

function Paper(){
let min = 1;
let max = 3;
let randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomIntInRange);
    if(randomIntInRange==1){
       document.getElementById("trr").innerText="Won,regina chose rock";
   }
    else if(randomIntInRange==2){
       document.getElementById("trr").innerText="Lost,regina chose paper";
   }
    else{
       document.getElementById("trr").innerText="Tie,regina chose scissor";
   }
}

function Scissors(){
let min = 1;
let max = 3;
let randomIntInRange = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(randomIntInRange);
    if(randomIntInRange==1){
       document.getElementById("trr").innerText="Lost,regina chose rock";
   }
    else if(randomIntInRange==2){
       document.getElementById("trr").innerText="Tie,regina chose paper";
   }
    else{
       document.getElementById("trr").innerText="Won,regina chose scissor";
   }
}