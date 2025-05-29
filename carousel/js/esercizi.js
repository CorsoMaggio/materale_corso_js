/**
 * 
 * 1. Stampa in console tutti i numeri da 1 a 10
 *     for (let i = 1; i <= 10; i++) {
            console.log(i);
        }
 * 
 * 2. Stampa in console tutti i numeri pari da 1 a 20
 * 
 * for (let i = 1; i <= 20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
}
 * 
 * 3. Riprendi l'elenco della tua classe. Accettando un nome dato dall'utente in un prompt, controlla se quel nome è presente nell'elenco.
 *    Se è presente stampa in console il messaggio "Puoi accedere", altrimenti "Non Puoi accedere"
*     const nomi = ["Gianpierre", "Alessandro", "Deborah", "Giorgia", "Leysan", "Lorenzo", "Melania", "Rafaela", "Valentino", "Wilmar"];

        const nomeUtente = prompt("Inserisci il tuo nome:");

        if (nomi.includes(nomeUtente)) {
        console.log("Puoi accedere");
        } else {
        console.log("Non Puoi accedere");
        }

        --con un for

        const nomeUtente = prompt("Inserisci il tuo nome:");
        let trovato = false;

        for (let i = 0; i < classe.length; i++) {
        if (classe[i].toLowerCase() === nomeUtente.toLowerCase()) {
            trovato = true;
            break;
        }
        }

        if (trovato) {
        console.log("Puoi accedere");
        } else {
        console.log("Non Puoi accedere");
        }
 */