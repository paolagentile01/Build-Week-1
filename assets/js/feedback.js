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

    function coloraStelle(numeroStella) {
    var stelle = document.querySelectorAll('.star1');

    for (var i = 0; i < stelle.length; i++) {
        if (i < numeroStella) {
            stelle[i].style.color = 'aqua';
        } else {
            stelle[i].style.color = 'black';
        }
    }
};

