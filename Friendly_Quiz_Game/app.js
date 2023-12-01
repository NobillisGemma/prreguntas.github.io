//----------------------- G O O D   L U C K -------------------------------//

// select all elements by id
const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const choiceD = document.getElementById("D");
const counter = document.getElementById("counter");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

// create questions
let questions = [
  {
    question: "¿Quién es él?",
    imgSrc: "Stuffs/img/dog.gif",
    choiceA: "Jake",
    choiceB: "DogMan",
    choiceC: "Finn",
    choiceD: "Dalton",
    correct: "A",
  },
  {
    question: "Tenía 100 flores. Lamentablemente, todas menos 10 murieron. ¿Cuántas quedan?",
    imgSrc: "Stuffs/img/flowers.gif",
    choiceA: "10",
    choiceB: "90",
    choiceC: "0",
    choiceD: "Estás bromeando",
    correct: "A",
  },
  {
    question: "¿Cuál es el color más común del papel higiénico en Francia?",
    imgSrc: "Stuffs/img/zero.gif",
    choiceA: "Rosa",
    choiceB: "Blanco",
    choiceC: "Humo Blanco",
    choiceD: "Negro",
    correct: "A",
  },
  {
    question: "¿Qué sube pero nunca baja?",
    imgSrc: "Stuffs/img/trick.gif",
    choiceA: "Amor",
    choiceB: "Honestidad",
    choiceC: "Edad",
    choiceD: "Sueño",
    correct: "C",
  },
  {
    question: "¿Cuál es el nombre real de Lord Voldemort?",
    imgSrc: "Stuffs/img/doo.gif",
    choiceA: "Tom Marvolo Riddle",
    choiceB: "Tom Marvilo Riddle",
    choiceC: "Tom Marvin Riddle",
    choiceD: "Tom Ravolo Riddle",
    correct: "C",
  },
  {
    question: "¿Quién es Mojo Jojo?",
    imgSrc: "Stuffs/img/mojo.png",
    choiceA: "Científico loco",
    choiceB: "Mono",
    choiceC: "Chimpancé Genio",
    choiceD: "Malvado",
    correct: "C",
  },
  {
    question: "¿Cuál era el nombre completo de Tom?",
    imgSrc: "Stuffs/img/cat.png",
    choiceA: "Thomas Cat",
    choiceB: "Cat Tom",
    choiceC: "Tommy",
    choiceD: "Tom",
    correct: "A",
  },
  {
    question: "¿Cuál es el hobby de Oggy?",
    imgSrc: "Stuffs/img/oggy.png",
    choiceA: "Ver televisión",
    choiceB: "Leer el periódico",
    choiceC: "Comer Hotdogs",
    choiceD: "Dormir",
    correct: "A",
  },
  {
    question: "¿Quién fue el primero entre Shinzo y Shishimaru en aparecer en el programa?",
    imgSrc: "Stuffs/img/hatori.png",
    choiceA: "Shinzo",
    choiceB: "Shishimaru",
    choiceC: "Tomako",
    choiceD: "Nobita",
    correct: "B",
  },
  {
    question: "¿Cuál de estas afirmaciones es correcta?",
    imgSrc: "Stuffs/img/doraemon.gif",
    choiceA: "Doraemon es un perrorobot",
    choiceB: "Doraemon es un gatorobot",
    choiceC: "Doraemon quiere a Sizuka",
    choiceD: "Ninguna de estas",
    correct: "B",
  },
  {
    question: "¿Cuántos años tiene Pikachu en 2020?",
    imgSrc: "Stuffs/img/pikachu.gif",
    choiceA: "20 años",
    choiceB: "19 años",
    choiceC: "12 años",
    choiceD: "5 años",
    correct: "A",
  },
  {
    question: "¿Cuál es la película de mayor recaudación en taquilla de todos los tiempos?",
    imgSrc: "Stuffs/img/master.gif",
    choiceA: "Parasite",
    choiceB: "Horns",
    choiceC: "Titanic",
    choiceD: "Avengers: Endgame",
    correct: "D",
  },
  {
    question: "¿Cómo podría un hombre salir afuera bajo la lluvia sin protección y no mojarse el cabello?",
    imgSrc: "Stuffs/img/emoji.gif",
    choiceA: "Estaba loco",
    choiceB: "No era un hombre",
    choiceC: "Era SpiderMan",
    choiceD: "Estaba calvo",
    correct: "D",
  },
  {
    question: "¿Cuántos hermanos tiene Ricardo Milos?",
    imgSrc: "Stuffs/img/ricardo.gif",
    choiceA: "No tiene hermanos",
    choiceB: "Tiene un hermano gemelo",
    choiceC: "Tiene un hermano Nigga",
    choiceD: "100",
    correct: "B",
  },
  {
    question: "En la serie Johnny Bravo, ¿de qué color es el cabello de Johnny?",
    imgSrc: "Stuffs/img/bravo.png",
    choiceA: "Rubio",
    choiceB: "Castaño",
    choiceC: "Rojo amarillo",
    choiceD: "Amarillo brillante",
    correct: "A",
  },
  {
    question: "¿Te enamoras de las chicas?",
    imgSrc: "Stuffs/img/girl.png",
    choiceA: "Sí",
    choiceB: "Claro",
    choiceC: "Seguramente",
    choiceD: "Sí",
    correct: "C",
  },
  {
    question: "¿Puedes adivinar a este Alien?",
    imgSrc: "Stuffs/img/ben10.png",
    choiceA: "Overflow",
    choiceB: "Swampfire",
    choiceC: "Wildvine",
    choiceD: "Heatblast",
    correct: "B",
  },
  {
    question: "Algunos meses tienen 31 días, otros tienen 30 días, ¿pero cuántos tienen 28 días?",
    imgSrc: "Stuffs/img/0.gif",
    choiceA: "Todos los meses",
    choiceB: "Febrero",
    choiceC: "2 de febrero cada 10 años",
    choiceD: "Ninguno de estos",
    correct: "A",
  },
  {
    question: "4 / 4 * (4 + 4 - 4 -4)?",
    imgSrc: "Stuffs/img/frog.gif",
    choiceA: "4",
    choiceB: "LOl",
    choiceC: "0",
    choiceD: "1",
    correct: "C",
  },
  {
    question: "¿Quién es el mejor amigo de Mr. Bean?",
    imgSrc: "Stuffs/img/bean.gif",
    choiceA: "Teddy",
    choiceB: "Tedy",
    choiceC: "Tiddy",
    choiceD: "Tommy",
    correct: "A",
  }  
];

// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 20; // 20s

let TIMER;
let score = 0;

// render a question
function renderQuestion() {
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question + "</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc + ">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}

start.addEventListener("click", startQuiz);

// start quiz
function startQuiz() {
  var music = new Audio();
  music.src = "Stuffs/music/Easy song.mp3";
  music.play();
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter, 1000); // 1000ms = 1s
}

// render progress
function renderProgress() {
  for (let qIndex = 0; qIndex <= lastQuestion; qIndex++) {
    progress.innerHTML += "<div class='prog' id=" + qIndex + "></div>";
  }
}

// counter render

function renderCounter() {
  if (count <= questionTime) {
    counter.innerHTML = count;

    count++;
  } else {
    count = 0;
    // change progress color to red
    answerIsWrong();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
  }
}

// checkAnwer

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correct) {
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else {
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  count = -10;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
    clearInterval(TIMER);
    scoreRender();
  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
  var music = new Audio();
  music.src = "Stuffs/music/yeah.mp3";
  music.play();
}

// answer is Wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
  var music = new Audio();
  music.src = "Stuffs/music/Huh.mp3";
  music.play();
}

// score render
function scoreRender() {
  scoreDiv.style.display = "block";
  var music = new Audio();
  music.src = "Stuffs/music/GameOver.mp3";
  music.play();

  // calculate the amount of question percent answered by the user
  const scorePerCent = Math.round((100 * score) / questions.length);

  // choose the image based on the scorePerCent
  let img =
    scorePerCent >= 80
      ? "Stuffs/img/5.png"
      : scorePerCent >= 60
      ? "Stuffs/img/4.png"
      : scorePerCent >= 40
      ? "Stuffs/img/3.png"
      : scorePerCent >= 20
      ? "Stuffs/img/2.png"
      : "Stuffs/img/1.png";

  scoreDiv.innerHTML = "<img src=" + img + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent + "%</p>";
}

//////////////////////////////////////////////////////
var myVar;

function myLoader() {
  myVar = setTimeout(showPage, 10000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
