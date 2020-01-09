// 1. Pobierz od użytkownika jego wiek i sprawdź jego odpowiedzialność prawną.
// * Za osoby poniżej 15 roku życia odpowiadają rodzicę.
// * Osoby w wieku 15-18 lat mają ograniczoną odpowiedzialność karną.
// * Osoby powyżej 18 lat mają pełną odpowiedzialność.
// * Dodatkowo osoby powyżej 150 lat są ścigane przez wszystkich naukowców, bo odkryły nieskończone źródło wiecznej młodości

let tellMeYourAge = "Ile masz lat?"
let legalLiability = prompt(tellMeYourAge);

if (legalLiability < 15 ) {
    console.log("Nie masz jeszcze skończonych 15 lat - odpowiadają za Ciebie rodzice.");
} else if (legalLiability >= 15 && legalLiability < 18) {
    console.log("Masz ograniczoną odpowiedzialność prawną, wciąż potrzebujesz zgody rodziców.");
} else if (legalLiability >= 18 && legalLiability <= 110) {
    console.log("Masz pełną odpowiedzialność prawną. Możesz samodzielnie kupić browarka w monopolowym. Gratulacje!");
} else if (legalLiability > 110) {
    console.log("Jesteś ścigany przez wszystkich naukowców, odkryłeś tajemnicze źródło wieczniej młodości.")
}