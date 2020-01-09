if (sex === "f") {
    retireFemale = 65 - legalLiability;
    console.log(`Aby doczekać listonosza z emeryturą musisz przeżyć jeszcze ${retireFemale} lat(a).`);
} else if (sex === "m") {
    retireMale = 67 - legalLiability;
    console.log(`Aby doczekać listonosza z emeryturą musisz przeżyć jeszcze ${retireMale} lat(a).`);
}