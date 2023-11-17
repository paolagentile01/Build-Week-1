/*let timeLeft = 10; 
let timerId = setInterval(countdown, 1000);
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
    } else {
        console.log(timeLeft + ' seconds');
        timeLeft--;
    }
}


(function () {
    var canvas  = document.getElementById('stopwatch'),
        ctx     = canvas.getContext('2d'),
        digital = document.getElementById('time'),
        reset   = document.getElementById('reset'), 
        timerOn = false,
        second  = 2 * Math.PI / 40,
        start   = 1.5*Math.PI,
        t = 0,
        animation;
  
    var draw = function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineWidth = 30;
      ctx.strokeStyle = '#3399cc';
      ctx.beginPath();
      ctx.arc(100, 100, 80,start, start + second * t);
      ctx.stroke();
      t = t >= 40 ? 0: t + 0.05; 
    }
    
    canvas.addEventListener('click', function () {
      if (!timerOn) {
        timerOn = true;
        animation = setInterval(function () {
          draw();
          digital.innerHTML = Math.floor(t);
        }, 30);
      }
      else {
        timerOn = false;
        clearInterval(animation);
      }
  
    });
    reset.addEventListener('click', function () {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      digital.innerHTML = 0;
      timerOn = false;
      clearInterval(animation);
      t = 0;
    });
  })();
*/

const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: [
      "Ice Cream Sandwich",
      "Jelly Bean",
      "Marshmallow",
    ],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"],
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"],
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"],
  },
];

let seconds = document.getElementById("time");
let score = 0;
let timeLeft = 10;
let domanda = document.getElementById("domanda");
let risposte = document.querySelectorAll("span");
let blocco = document.querySelectorAll(".blocco");
let avanzamentoDomande = document.getElementById("avanzamento");

let index = 0;
let indice = 1;
let timerId;

function showQuiz() {
  index = 0;
  indice = 1;
  intervalStart()
  showQuestions();
}

function intervalStart() {
  timerId = setInterval(countdown, 1000);
}

function countdown() {
  if (timeLeft === -1) {
    if (index >= questions.length) {
      clearInterval(timerId);
      result();
    } else {
      timeLeft = 10;
      countdown();
      showQuestions();
    }
  } else {
    seconds.innerText = timeLeft;
    timeLeft--;
  }
}

function showQuestions() {
  numberQuestions();
  domanda.innerText = questions[index].question;
  showAnswers();
}

function showAnswers() {
  let allAnswers = questions[index].incorrect_answers.concat(
    questions[index].correct_answer
  );
  let arrayShuffle = shuffle(allAnswers);
  if (arrayShuffle.length < 3) {
    blocco.forEach((bottone) => {
      bottone.style.display = "none";
    });
  } else {
    blocco.forEach((bottone) => {
      bottone.style.display = "";
    });
  }
  for (let i = 0; i < arrayShuffle.length; i++) {
    risposte[i].innerText = arrayShuffle[i];
  }
  index++;
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function numberQuestions() {
  avanzamentoDomande.innerText = indice;
  indice++;
}

function result() {
  window.location.href = "indexPageResult.html";
  console.log("Quiz completed! Score: " + score);
}
showQuiz();
/* ho dato un valore a score perché non arriva nulla, ma adesso ho collegato la variable score con la page 3 ... ESPI*/
score=50;
console.log(score)
window.localStorage.setItem("scorePage2", score);

console.log(window.localStorage.getItem('scorePage2'));
// Store