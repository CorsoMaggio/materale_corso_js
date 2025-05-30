/**
 * OGGETTO JS
 * const persona = {
    nome: "Luca",
    eta: 25
    };
    Può diventare const json = JSON.stringify(persona);
    JSON
    {
    "nome": "Luca",
    "eta": 25
    }
    Può diventare const oggetto = JSON.parse(jsonString); 

    N.B."JSON è una stringa che rappresenta dati. Gli oggetti JS sono dati reali nel codice. Usi JSON.parse() per leggere un JSON, e JSON.stringify() per inviarlo o salvarlo."
   
   METODO fetch()
        fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json())  // <- .json() restituisce una Promise
    .then(data => {
        console.log(data); // Qui abbiamo un oggetto JS
    });

  N.B.
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => {
        const dati = JSON.parse(response); //  ERRORE!
        console.log(dati);
    });
    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(response => response.json()) // usa il metodo giusto
    .then(data => {
        console.log(data); // ✅ Oggetto JavaScript pronto
    });

  ESEMPIO
    const jsonString = '{"nome": "Chiara", "eta": 22}';
    const persona = JSON.parse(jsonString);

    console.log("Nome:", persona.nome); // "Chiara"
    console.log("Età:", persona.eta);   // 22

    fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(user => {
        console.log("Nome utente:", user.name);
        console.log("Email:", user.email);
    })
    .catch(errore => {
        console.error("Errore durante il fetch o la conversione JSON:", errore);
    });

 */