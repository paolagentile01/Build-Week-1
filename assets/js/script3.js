let resultTest = 66.7;
let failed = "hai fallito";
let congratulazioni = "Congratulation !";

function progressBar(resultVal, totalPercentageVal) {
  let strokeVal = (5.7 * 200) / totalPercentageVal;
  let x = document.querySelector(".outer");
  x.style.strokeDasharray = resultVal * strokeVal + " 999";
}
progressBar(resultTest, 100);
let el = document.querySelector(".text");
function message(result) {
  if (result > 60) {
    return (el.innerHTML = `${congratulazioni}`);
  } else {
    return (el.innerHTML = `${failed}`);
  }
}
 message(resultTest)

 function percentage(result) {
  let scoreCorrect = document.querySelector("#correct");
  scoreCorrect.innerHTML= result + '%';
  let scoreWrong = document.querySelector("#wrong");
  scoreWrong.innerHTML =( 100 - result) + '%';
 }
 percentage(resultTest)