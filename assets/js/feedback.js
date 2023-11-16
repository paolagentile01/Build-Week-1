/*per ogni volta che passiamo il mouse sopra le stelline inerenti la recensione
cambierà il colore*/
function cambioColore() {
    let stelline = document.querySelectorAll(".stellineFeedback");
    stelline.forEach(function(stella) {
        stella.addEventListener("mouseover", function(e) {
            e.target.style.border = "2px solid yellow";
        });
        stella.addEventListener("mouseout", function(e) {
            e.target.style.border = "none";
        });
    });
}

cambioColore();

