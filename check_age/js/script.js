// document.getElementById('ageForm').addEventListener('submit', function(e) {
//     e.preventDefault();
//     const  dob = document.getElementById('dob').value;
// });

let ageForm = document.getElementById('ageForm')
ageForm.addEventListener('submit', function(e) {
    e.preventDefault();
    //prendo il value
    const  dob = document.getElementById('dob').value;
    //creo le date
    const today = new Date();
    const dobdate = new Date(dob);
    //prendo età
    let age = today.getFullYear() - dobdate.getFullYear();

    const m = today.getMonth() - dobdate.getMonth();
    // NB: m < 0 il compleanno è nel futuro
    // NB: m === 0 ma il giorno del compleanno non è ancora arrivato
    if (m < 0 || (m === 0 && today.getDate() < dobdate.getDate())) {
        //se il compleanno non è arrivato decremento l'età
    age--;
    }
    //prendo il div
    const message = document.getElementById('message');
    if (age >= 18) {
       // modifico testo
    message.textContent = 'Sei maggiorenne, puoi accedere.';
       // modifico colore del testo
    message.style.color = 'green';
    } else {
       // modifico testo
    message.textContent = 'Sei minorenne, non puoi accedere.';
       // modifico colore del testo
    message.style.color = 'red';
    }
});