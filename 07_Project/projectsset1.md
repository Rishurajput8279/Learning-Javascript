# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-ejgveevn?file=1-colorChanger%2Fchaiaurcode.js,1-colorChanger%2Findex.html)

# Solution code

## project 1
```javaScript
console.log("Rishu")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    // if(e.target.id === "grey"){
    //   body.style.backgroundColor="grey";
    // }
    switch (e.target.id) {
      case 'grey':
        body.style.backgroundColor = e.target.id;
        break;
      case 'yellow':
        body.style.backgroundColor = e.target.id;
        break;
      case 'white':
        body.style.backgroundColor = e.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = e.target.id;
        break;
      case 'purple':
        body.style.backgroundColor = e.target.id;
        break;
    }
  });
});


```
## Project2
```javaScript
const form = document.querySelector('form');
// This useCase Give you Empty value;
// const Height=parseInt(document.querySelector('#height').value)
// const weight=parseInt(document.querySelector('#weight').value)
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results=document.querySelector("#results")
  // console.log(height);
  // console.log(weight);
  if(height==='' || height<=0 || isNaN(height)){
    results.innerHTML=`Give a Valid Height ${height}`;
  }
  else if(weight ==='' || weight<=0 || isNaN(weight)){
    results.innerHTML=`Give a Valid Weight ${weight}`;
  }
  else{
    const BMI=(weight/ ((height*height)/10000)).toFixed(2);
    if(BMI<18.6){
      results.innerHTML=`<span> ${BMI} </span> 
      <br>
      The BMI is under Weight
      `
    }
    else if(BMI > 24.9){
      results.innerHTML=`<span> ${BMI} </span> 
      <br>
      The BMI is Over Weight
      `
    }
    else{
      results.innerHTML=`<span> ${BMI} </span> 
      <br>
      The BMI is Normal Weight
      `
    }
  }
}); 

```


## project 3
```javaScript
const clock = document.querySelector('#clock');
function getTime() {
  const date = new Date().toLocaleTimeString();
  // const hour = date.getHours();
  // const min = date.getMinutes();
  // const sec = date.getSeconds();
  // clock.innerHTML = `${hour} : ${min} : ${sec}`;
  clock.innerHTML = `${date}`;
}
setInterval(getTime, 1000);

```



## project 4
```javaScript

let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');

const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];

let numGuess = 1;
let playGame = true;
if (playGame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guessNum) {
  if (guessNum <= 0 || guessNum > 100 || isNaN(guessNum)) {
    alert('Please Enter a Valid Number');
  } else {
    prevGuess.push(guessNum);
    if (numGuess == 10) {
      displayGuess(guessNum);
      displayMessage(`Game Over. RandomNumber was ${randomNumber}`);
      endGame();
    } else {
      displayGuess(guessNum);
      checkGuess(guessNum);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`You Guess it Right`);
    endGame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is Too Low`);
  } else {
    displayMessage(`Number is Too High`);
  }
}
function displayGuess(guess) {
  userInput.value = '';
  guessSlot.innerHTML += ` ${guess}`;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}
function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
    userInput.value = ''; 
    userInput.setAttribute('disabled', ''); 
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame"> Start New Game </h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
  const newGameBtn=document.querySelector("#newGame");
  newGameBtn.addEventListener("click",(e)=>{
    randomNumber=parseInt(Math.random() * 100 + 1);
    prevGuess=[];
    numGuess=1;
    guessSlot.innerHTML='';
    remaining.innerHTML=`${11 - numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    playGame=true;

  })
}

```