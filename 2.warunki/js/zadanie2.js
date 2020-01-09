// oproś użytkownika o podanie płci i wieku sprawdź w jakim wieku przejdzie na emeryturę. (kobiety 65 lat, mężczyźni 67 lat)

const tellMeYourSex = "Jeśli jesteś kobietą wpisz literkę 'f', jeśli jesteś mężczyzną - wpisz literkę 'm'";
const sex = prompt(tellMeYourSex);

if (sex === "f") {
    console.log("Przejdziesz na emeryturę gdy skończysz 65. rok życia.");
} else if (sex === "m") {
    console.log("Przejdziesz na emeryturę gdy skończysz 67. rok życia.");
}