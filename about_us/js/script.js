    //     <img src="https://i.pravatar.cc/150?img=1" alt="Avatar di Mario Rossi" class="avatar"/>
    //     <h2>Mario Rossi</h2>
    //     <p><strong>Email:</strong> mario.rossi@example.com</p>
    //     <p><strong>Azienda:</strong> Rossi S.p.A.</p>
    //     <p><strong>Città:</strong> Roma</p>
    //   </div>
 const container = document.getElementById('userCards');

    //prendo i dati
 fetch('https://jsonplaceholder.typicode.com/users')
    //prendo i dati e trasformo in oggetto/array di oggetti (then => la risposta è andata a buon fine)
   .then(response => response.json()) //scrivo il codice su una linea quindi non serve il return
    //prendo la response parsata e ci lavoro
   .then(users => {
    //ciclo sull'array users (uso slice per prendere solo dal primo al sesto elemento)
     users.slice(0, 5).forEach((user, index) => {
        //creo la card
      const card = `
       <div class="card">
         <img src="https://i.pravatar.cc/150?img=${user.id}" alt="Avatar di ${user.name}" class="avatar"/>
         <h2>${user.name}</h2>
         <p><strong>Email:</strong> ${user.email}</p>
         <p><strong>Azienda:</strong> ${user.company.name}</p>
         <p><strong>Città:</strong> ${user.address.city}</p>
          </div>
       `;
       //inserisco la card al container - prima della fine
        container.insertAdjacentHTML('beforeend', card);

       //container.appendChild(card);
     });
   })
    //intercetto l'errore e lo gestisco(catch => la chiamata è fallita)
   .catch(error => {
     container.innerHTML = '<p>Errore nel caricamento degli utenti.</p>';
     console.error('Fetch error:', error);
   });
