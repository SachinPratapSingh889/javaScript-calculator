let numone=4
let numtwo=3
document.getElementById("num1").textContent=numone
document.getElementById("num2").textContent=numtwo


let result=document.getElementById("res")

function sum(){
    let ans=numone+ numtwo
    result.textContent="sum :" +ans
}

function substract(){
    let ans=numone- numtwo
    result.textContent="Substract :"+ ans
}


function multiply(){
    let ans=numone* numtwo
    result.textContent="Multiply :" + ans
}


function divide(){
    let ans=numone/ numtwo
    result.textContent="Divide :"+ans
}