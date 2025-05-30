
const images = [
    {
        image: './img/01.webp',
        title: 'Spiderman'
    },
    {
        image: './img/02.webp',
        title: 'Warrior cats'
    },
    {
        image: './img/03.webp',
        title: 'Superheros'
    },
    {
        image: './img/04.webp',
        title: 'Cat'
    },
    {
        image: './img/05.webp',
        title: 'Avengers'
    }
] 
//Prendo il div dall'html
const slider = document.querySelector('.slider');
//inizializzo l'indice corrente a 0
let indiceAttivo = 0;
//inizializzo la stringa slides '';
let slides ='';
//prendo il div thumbslider
const thumbSlider = document.querySelector('.thumb-slider');
//inizializzo la stringa thumbs '';
let thumbs = '';
//Ciclo for
//Posso usare sia il for che il forEach 
//for (let i = 0; i < images.length; i++) {
//per ogni immagine creo un div con img e un thumbnail più piccolo
images.forEach((obj) =>{
    //ad ogni ciclo aggiungo un div alla stringa precedente (+=)
    slides += `<div class="slide">
                    <img src="${obj.image}" alt="img-${obj.title}" class="object-fit-cover">
                    <div class="overlay">
                    <h2 class="display-2  fw-bold text-center pt-5">${obj.title}</h2>
               </div> 
                    </div>`;

    thumbs += `<div class="thumb">
                    <img src="${obj.image}" alt="img-${obj.title}">
               </div> `;
});
//aggiungo le slides allo slider
slider.innerHTML += `${slides}`;
//aggiungo le img al thumbslider
thumbSlider.innerHTML += `${thumbs}`;
//seleziono tutti gli elementi slide e thumb e attacco la classe active solo su quelli con il indiceAttivo corrispondente
document.querySelectorAll('.slide')[indiceAttivo].classList.add('active');
document.querySelectorAll('.thumb')[indiceAttivo].classList.add('active');

/*

Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
*/
//prendo i btn dall'html
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
//metto gli eventlistener sui bottoni
next.addEventListener('click', goNext);
prev.addEventListener('click', goPrev);
//Buttons function (goNext and goPrev)
function goNext() {
    //rimuovo la classe active
    document.querySelectorAll('.slide')[indiceAttivo].classList.remove('active');
    document.querySelectorAll('.thumb')[indiceAttivo].classList.remove('active');
    //cambio l'indice
    if (indiceAttivo === images.length -1){
        indiceAttivo = 0;
    } else {
        indiceAttivo++;
    }
    /*POSSO ANCHE FARE
        indiceAttivo++
        if (indiceAttivo === images.length){
        indiceAttivo = 0;
    } ed evitare l'else
        */
    //metto la classe active al nuovo index 
    document.querySelectorAll('.slide')[indiceAttivo].classList.add('active');
    document.querySelectorAll('.thumb')[indiceAttivo].classList.add('active');
}
function goPrev() {
    document.querySelectorAll('.slide')[indiceAttivo].classList.remove('active');
    document.querySelectorAll('.thumb')[indiceAttivo].classList.remove('active');
    if (indiceAttivo === 0) {
        indiceAttivo = images.length - 1;
    } else {
        indiceAttivo--;
    }
    document.querySelectorAll('.slide')[indiceAttivo].classList.add('active');
    document.querySelectorAll('.thumb')[indiceAttivo].classList.add('active');
}

let interval;
function start (){
    // metto l'intervallo e lo salvo in una variabile
        //setInterval(funzione da eseguire, tempo in millisecondi tra le ripetizioni)
    interval = setInterval(goNext, 1000);
}
function stop(){
    //uso la variabile per fermare l'intervallo 
    clearInterval(interval);
}
const container = document.querySelector('.bg-black');
//al caricamento della pagina invoco start che fa iniziare lo scorrimento della immagini
start();
//quando il mouse passa sopra stoppo (chiamo il clearInterval)
container.addEventListener('mouseover', stop);
//quando il mouse passa sopra avvio (chiamo il setInterval)
container.addEventListener('mouseout', start);
