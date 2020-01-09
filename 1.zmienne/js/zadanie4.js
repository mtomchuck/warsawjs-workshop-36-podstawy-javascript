// Wykorzystaj wiedzę z zadania 3go i 2go i stwórz prostu program obliczający twój wiek w roku `x` gdy podasz datę urodzenia `y`
// Podpowiedź, musisz zapytać użytkownika o dwie daty - najpierw o datę urodzenia, a potem o datę w której ma wyliczyć wiek

let tellMeBirthdayDate = "W którym roku się urodziłeś?"
let birthdayDate = prompt(tellMeBirthdayDate);

let tellMeFutureDate = "Dla którego roku wyliczyć Twoją datę urodzenia?"
let futureDate = prompt(tellMeFutureDate);

function countFutureAge() {
    let futureAge = futureDate - birthdayDate;
    console.log(`Policzyliśmy to! W ${futureDate} roku osiągniesz wiek ${futureAge} lat.`);
}

countFutureAge();

// // ALBO

// let x = 0;
// let y = 0;

// const submit2 = document.querySelector(".submitAge");
// // console.log(submitAge);

// submit2.addEventListener('click', function(){
//     y = parseInt(document.getElementById("birthdayDate").value);
//     x = parseInt(document.getElementById("futureDate").value);

//     countAge();
// })

// function countAge() {
//     let myFutureAge = x - y;
//     console.log(`Policzyliśmy to! W ${x} roku osiągniesz wiek ${myFutureAge} lat.`)
// }
