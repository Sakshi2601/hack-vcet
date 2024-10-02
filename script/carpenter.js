// Initialize speech synthesis and recognition
const synth = window.speechSynthesis;
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();

let isPaused = false; // Track if reading is paused
let currentUtterance = null; // Track the current utterance

// Function to start reading the text in the selected textarea
function startReading(textAreaId) {
    stopReading(); // Stop any ongoing reading before starting a new one

    // Get the text from the specified textarea
    const text = document.getElementById(textAreaId).value;

    // Check if there's text and if speech synthesis is not already speaking
    if (synth.speaking || text.trim() === "") {
        document.getElementById('status').innerText = "No text available to read."; // Update status
        return; // Avoid starting speech if already speaking or no text is provided
    }

    // Create a new utterance for the current text
    currentUtterance = new SpeechSynthesisUtterance(text);
    currentUtterance.rate = 1; // Set speech rate
    currentUtterance.pitch = 1; // Set speech pitch

    // Start speaking
    synth.speak(currentUtterance);

    // Event listener for when speech has ended
    currentUtterance.onend = () => {
        document.getElementById('status').innerText = "Reading finished."; // Update status when done
    };

    // Event listener for handling errors
    currentUtterance.onerror = (event) => {
        console.error('SpeechSynthesisUtterance error: ', event); // Log error
        document.getElementById('status').innerText = "An error occurred while reading."; // Update status
    };

    // Update status
    document.getElementById('status').innerText = "Reading started...";
}

// Function to pause the current reading
function pauseReading() {
    if (synth.speaking && !isPaused) {
        synth.pause(); // Pause speech synthesis
        isPaused = true; // Update paused state
        document.getElementById('status').innerText = "Reading paused."; // Update status
    }
}

// Function to resume the paused reading
function resumeReading() {
    if (isPaused) {
        synth.resume(); // Resume speech synthesis
        isPaused = false; // Update paused state
        document.getElementById('status').innerText = "Reading resumed."; // Update status
    }
}

// Function to stop the current reading
function stopReading() {
    if (synth.speaking) {
        synth.cancel(); // Stop the speech synthesis
        currentUtterance = null; // Clear current utterance
        isPaused = false; // Reset paused state
        document.getElementById('status').innerText = "Reading stopped."; // Update status
    }
}

// Function to start speech recognition for dictation
function startDictation() {
    recognition.start(); // Start speech recognition
    document.getElementById('status').innerText = "Listening..."; // Update status

    // Event listener for when speech recognition results are available
    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript; // Get the transcript of the recognized speech
        const textarea = document.getElementById('text-input1');
        textarea.value += transcript + " "; // Append the transcript to the textarea
        document.getElementById('status').innerText = "Dictation finished."; // Update status
        startReading('text-input1'); // Automatically start reading the dictated text
    };

    // Event listener for handling errors
    recognition.onerror = (event) => {
        console.error('SpeechRecognition error: ', event); // Log error
        document.getElementById('status').innerText = "An error occurred during dictation."; // Update status
    };

    // Event listener for handling end of recognition
    recognition.onend = () => {
        document.getElementById('status').innerText = "Listening stopped."; // Update status
    };
}
