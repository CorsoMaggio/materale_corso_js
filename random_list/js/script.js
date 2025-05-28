
const nomi = ["Gianpierre", "Alessandro", "Deborah", "Giorgia", "Leysan", "Lorenzo", "Melania", "Rafaela", "Valentino", "Wilmar"];
//con l'operatore spread ceo un array nuovo identico a quello di partenza, ma indipendente
let nomiRimanenti = [...nomi];


function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
function pickRandomStudent() {
    //Se nomiRimanenti è vuoti
  if (nomiRimanenti.length === 0) {
    document.getElementById("studentName").textContent = "Tutti sono stati chiamati!";
    //disabilito il bottone
    document.getElementById("pickBtn").disabled = true;
    //rendo visibile il btn di reset
    document.getElementById("resetBtn").style.display = "inline-block";
    //altrimenti
  }else{
    //Utile per avere un numero random tra 0 e il numero messo - 1
    const randomIndex = Math.floor(Math.random() * nomiRimanenti.length);
    //salvo il nome estratto e lo tolgo dall'elenco dei rimanenti
    const selectedStudent = nomiRimanenti.splice(randomIndex, 1)[0];
    const formattedName = capitalizeFirstLetter(selectedStudent);
    document.getElementById("studentName").textContent = 'Il prescelto è: ' + formattedName;
  }

}

function resetStudents() {
    //ripopolo l'array
  nomiRimanenti = [...nomi];
  //svuoto il div
  document.getElementById("studentName").textContent = "";
  //riabilito il bottone
  document.getElementById("pickBtn").disabled = false;
  //nascondo il btn reset
  document.getElementById("resetBtn").style.display = "none";
}