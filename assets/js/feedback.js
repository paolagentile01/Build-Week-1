/*per ogni volta che passiamo il mouse sopra le stelline inerenti la recensione
cambierà il colore*/
function cambioColore() {
    let stelline = document.querySelectorAll(".stellineFeedback");
    stelline.forEach(function(stella) {
        stella.addEventListener("mouseover", function(e) {
            e.target.style.color = "aqua";
        });
        stella.addEventListener("mouseout", function(e) {
            e.target.style.border = "none";
        });
        stella.addEventListener("onclick",function(e){
            e.target.style.border ="2px solid aqua";
        });
    });
}

cambioColore();

