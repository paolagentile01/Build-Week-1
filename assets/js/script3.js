let resultTest = localStorage.getItem("scorePage2");
console.log(resultTest)
let failed = "hai fallito";
let el = document.querySelector(".text");
function progressBar(resultVal, totalPercentageVal) {
  let strokeVal = (5.7 * 200) / totalPercentageVal;
  let x = document.querySelector(".outer");
  x.style.strokeDasharray = resultVal * strokeVal + " 999";
}
progressBar(resultTest, 100);

function message(result) {
  if (result > 60) {
    return  mssgCongratulation();
  } else {
    return mssgFailed();
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

 function scoreQuestions(result) {
  numberQuestions = 10;
  total = result/numberQuestions;
  let scoreCorrectQuestions = document.querySelector('#correctQuestions');
  scoreCorrectQuestions.innerHTML= total + `/${numberQuestions} questions`;
 let scoreWrongQuestions = document.querySelector('#wrongQuestions');
 scoreWrongQuestions.innerHTML = ( numberQuestions - total)+ `/${numberQuestions} questions`;
 }
 scoreQuestions(resultTest);
 function mssgCongratulation() {
  let mssgCongraT1 = document.querySelector("#text1");
  mssgCongraT1.innerText = "Congratulation !";
  let mssgCongraT2 = document.querySelector("#text2");
  mssgCongraT2.innerText= "You passed the exam.";
  let mssgCongraT3 = document.querySelector("#text3")
  mssgCongraT3.innerText= "Well'send you the certificate in few minutes."
  let mssgCongraT4 = document.querySelector("#text4")
  mssgCongraT4.innerText= "Check your email (including promotions / span folder)"
}
function mssgFailed() {
  let mssgFailedT1 = document.querySelector("#text1");
  mssgFailedT1.innerText = "Failed!";
  let mssgFailedT2 = document.querySelector("#text2");
  mssgFailedT2.innerText= "😢";
  let mssgFailedT3 = document.querySelector("#text3")
  mssgFailedT3.innerText= "We are sorry"
  let mssgFailedT4 = document.querySelector("#text4")
  mssgFailedT4.innerText= "next time it will be better"
}

