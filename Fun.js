//number
let n1 = document.querySelector(".n1")
let n2 = document.querySelector(".n2")
let n3 = document.querySelector(".n3")
let n4 = document.querySelector(".n4")
let n5 = document.querySelector(".n5")
let n6 = document.querySelector(".n6")
let n7 = document.querySelector(".n7")
let n8 = document.querySelector(".n8")
let n9 = document.querySelector(".n9")
//operator
let plus = document.querySelector(".plus")
let sub = document.querySelector(".sub")
let mult = document.querySelector(".mult")
let div = document.querySelector(".div")
let result = document.querySelector(".result");
//display
let display = document.querySelector("#Display")
let AC = document.querySelector(".ac")
let n

function output(event){
    
    display.value += event.target.value
    n += display.value;
    console.log(display.value)
    }

function Result(event){
    let r = eval(display.value)
    display.value = r
    }

function reset(){
    display.value = " "
}
//reset
AC.addEventListener("click", reset);
//numbers
n1.addEventListener("click", output);
n2.addEventListener("click", output);
n3.addEventListener("click", output);
n4.addEventListener("click", output);
n5.addEventListener("click", output);
n6.addEventListener("click", output);
n7.addEventListener("click", output);
n8.addEventListener("click", output);
n9.addEventListener("click", output);
//operators
plus.addEventListener("click", output);
sub.addEventListener("click", output);
mult.addEventListener("click", output);
div.addEventListener("click", output);
//result
result.addEventListener("click", Result);