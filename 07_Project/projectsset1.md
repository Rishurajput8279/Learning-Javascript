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