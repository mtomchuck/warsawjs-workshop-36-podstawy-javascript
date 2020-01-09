// Stwórz zmienną przechowującą twój wiek, niech program przypisze do nowej zmiennej `myAgeIn10Years` ile będziesz mieć lat za 10 lat

let age = 0;

submit.addEventListener('click', function(){
    age = parseInt(document.getElementById("age").value);
    // console.log(typeof age);

    myAge();
})

function myAge() {
    let myAgeIn10Years = age + 10;
    console.log(`Czy wiesz, że za 10 lat osiągniesz wiek ${myAgeIn10Years} lat?`);
}