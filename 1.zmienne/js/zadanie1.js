// 1. Zdefiniuj dwie zmienne posiadające twoje imię i nazwisko
// Wyświetl każdą z nich w konsoli, a następnie pozwól, aby konsola mogła cię przywitać
// Np dla zmiennych `'Krzysztof'`, `'Łokaj'` niech konsola przywita `'Hej Krzysztof Łokaj Miło cię widzieć'`

let name = "";
let surname = "";

const submit = document.querySelector(".submitName");
// console.log(submitName);

submit.addEventListener('click', function(){
    name = document.getElementById("name").value;
    surname = document.getElementById("surname").value;
    // console.log(name);
    // console.log(surname);

    sayHello();
})

function sayHello() {
    console.log(`Cześć ${name} ${surname}! Miło Cię widzieć!`)
}



