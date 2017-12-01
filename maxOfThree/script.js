function maxOfThree(number1,number2,number3){
    if(number1 == number2 && number2 == number3){
        document.write(`The numbers are equals`);
    }
   else if(number1 > number2 && number2 > number3){
        document.write(`The biggest number is ${number1}`);
        }
    else if(number2 > number3) {
        document.write(`The biggest number is ${number2}`);
    }else{
        document.write(`The biggest number is ${number3}`);
    }
    }
    
maxOfThree(70,70,80);

