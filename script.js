// Mobile navigation
function toggleMenu() {
    const navMenu = document.getElementById("navMenu");
    navMenu.classList.toggle("active");
}


// Quiz
function checkAnswer(button, correct) {
    const result = document.getElementById("quizResult");

    if (correct) {
        result.textContent = "✅ Correct! Great job.";
        result.style.color = "green";
    } else {
        result.textContent = "❌ Incorrect. Try again!";
        result.style.color = "red";
    }
}


// Flashcard
let showingAnswer = false;

function flipCard() {
    const flashcardText = document.getElementById("flashcardText");

    if (!showingAnswer) {
        flashcardText.textContent =
            "Statistics is the science of collecting, organizing, presenting, analyzing and interpreting data.";

        showingAnswer = true;
    } else {
        flashcardText.textContent =
            "What is Statistics?";

        showingAnswer = false;
    }
}


// Study Timer
let timeLeft = 25 * 60;
let timerInterval = null;

function updateTimer() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    document.getElementById("timerDisplay").textContent =
        String(minutes).padStart(2, "0") +
        ":" +
        String(seconds).padStart(2, "0");
}

function startTimer() {

    if (timerInterval !== null) {
        return;
    }

    timerInterval = setInterval(function () {

        if (timeLeft > 0) {
            timeLeft--;
            updateTimer();
        } else {
            clearInterval(timerInterval);
            timerInterval = null;

            alert("🎉 Study session completed!");
        }

    }, 1000);
}


function resetTimer() {

    clearInterval(timerInterval);

    timerInterval = null;
    timeLeft = 25 * 60;

    updateTimer();
}


// Initialize timer
updateTimer();
