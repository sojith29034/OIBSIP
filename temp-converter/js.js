const celsius = document.querySelector("#degCel");
const fahrenheit = document.querySelector("#degFah");
const kelvin = document.querySelector("#kelvin");

const in_temp = document.querySelector("#in_temp");
const input = document.querySelector("#input");
const out_temp = document.querySelector("#out_temp");
const convert = document.querySelector("#convert");

window.addEventListener("load", () =>{
    input.value = "";
})


convert.addEventListener("click", (e) => {
    e.preventDefault();
    let inVal = input.value;
    if(Number(inVal)){
        convertTemp();
    }
    else{
        error();
    }
})

function convertTemp(){
    let inVal = input.value;

    if(in_temp.value === "Degree Celsius"){
        if(out_temp.value === "Degree Fahrenheit"){
            let output = (((inVal * 9)/5) + 32);
            result.innerHTML = output.toFixed(2);
        }
        else if(out_temp.value === "Kelvin"){
            let output = ((inVal * 1) + 273.15);
            result.innerHTML = output.toFixed(2);
        }
        else{
            result.innerHTML = inVal;
        }
    }
    else if(in_temp.value === "Degree Fahrenheit"){
        if(out_temp.value === "Degree Celsius"){
            let output = (((inVal * 1)-32) * 5/9);
            result.innerHTML = output.toFixed(2);
        }
        else if(out_temp.value === "Kelvin"){
            let output = ((((inVal * 1)-32) * 5/9) + 273.15);
            result.innerHTML = output.toFixed(2);
        }
        else{
            result.innerHTML = inVal;
        }
    }
    else if(in_temp.value === "Kelvin"){
        if(out_temp.value === "Degree Celsius"){
            let output = ((inVal * 1)-273.15);
            result.innerHTML = output.toFixed(2);
        }
        else if(out_temp.value === "Degree Fahrenheit"){
            let output = ((((inVal * 1) - 273.15) * 9/5) + 32);
            result.innerHTML = output.toFixed(2);
        }
        else{
            result.innerHTML = inVal;
        }
    }
}

function error(){
    alert("Please enter a valid Temperature input.");
}