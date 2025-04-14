const quizData = [
    {
      question: "1Q What belongs to you but others use it more than you do? ",
      options: ["mobile", "your name", "clothes ", "your shoes"],
      answer: "your name"
    },
    {
      question: "2Q Anti-clockwise moves in which direction?",
      options: ["south", "east", "west", "north"],
      answer: "south"
    },
    {
      question: " 3Q What is the world's smallest continent?",
      options: ["australia", "south america", "africa", "antratica"],
      answer: "australia"
    },
    {
      question: "4Q In what year did the Titanic sink?",
      options: ["1918", "1912", "1915", "1914"],
      answer: "1912"
    },
    {
      question: "5Q how many number contains in dubai phone numbers",
      options: ["6", "7", "8", "5"],
      answer: "7"
    },
    {
      question: "6Q how many colors are there in brazilian flag?",
      options: ["4", "3", "2", "5"],
      answer: "4"
    },
    {
      question: "7Q What is the largest desert in the world",
      options: ["Margo Desert", "Sahara Desert", "antratica Desert", "Arabian Desert"],
      answer: "antratica"
    },
    {
      question: "8Q How many continents are there?",
      options: ["5", "6", "7", "8"],
      answer: "7"
    },
    {
      question: "9Q Which organ pumps blood?",
      options: ["Liver", "Heart", "Lungs", "Kidney"],
      answer: "Heart"
    },
    {
      question: " Who wrote the national song of India",
      options: ["Rabindranath Tagore", "Subhas Chandra Bose ", "	Bankim Chandra Chatterjee", "Vallabhbhai Patel"],
      answer: "Bankim Chandra Chatterjee"
    }
  ];

  let shuffledQuestions = [];
  let currentQuestion = 0;
  let score = 0;
  let timeLeft = 60;
  let timer;

  function shuffle(array) {
    return array.sort(() => Math.random() - 0.5);
  }

  function loadQuestion() {
    clearInterval(timer);
    if (currentQuestion >= shuffledQuestions.length) {
      document.getElementById("quizContainer").style.display = "none";
      document.getElementById("result").textContent = `Your score: ${score}/${shuffledQuestions.length}`;
      document.getElementById("restartBtn").style.display = "inline-block";
      document.getElementById("timer").style.display = "none";
      return;
    }

    const current = shuffledQuestions[currentQuestion];
    document.getElementById("question").textContent = current.question;
    const optionsHtml = current.options.map(opt => `
      <label>
        <input type="radio" name="option" value="${opt}"> ${opt}
      </label>
    `).join('');
    document.getElementById("options").innerHTML = optionsHtml;

    timeLeft = 60;
    document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
      timeLeft--;
      document.getElementById("timer").textContent = `Time Left: ${timeLeft}s`;
      if (timeLeft === 0) {
        submitAnswer(); // Auto-submit on timeout
      }
    }, 1000);
  }

  function submitAnswer() {
    clearInterval(timer);
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected && selected.value === shuffledQuestions[currentQuestion].answer) {
      score++;
    }
    currentQuestion++;
    loadQuestion();
  }

  function restartQuiz() {
    shuffledQuestions = shuffle([...quizData]); // new random order
    currentQuestion = 0;
    score = 0;
    document.getElementById("result").textContent = '';
    document.getElementById("restartBtn").style.display = "none";
    document.getElementById("quizContainer").style.display = "block";
    document.getElementById("timer").style.display = "block";
    loadQuestion();
  }

  // Start quiz on load
  window.onload = () => {
    restartQuiz();
  };