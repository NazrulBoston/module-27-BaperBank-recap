/**
 * 1. add event listener to the deposit button 
 * 2. get deposit amount from the deposit input field
 * 2.5 convert string deposit amount to a number type
 * 3. clear the deposit input field after getting the value
 * 
 * 
 * 
 * 
 */

//step-1
document.getElementById('btn-deposit').addEventListener('click', function () {
    //step-2
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step 3
    depositField.value = '';

// step 4:
const depositTotalElement = document.getElementById('deposit-total');
const previousDepositTotalString = depositTotalElement.innerText; 

})