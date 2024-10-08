let gameSeq = [];
let userSeq = [];

let btns = ["red", "blue", "green", "yellow"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
  if (!started) {
    console.log("game is started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 250);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 3); 
  let randColor = btns[randIdx];
  let randBtn = document.querySelector(`.${randColor}`);
  
  gameSeq.push(randColor); 
  console.log(gameSeq);
  
  btnFlash(randBtn);
}

function checkAns(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length === gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerHTML = `Game Over! Your score was <b>${level}</b>. Press any key to start.`;
    document.querySelector("body").style.backgroundColor = "red";
    
    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 1500);
    
    reset();
  }
}

function btnPress() {
  let btn = this; 
  userFlash(btn);

  let btnColor = btn.classList[1]; 

  userSeq.push(btnColor); 
  
  checkAns(userSeq.length - 1);
}

document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("click", btnPress);
});














































































