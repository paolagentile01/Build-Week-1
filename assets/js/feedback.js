
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

