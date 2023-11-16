/*
const box=document.getElementById("checkbox");
const link=document.getElementById("link");

box.addEventListener('change',function(){
    if(this.checked){
    link.setAttribute('href','https://www.google.com/');
    link.classList.remuve('disabled')
    }else{ link.removeAttribute("href");
    link.classList.add('disabled')}
});
*/
/*ATTENZIONE:occorre cambiare percorso allo script di html di pag 1 per agganciarlo a questo js*/
/*1)ho selezionato gli elements check-box e a dalla main page*/
const box=document.getElementById("checkboxP1");
const link=document.getElementById("linkP1");
link.classList.add('disabled');
link.removeAttribute("href",'pagina2.html');
/*ho aggiunto un  evento in ascolto al box che fa cambiare stato al link nel button.
se il box viene selezionato per accettare le condizioni viene aggiunto l'attributo href
al link e relativo link (fittizio) e viene rimossa la classe disabilita.
se il box non viene selezionato accade l'opposto*/ 
box.addEventListener('change',function(){
    if(this.checked){
    link.setAttribute('href','pagina2.html');
    link.classList.remove('disabled')
    }else{ link.removeAttribute("href",'pagina2.html');
    link.classList.add('disabled')}
});
