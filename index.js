let a = ''; // first numer 
let b = ''; // second number
let sign = ''; // method
let finnish = false; 

const digit = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."];
const action = ["-", "+", "*", "/"];


// sceen 

const out = document.querySelector('.numbers_in_up p');

function clearAll (){
    let a = ''; // first numer 
    let b = ''; // second number
    let sign = ''; // method
    let finnish = false; 
    out.textContent = 0;
}

document.querySelector('.clear').onclick = clearAll;

document.querySelector('.calculator_options').onclick = (event)=>{
    if(!event.target.classList.contains('btn')) return;
    if(event.target.classList.contains('clear')) return;
    out.textContent = '';
    const key = event.target.textContent
    if(digit.includes(key)){
        if(b === '' && sign === ''){
            a+=key;
            console.log(a, b, sign);
            out.textContent = a;
        }
        else if(a!== '' && b!== '' && finnish){
            b = key;
            finnish = false;
            out.textContent = b;
        }
        else{
            b += key;
            out.textContent = b;
        }
        console.table(a, b, sign);
        return;
    }
    if(action.includes(key)){
        sign = key;
        out.textContent = sign;
        console.table(a, b, sign);
        return;
    }

    if(key === '='){
        if(b === '') b = a;
        switch(sign){
            case "+":
                a = (+a) + (+b);
                break;
            case "-":
                a = a - b;
                break;
            case "*":
                a = a * b;
                break;
            case "/":
                if (b === '0'){
                    out.textContent = '0i chen bajanum :)';
                    a= '';
                    b= '';
                    sign= '';
                    return;
                }
                a = a / b;
                break;
        }
        finnish = true;
        out.textContent = a;
        console.table(a, b, sign);
    }
};
