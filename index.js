const myText=document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const resultElement=document.getElementById("resultElement");

let age=0;

mySubmit.onclick=function(){
    age=myText.value;
    age=Number(age);


    
if (age>=100){
     
    resultElement.textContent='You are a centenarian!';
    }
    else if (age>=50){
        
        resultElement.textContent='You are a senior citizen!'; 
    }
    else if (age>=18){
        
        resultElement.textContent='You are an adult!'; 
    }
    else if (age>=13){
        resultElement.textContent='You are a teenager!';
    }
    else if (age>=0){
        
        resultElement.textContent='You are a child!'; 
    }
    else {
          
        resultElement.textContent='Invalid age!';
    }
    
}


