/*per ogni volta che passiamo il mouse sopra le stelline inerenti la recensione
cambierà il colore*/
const stars=document.querySelectorAll(".stellineFeedback");
function cambiaColore(array,numero){
    console.log(stars);
    for(let i = 0; array.length-numero>i; i++){
        array[i].classList.add("stellineFeedback1");
    }
}

cambiaColore(stars,4);