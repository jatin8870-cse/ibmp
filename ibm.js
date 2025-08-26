console.log("hello jatin ");
const forms=document.querySelector("form");
//this usecase will give you empty
//const height=  parseInt(document.querySelector("#height").value);
forms.addEventListener('submit',function(e){
    e.preventDefault();
  const height=  parseInt(document.querySelector("#height").value);
  const weight=  parseInt(document.querySelector("#Weight").value);
    const result= document.querySelector("#result");
  if(height==''||height < 0 || isNaN(height)){
   result.innerHTML="Please give a valid height";
  }
  if(weight==''||weight < 0 || isNaN(weight)){
   result.innerHTML="Please give a valid weight";
  }else{
   const bmi= weight/((height*height)/10000).toFixed(2);
   result.innerHTML+=`<span>Your BMI is ${bmi}</span>`;
  

if(bmi < 18.5){
        result.innerHTML += `<span>You are underweight</span>`;
    } else if(bmi >= 18.5 && bmi < 24.9){
        result.innerHTML += `<span>You have a normal weight</span>`;
    } else if(bmi >= 25 && bmi < 29.9){
        result.innerHTML += `<span>You are overweight</span>`;
    } else {
        result.innerHTML += `<span>You are obese</span>`;
    }
  }
  
})
