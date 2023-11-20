let resultTest = localStorage.getItem("scorePage2");
let failed = "hai fallito";
let el = document.querySelector(".text");


function progressBar() {
  let strokeVal = (6.76 * 2)
  let x = document.querySelector(".outer");
  x.style.strokeDasharray = resultTest * strokeVal + "999";
}

function msgCongratulation() {
  let mssgCongraT1 = document.querySelector("#text1");
  mssgCongraT1.innerText = "Congratulation !";
  let mssgCongraT2 = document.querySelector("#text2");
  mssgCongraT2.innerText = "You passed the exam.";
  let mssgCongraT3 = document.querySelector("#text3");
  mssgCongraT3.innerText = "Well'send you the certificate in few minutes.";
  let mssgCongraT4 = document.querySelector("#text4");
  mssgCongraT4.innerText = "Check your email (including promotions / span folder)";
}

function msgFailed() {
  let mssgFailedT1 = document.querySelector("#text1");
  mssgFailedT1.innerText = "Failed!";
  let mssgFailedT2 = document.querySelector("#text2");
  mssgFailedT2.innerText = "😢";
  let mssgFailedT3 = document.querySelector("#text3");
  mssgFailedT3.innerText = "We are sorry";
  let mssgFailedT4 = document.querySelector("#text4");
  mssgFailedT4.innerText = "next time it will be better";
}

function message() {
  if (resultTest > 60) {
    return msgCongratulation();
  } else {
    return msgFailed();
  }
}

function percentage() {
  let scoreCorrect = document.querySelector("#correct-percentage");
  scoreCorrect.innerHTML = resultTest + "%";
  let scoreWrong = document.querySelector("#wrong-percentage");
  scoreWrong.innerHTML = 100 - resultTest + "%";
}

function scoreQuestions() {
  numberQuestions = 10;
  total = resultTest / numberQuestions;
  let scoreCorrectQuestions = document.querySelector("#correctQuestions");
  scoreCorrectQuestions.innerHTML = total + `/${numberQuestions} questions`;
  let scoreWrongQuestions = document.querySelector("#wrongQuestions");
  scoreWrongQuestions.innerHTML =
    numberQuestions - total + `/${numberQuestions} questions`;
}
progressBar();
message();
percentage();
scoreQuestions();

