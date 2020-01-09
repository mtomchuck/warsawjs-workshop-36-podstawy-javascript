const tellMeNumber1 = "Podaj dowolną liczbę.";
const number1 = prompt(tellMeNumber1);

const tellMeNumber2 = "Podaj jeszcze jedną liczbę, inną niż poprzednio.";
const number2 = prompt(tellMeNumber2);

const tellMeNumber3 = "I ostatnią, inną niż dwie poprzednie.";
const number3 = prompt(tellMeNumber3);


if (number1 > number2 && number3) {
    console.log(`Największą z liczb, które podałeś jest ${number1}`)
} else if (number2 > number1 && number3) {
    console.log(`Największą z liczb, które podałeś jest ${number2}`)
} else {
    console.log(`Największą z liczb, które podałeś jest ${number3}`)
}

