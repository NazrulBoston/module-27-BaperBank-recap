/**
 * 1.ai function a 2nd line a age amra getElementById('----') aivabe hard cod bosaitam r akhon ai function
 * parameter bosabo inputField. tarpor amra jokhon function k call karbo tokhon j parameter die call tokhon oi 
 * parameter oikhane bosbe.  
 * 2. jehetu ati akki input tai ar value amra nibo not innerText tai, inputField.value nisi and oitake akta 
 * getInputFieldValueString namer variable a rakha hoese
 * 3. tarpor oi getInputFieldValueString k ParseFloat kara hoese and setake inputFieldValue namer varable a rakha hoese
 * 4.jokhon inputField read kare akta variable a rakhsi tokhon inputField.value = ''; die dea jai, tai akhane 
 * inputField ke empty kare dea hoese
 * 5. tarpor inputFieldValue k return kara hoese 
 * 
 * (function ta 5 line ar and ai holo 5ta steps. 1st and 2nd function akoi rokom just 1st ta input and 2nd ta text
 * ar jehetu 1st ta input field tai ar inputField.value =''; ta empty kare dia hoese)
 
 */

function getInputFieldValueById(inputFieldId) {
    const inputField = document.getElementById(inputFieldId);
    const getInputFieldValueString = inputField.value;
    const inputFieldValue = parseFloat(getInputFieldValueString);
    inputField.value = '';
    return inputFieldValue;

}

function getTextElementValueById(elementId) {
    const elementField = document.getElementById(elementId);
    const elementValueString = elementField.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;

}

/**
 * ai function set karte ammdr duita parameter lagbe akta element ar id arekta new value amra koto set karbo ai 2 ta lagbe
 *1. document.getElementById(elementId) nie seta textElement namer akti variable set kare dia hosee
 2. textElement ar innerText ke vewValue (parameter) ar moddhe rakha hoese
 aikhane fucntion k return kara hoinai because amra call karbona
*/

function setTextElementValueById(elementId, newValue){
    const textElement = document.getElementById(elementId);
    textElement.innerText = newValue;
}