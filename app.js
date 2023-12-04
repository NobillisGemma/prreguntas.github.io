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
    "question": "¿Qué es el phishing?",
    "choiceA": "Un método de pesca",
    "choiceB": "Un ataque de malware",
    "choiceC": "Una técnica de suplantación de identidad en línea",
    "choiceD": "Un tipo de virus informático",
    "correct": "C"
  },
  {
    "question": "¿Cuál de las siguientes acciones constituye un delito cibernético?",
    "choiceA": "Actualizar el software regularmente",
    "choiceB": "Acceder a una cuenta en línea sin permiso",
    "choiceC": "Utilizar contraseñas fuertes",
    "choiceD": "Mantener un cortafuegos",
    "correct": "B"
  },
  {
    "question": "¿Qué es el ransomware?",
    "choiceA": "Un tipo de antivirus",
    "choiceB": "Un ataque de secuestro de datos",
    "choiceC": "Una técnica de seguridad informática",
    "choiceD": "Un protocolo de red",
    "correct": "B"
  },
  {
    "question": "¿Qué significa IoT en el contexto de la ciberseguridad?",
    "choiceA": "Internet of Things",
    "choiceB": "Input/Output Technology",
    "choiceC": "Intranet of Threats",
    "choiceD": "Information on Trends",
    "correct": "A"
  },
  {
    "question": "¿Cuál es el propósito principal de un ataque de denegación de servicio (DDoS)?",
    "choiceA": "Robar información confidencial",
    "choiceB": "Desactivar un sitio web o servicio",
    "choiceC": "Enviar correos electrónicos no deseados",
    "choiceD": "Crear copias de seguridad",
    "correct": "B"
  },
  {
    "question": "¿Qué es un keylogger?",
    "choiceA": "Un software antivirus",
    "choiceB": "Un dispositivo de entrada",
    "choiceC": "Un tipo de malware que registra pulsaciones de teclas",
    "choiceD": "Una técnica de autenticación",
    "correct": "C"
  },
  {
    "question": "¿Cuál de las siguientes acciones protege mejor contra el robo de identidad en línea?",
    "choiceA": "Compartir contraseñas",
    "choiceB": "Utilizar autenticación de dos factores",
    "choiceC": "Guardar contraseñas en el navegador",
    "choiceD": "Usar la misma contraseña para múltiples cuentas",
    "correct": "B"
  },
  {
    "question": "¿Qué es un firewall?",
    "choiceA": "Un programa de piratería",
    "choiceB": "Una barrera física",
    "choiceC": "Un sistema de prevención de intrusiones",
    "choiceD": "Una barrera de seguridad en red",
    "correct": "D"
  },
  {
    "question": "¿Cuál es el propósito de un software antivirus?",
    "choiceA": "Proteger contra virus y malware",
    "choiceB": "Optimizar el rendimiento del sistema",
    "choiceC": "Controlar la temperatura del hardware",
    "choiceD": "Crear contraseñas fuertes",
    "correct": "A"
  },
  {
    "question": "¿Qué es el hacking ético?",
    "choiceA": "Acceder ilegalmente a sistemas",
    "choiceB": "Realizar pruebas de seguridad autorizadas",
    "choiceC": "Distribuir malware",
    "choiceD": "Suplantación de identidad",
    "correct": "B"
  },
  {
    "question": "¿Cuál de las siguientes es una medida de seguridad efectiva para proteger datos en línea?",
    "choiceA": "Mantener contraseñas en un archivo de texto",
    "choiceB": "Utilizar una conexión Wi-Fi no segura",
    "choiceC": "Cifrar la comunicación",
    "choiceD": "Compartir información personal en redes sociales",
    "correct": "C"
  },
  {
    "question": "¿Qué es un ataque de ingeniería social?",
    "choiceA": "Un ataque físico a una infraestructura",
    "choiceB": "Un ataque que utiliza la fuerza bruta",
    "choiceC": "Una técnica de manipulación psicológica para obtener información",
    "choiceD": "Un ataque de piratería informática",
    "correct": "C"
  },
  {
    "question": "¿Qué es el malware?",
    "choiceA": "Hardware malicioso",
    "choiceB": "Software malicioso",
    "choiceC": "Una técnica de seguridad",
    "choiceD": "Una red segura",
    "correct": "B"
  },
  {
    "question": "¿Cuál de las siguientes es una práctica segura al navegar por internet?",
    "choiceA": "Hacer clic en enlaces sospechosos",
    "choiceB": "Compartir contraseñas por correo electrónico",
    "choiceC": "Actualizar regularmente el software de seguridad",
    "choiceD": "Utilizar contraseñas débiles",
    "correct": "C"
  },
  {
    "question": "¿Qué es el spoofing de correo electrónico?",
    "choiceA": "Enviar correos electrónicos no deseados",
    "choiceB": "Suplantación de identidad para engañar al destinatario",
    "choiceC": "Crear copias de seguridad de correos electrónicos",
    "choiceD": "Recibir correos electrónicos fraudulentos",
    "correct": "B"
  },
  {
    "question": "¿Cuál de las siguientes es una forma de protegerse contra el malware?",
    "choiceA": "Desactivar el software antivirus",
    "choiceB": "Descargar archivos de fuentes desconocidas",
    "choiceC": "Mantener el software actualizado",
    "choiceD": "Usar la misma contraseña para todo",
    "correct": "C"
  },
  {
    "question": "¿Qué es el robo de identidad?",
    "choiceA": "Acceder a cuentas en línea sin permiso",
    "choiceB": "Utilizar contraseñas fuertes",
    "choiceC": "Hacer copias de seguridad de datos personales",
    "choiceD": "Suplantar la identidad de otra persona",
    "correct": "D"
  },
  {
    "question": "¿Cuál es la función principal de un cortafuegos?",
    "choiceA": "Proteger contra virus",
    "choiceB": "Controlar el acceso a la red",
    "choiceC": "Optimizar el rendimiento del sistema",
    "choiceD": "Actualizar software automáticamente",
    "correct": "B"
  },
  {
    "question": "¿Qué es el secuestro de cuenta?",
    "choiceA": "Cerrar sesión automáticamente",
    "choiceB": "Robar información financiera",
    "choiceC": "Tomar el control de una cuenta en línea",
    "choiceD": "Desactivar la autenticación de dos factores",
    "correct": "C"
  }
]

// Extra variables

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let count = 0;
const questionTime = 60; // 20s

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
  count = 0;
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
  myVar = setTimeout(showPage, 15000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
}
