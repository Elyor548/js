let PlusClick = document.getElementById('Plus')
let MinusClick = document.getElementById('Minus')
let MultiplicationClick = document.getElementById('Multiplication')
let DivisionClick = document.getElementById('Division')

function OnPlusClick() {
    let input1 = document.getElementById('Number1')
    let input2 = document.getElementById('Number2')

    let Number1 = Number(input1.value)
    let Number2 = Number(input2.value)

    let summ = Number1 + Number2 
    
    window.alert(summ)

}

function OnMinusClick() {
    let input1 = document.getElementById('Number1')
    let input2 = document.getElementById('Number2')

    let Number1 = Number(input1.value)
    let Number2 = Number(input2.value)

    let summ = Number1 - Number2

    window.alert(summ)
}

function OnMultiplicationClick() {
    let input1 = document.getElementById('Number1')
    let input2 = document.getElementById('Number2')

    let Number1 = Number(input1.value)
    let Number2 = Number(input2.value)

    let summ = Number1 * Number2

    window.alert(summ)
}

function OnDivisionClick() {
    let input1 = document.getElementById('Number1')
    let input2 = document.getElementById('Number2')

    let Number1 = Number(input1.value)
    let Number2 = Number(input2.value)

    let summ = Number1 / Number2

    window.alert(summ)
}



PlusClick.addEventListener('click' , OnPlusClick)
MinusClick.addEventListener('click' , OnMinusClick)
MultiplicationClick.addEventListener('click' , OnMultiplicationClick)
DivisionClick.addEventListener('click' , OnDivisionClick)