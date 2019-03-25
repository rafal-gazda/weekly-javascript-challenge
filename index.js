let input;
let allNumbers = [];
let primeNumbers = [];

const output = document.getElementsByClassName("main__result")[0];
const submitForm = document.getElementsByClassName("form__button")[0];
const exceptionForm = document.getElementsByClassName("form__exception")[0];

submitForm.addEventListener("click", startApp);

function startApp(){
	allNumbers = [];
	primeNumbers = [];
	
	input = document.getElementsByClassName("form__input")[0].value;
	checkData(input);
}

function checkData(input){
	try{
		const inputNumber = parseFloat(input);
		
		if(input === ""){
			throw "Proszę wpisać wartość";
		}
		else if(isNaN(input)){
			throw "Wpisana wartość nie jest liczbą";
		}
		else if(!Number.isInteger(inputNumber) || inputNumber < 0){
			throw "Wpisana liczba nie jest liczbą naturalną";	
		}
		else if(inputNumber > 10000){
			throw "Wpisana wartość jest większa od 10000";
		}
		else{
			logValue(input);
		}
	}
	catch (e){
		logException(e);
	}
}

function inputData(input){
	for(var i = 2; i <= input; i++){
		allNumbers[i - 2] = i;
	}
	
	return allNumbers;
}

function outputData(allNumbers){
	
	allNumbers = inputData(allNumbers);
	
	for(var i = 2; i < allNumbers.length; i++){
		for(var j = 2; j < allNumbers.length; j++){
			if(i * j - 2 < allNumbers.length ){
				allNumbers[i * j - 2] = false;	
			}
		}
	}
	
	for(var i = 0; i < allNumbers.length; i++){
		if(allNumbers[i] != false){
			primeNumbers.push(allNumbers[i]);
		}
	}
	
	return primeNumbers.join(", ");
}
	
function logException(exception){
	output.textContent = exception;
}

function logValue(input){
	output.textContent = outputData(input);
}

