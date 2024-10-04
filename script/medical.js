const medicalImages = [
  { src: '../images/ecg.jpg', answer: 'ECG' },
  { src: '../images/ultrasound.jpg', answer: 'Ultrasound' },
  { src: '../images/prescription.jpg', answer: 'Prescription' },
  { src: '../images/surgery.jpg', answer: 'Surgery' },
  { src: '../images/doctor.jpg', answer: 'Doctor' },
  { src: '../images/stethoscope.jpg', answer: 'Stethoscope' },
  { src: '../images/xray.jpg', answer: 'X-ray' },
  { src: '../images/ct-scan.jpg', answer: 'CT-Scan' },
  { src: '../images/injection.jpg', answer: 'Injection' }
];

let currentQuestionIndex = 0;
const medicalImage = document.getElementById('medicalImage');
const statusDisplay = document.getElementById('status');
const synth = window.speechSynthesis;

document.getElementById('startBtn').addEventListener('click', startQuiz);

function startQuiz() {
  currentQuestionIndex = 0;
  showQuestion();
}

function showQuestion() {
  if (currentQuestionIndex < medicalImages.length) {
      const currentImage = medicalImages[currentQuestionIndex];
      medicalImage.src = currentImage.src;
      statusDisplay.innerText = "What is this image?";

      // Trainer speaks the question
      speak(`What is this image?`);

      startVoiceRecognition();
  } else {
      statusDisplay.innerText = "Quiz complete! Thanks for participating.";
      speak("Quiz complete! Thank you for participating.");
  }
}

function startVoiceRecognition() {
  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = 'en-US';
  recognition.start();

  recognition.onresult = function(event) {
      const userAnswer = event.results[0][0].transcript.toLowerCase().trim();
      checkAnswer(userAnswer);
  };

  recognition.onerror = function(event) {
      statusDisplay.innerText = "Error in voice recognition. Please try again.";
      console.error("Speech recognition error:", event.error);
  };
}

function checkAnswer(userAnswer) {
  const correctAnswer = medicalImages[currentQuestionIndex].answer.toLowerCase();
  
  if (userAnswer.includes(correctAnswer)) {
      statusDisplay.innerText = "Correct! Moving to the next question.";
      speak("Correct! Moving to the next question.");
  } else {
      statusDisplay.innerText = `Incorrect! The correct answer was ${correctAnswer}.`;
      speak(`Incorrect! The correct answer was ${correctAnswer}.`);
  }

  currentQuestionIndex++;
  setTimeout(showQuestion, 3000);
}

// Function to speak out text
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  synth.speak(utterance);
}
