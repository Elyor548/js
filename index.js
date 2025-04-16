let PlusClick = document.getElementById('Plus')
let MinusClick = document.getElementById('Minus')
let MultiplicationClick = document.getElementById('Multiplication')
let DivisionClick = document.getElementById('Division')


let input1 = document.getElementById('number1');
let input2 = document.getElementById('number2');


function makeOperation(operationCode) {
    
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result;


    if (operationCode === '+') {
         result = number1 + number2;
    } else if (operationCode === '-') {
         result = number1 - number2;
    } else if (operationCode === '*') {
         result = number1 * number2;
    } else if (operationCode === '/') {
         result = number1 / number2;
    } else {
        window.alert('operation is unknown')
    }
    window.alert(result);

} 

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation);

}

// function addCommonEventListener(i) {
//      Operationbuttons[i].addEventListener('click' , onOperationButtonClick)

// }

let Operationbuttons = [PlusClick, MinusClick,  MultiplicationClick, DivisionClick]


for (let i = 0; i < Operationbuttons.length; i++) {
     let button = Operationbuttons[i];
     button.addEventListener('click' , onOperationButtonClick);    // итерация
}


// Operationbuttons[0].addEventListener('click' , onOperationButtonClick)
// Operationbuttons[1].addEventListener('click' , onOperationButtonClick)
// Operationbuttons[2].addEventListener('click' , onOperationButtonClick)
// Operationbuttons[3].addEventListener('click' , onOperationButtonClick)

























































// / function OnPlusClick() {
    //     let input1 = document.getElementById('Number1')
    //     let input2 = document.getElementById('Number2')
    
    //     let Number1 = Number(input1.value)
    //     let Number2 = Number(input2.value)
    
    //     let summ = Number1 + Number2 
        
    //     window.alert(summ)
    
    // }
    
    // function OnMinusClick() {
    //     let input1 = document.getElementById('Number1')
    //     let input2 = document.getElementById('Number2')
    
    //     let Number1 = Number(input1.value)
    //     let Number2 = Number(input2.value)
    
    //     let summ = Number1 - Number2
    
    //     window.alert(summ)
    // }
    
    // function OnMultiplicationClick() {
    //     let input1 = document.getElementById('Number1')
    //     let input2 = document.getElementById('Number2')
    
    //     let Number1 = Number(input1.value)
    //     let Number2 = Number(input2.value)
    
    //     let summ = Number1 * Number2
    
    //     window.alert(summ)
    // }
    
    // function OnDivisionClick() {
    //     let input1 = document.getElementById('Number1')
    //     let input2 = document.getElementById('Number2')
    
    //     let Number1 = Number(input1.value)
    //     let Number2 = Number(input2.value)
    
    //     let summ = Number1 / Number2
    
    //     window.alert(summ)
    // }
    //  это изначальный код