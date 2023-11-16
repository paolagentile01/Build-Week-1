let resultTest = 66.7;
let congratulazioni = "Congratulation !";

function progressBar(resultVal, totalPercentageVal ) {
  let strokeVal = (5.7 * 200) / totalPercentageVal;
  let x = document.querySelector(".outer");
  x.style.strokeDasharray = resultVal * strokeVal + " 999";
  let el = document.querySelector(".text");
 el.innerHTML = `${congratulazioni}`;
}
progressBar(resultTest, 100);
