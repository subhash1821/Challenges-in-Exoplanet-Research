// Define levels, study points, and questions
const levels = [
    {
        title: "Level 9:Challenges in Exoplanet Research",
        studyPoints: [
            "Detecting small, Earth-like exoplanets is technically challenging.",
            "Distinguishing between the light of a star and an exoplanet can be difficult.",
            "Many exoplanets are located very far from Earth, making observations challenging.",
            "The presence of clouds can obscure the study of exoplanet atmospheres.",
            "Current technology may not be sufficient for detailed studies of distant exoplanets.",

        ],
        questions: [
            {
            question: "What is a major challenge in detecting small, Earth-like exoplanets?",
            options: ["They are too close to stars", "They are technically challenging to detect", "They have no atmosphere", "They are always in the habitable zone"],
            answer: 1
            },
            {
            question: "Why is distinguishing between a star's light and an exoplanet's light difficult?",
            options: ["Exoplanets are usually very bright", "Stars are much brighter than planets", "Planets have no light", "All planets reflect star light equally"],
            answer: 1
            },
            {
            question: "What does the distance of many exoplanets from Earth mean for researchers?",
            options: ["They can be easily observed", "Observations are challenging", "They are closer to our solar system", "They have better atmospheres"],
            answer: 1
            },
            {
            question: "How can clouds affect the study of exoplanet atmospheres?",
            options: ["They enhance the atmosphere's clarity", "They can obscure atmospheric study", "They help scientists determine composition", "They make exoplanets look bigger"],
            answer: 1
            },
            {
            question: "Why might current technology be insufficient for exoplanet research?",
            options: ["It is too advanced", "It can't observe nearby stars", "It may not allow for detailed studies of distant exoplanets", "It is only focused on our solar system"],
            answer: 2
            }
            ]
    
    }
];

// Initialize variables
let currentLevel = 0;
let currentQuestion = 0;
let score = 0;

// Start game button event listener
document.getElementById("start-button").addEventListener("click", startGame);

// Start game function
function startGame() {
    document.getElementById("start-button").style.display = "none";
    document.getElementById("level-container").style.display = "block";
    showStudyMode();
}

// Show study mode function
function showStudyMode() {
    document.getElementById("study-mode").style.display = "block";
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("level-title").innerHTML = levels[currentLevel].title;
    const studyPoints = document.getElementById("study-points");
    studyPoints.innerHTML = "";
    levels[currentLevel].studyPoints.forEach(point => {
        const li = document.createElement("li");
        li.innerHTML = point;
        studyPoints.appendChild(li);
    });
    document.getElementById("quiz-button").addEventListener("click", showQuizMode);
}

// Show quiz mode function
function showQuizMode() {
    document.getElementById("study-mode").style.display = "none";
    document.getElementById("quiz-mode").style.display = "block";
    showQuestion();
}

// Show question function
function showQuestion() {
    const question = document.getElementById("question");
    const options = document.getElementById("options");
    question.innerHTML = levels[currentLevel].questions[currentQuestion].question;
    options.innerHTML = "";
    levels[currentLevel].questions[currentQuestion].options.forEach((option, index) => {
        const li = document.createElement("li");
        li.innerHTML = option;
        li.addEventListener("click", () => {
            checkAnswer(index);
        });
        options.appendChild(li);
    });
}

// Check answer function
function checkAnswer(answer) {
    if (answer === levels[currentLevel].questions[currentQuestion].answer) {
        score++;
        document.getElementById("result").innerHTML = "Correct!";
    } else {
        document.getElementById("result").innerHTML = "Incorrect.";
    }
    currentQuestion++;
    if (currentQuestion >= levels[currentLevel].questions.length) {
        endLevel();
    } else {
        showQuestion();
    }
}

// End level function
function endLevel() {
    document.getElementById("quiz-mode").style.display = "none";
    document.getElementById("end-button-container").style.display = "block";
    document.getElementById("score-container").style.display = "block";
    document.getElementById("score").innerHTML = `Level ${currentLevel + 1} Score: ${score}/${levels[currentLevel].questions.length}`;
    document.getElementById("end-button").addEventListener("click", nextLevel);
}

// Next level function
function nextLevel() {
    currentLevel++;
    currentQuestion = 0;
    score = 0;
    if (currentLevel >= levels.length) {
        alert("Congratulations, you've completed all levels!");
    } else {
        document.getElementById("end-button-container").style.display = "none";
        document.getElementById("score-container").style.display = "none";
        showStudyMode();
    }
}