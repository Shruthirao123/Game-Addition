let userInput=document.getElementById("userInput");
let num1=document.getElementById("firstNumber");
let num2=document.getElementById("secondNumber");
let res=document.getElementById("gameResult");
function restart(){
    let n1=Math.random()*100;
    let n2=Math.random()*100;  
    num1.textContent=Math.ceil(n1);
    num2.textContent=Math.ceil(n2); 
    userInput.value="";
    res.textContent="";
}
function check(){
    let n1=parseInt(num1.textContent);
    let n2=parseInt(num2.textContent);
    let sum=n1+n2;
    if (sum===parseInt(userInput.value)){
        res.textContent="Congratulations!" ; 
        res.style.backgroundColor="Green";
        res.style.textCenter;
    }
    else{
        res.textContent="Try Again!";
        res.style.backgroundColor='Red';
        res.style.textCenter;
    }
}