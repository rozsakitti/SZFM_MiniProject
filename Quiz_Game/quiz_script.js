document.querySelector('.start-button').addEventListener('click', function() {
    displayModeButtons();
});

var highlightedButton = null;
var checkButton;
var answerButtons = [];
var nextButton
var maxScore;
var score = 0;
var scoreDisplay;
var maxQuesion = 0;
var questionCounter = 0;

function displayModeButtons() {

    var titleBox = document.querySelector('.quiz-head');
    titleBox.style.display = 'none';

    var startButton = document.querySelector('.start-button');
    startButton.style.display = 'none';

    // A Könnyű és nehéz fokozatnak megcsináljuk a gombjait.
    var modeButtons = document.createElement('div');
    modeButtons.id = 'mode-buttons';

    var easyButton = document.createElement('button');
    easyButton.classList.add('mode-button', 'easy-mode-button');
    easyButton.textContent = 'Könnyű';
    easyButton.addEventListener('click', function () {
        // Itt hivjuk majd meg a Könnyű játékmódot.

        startEasyGame();
        hideModeButtons();
    });

    var hardButton = document.createElement('button');
    hardButton.classList.add('mode-button', 'hard-mode-button');
    hardButton.textContent = 'Nehéz';
    hardButton.addEventListener('click', function () {
        // Itt hivjuk majd meg a Nehéz játékmódot.
        startHardGame(); 
        hideModeButtons();
    });

    modeButtons.appendChild(easyButton);
    modeButtons.appendChild(hardButton);

    var quizContainer = document.querySelector('.quiz-container');
    var existingModeButtons = document.getElementById('mode-buttons');

    if (existingModeButtons) {
        quizContainer.replaceChild(modeButtons, existingModeButtons);
    } else {
        quizContainer.appendChild(modeButtons);
    }
}

function hideModeButtons() {
    var modeButtons = document.getElementById('mode-buttons');
    modeButtons.style.display = 'none';
}

function startEasyGame() {
    //Itt történik majd a Könnyű játékmód kezelése.
    maxScore = 5;
    maxQuesion = 5;
    displayRandomQuestion();
}

function startHardGame() {
    //Itt történik majd a Nehéz játékmód kezelése.
    maxScore = 10;
    maxQuesion = 10;
    displayRandomQuestion();
}

function exit() {
    score = 0;
    maxScore = 0;
    maxQuesion = 0;
    questionCounter = 0;

    var titleBox = document.querySelector('.quiz-head');
    titleBox.style.display = 'block'; // Visszaállítjuk a címsor megjelenítését

    var startButton = document.querySelector('.start-button');
    startButton.style.display = 'block'; // Visszaállítjuk a "Start" gomb megjelenítését

    var questionBox = document.getElementById('question-box');
    if (questionBox) {
        questionBox.remove(); // Töröljük a kérdés dobozát
    }

    var finalScoreDisplay = document.getElementById('final-score-display');
    if (finalScoreDisplay) {
        finalScoreDisplay.remove(); // Töröljük az összegző felületet
    }

    var exitButton = document.querySelector('.exit-button');
    if (exitButton) {
        exitButton.remove(); // Töröljük az exit gombot
    }
}

function displayRandomQuestion() {
    // Betöltjük a kérdéseket a JSON fájlból
    fetch('kerdesek.json')
        .then(response => response.json())
        .then(data => {
            // Véletlenszerűen választunk egy kérdést
            const randomIndex = Math.floor(Math.random() * data.length);
            const randomQuestion = data[randomIndex];

            // Elrejtjük a címsorokat és a Start gombot
            var titleBox = document.querySelector('.quiz-head');
            titleBox.style.display = 'none';

            var startButton = document.querySelector('.start-button');
            startButton.style.display = 'none';

            // Megjelenítjük a kérdést és válaszokat
            var questionBox = document.createElement('div');
            questionBox.id = 'question-box';

            var questionTitle = document.createElement('h1');
            questionTitle.classList.add('quiz-title');
            questionTitle.textContent = randomQuestion.question;

            var answersContainer = document.createElement('div');
            answersContainer.id = 'answers';

            // Hozzáadjuk a válaszokat a gombokhoz
            randomQuestion.wrongAnswers.forEach(function(answer) {
                var answerButton = document.createElement('button');
                answerButton.classList.add('answer-button');
                answerButton.textContent = answer;
                answerButton.addEventListener('click', function() {
                    // Itt történik majd a válasz kezelése
                    checkButton.style.display = 'block';

                    highlightedButton = document.querySelector('.highlighted-button');

                    // Ha van kiemelt gomb, akkor levesszük róla a kiemelést
                    if (highlightedButton) {
                        highlightedButton.classList.remove('highlighted-button');
                    }

                    // Kiemeljük az aktuális gombot
                    answerButton.classList.add('highlighted-button');
                    highlightedButton = answerButton;
                });
                answersContainer.appendChild(answerButton);
                answerButtons.push(answerButton);
            });

            let correctAnswerButton = document.createElement('button');
            correctAnswerButton.classList.add('answer-button');
            correctAnswerButton.textContent = randomQuestion.correctAnswer;
            correctAnswerButton.addEventListener('click', function() {
                // Itt történik majd a helyes válasz kezelése
                checkButton.style.display = 'block';

                highlightedButton = document.querySelector('.highlighted-button');

                // Ha van kiemelt gomb, akkor levesszük róla a kiemelést
                if (highlightedButton) {
                    highlightedButton.classList.remove('highlighted-button');
                }

                // Kiemeljük az aktuális gombot
                correctAnswerButton.classList.add('highlighted-button');
                highlightedButton = correctAnswerButton;
            });
            answerButtons.push(correctAnswerButton);

            var exitButton = document.createElement('button');
            exitButton.classList.add('exit-button');
            exitButton.textContent = "Exit";
            exitButton.addEventListener('click', function () {
                exit();
            });

            checkButton = document.createElement('button');
            checkButton.classList.add('check-button');
            checkButton.textContent = "Ellenőriz";
            checkButton.style.display = 'none'; // Alapértelmezés szerint elrejtjük az "Ellenőriz" gombot
            checkButton.addEventListener('click', function () {
                checkAnswer(correctAnswerButton, highlightedButton);

                answerButtons.forEach(function (answerButton) {
                    answerButton.disabled = true;
                });
            });

            nextButton = document.createElement('button');
            nextButton.classList.add('check-button');
            if (questionCounter !== maxQuesion - 1) {
                nextButton.textContent = "Következő";
            } else {
                nextButton.textContent = "Vége";
            }
            nextButton.style.display = 'none'; // Alapértelmezés szerint elrejtjük a "Következő" gombot
            nextButton.addEventListener('click', function () {
                nextQuestion();
            });

            scoreDisplay = document.createElement('div');
            scoreDisplay.id = 'score-display';
            scoreDisplay.style.display = 'none';

            answersContainer.appendChild(correctAnswerButton);

            questionBox.appendChild(questionTitle);
            questionBox.appendChild(answersContainer);
            questionBox.appendChild(exitButton);
            questionBox.appendChild(checkButton);
            questionBox.appendChild(scoreDisplay);
            questionBox.appendChild(nextButton);

            var quizContainer = document.querySelector('.quiz-container');
            var existingQuestionBox = document.getElementById('question-box');

            if (existingQuestionBox) {
                quizContainer.replaceChild(questionBox, existingQuestionBox);
            } else {
                quizContainer.appendChild(questionBox);
            }
        })
        .catch(error => console.error('Hiba történt:', error));
}

function checkAnswer(correctAnswer, selectedButton) {
    questionCounter += 1;
    if (selectedButton === correctAnswer) {
        score += 1;
    }
    else {
        selectedButton.classList.remove('answer-button');
        selectedButton.classList.add('wrong-answer');

        correctAnswer.classList.add('correct-answer');
    }
    scoreDisplay.textContent = 'Pontod: ' + score + '/' + maxScore;
    scoreDisplay.style.display = 'block';
    checkButton.style.display = 'none';
    nextButton.style.display = 'block';
}

function nextQuestion() {
    if (questionCounter === maxQuesion) {
        var questionBox = document.getElementById('question-box');
        if (questionBox) {
            questionBox.style.display = 'none'; // Elrejtjük a kérdésdobozt

            var finalScoreDisplay = document.createElement('div');
            finalScoreDisplay.id = 'final-score-display';
            finalScoreDisplay.textContent = 'Végső pont: ' + score + '/' + maxScore;
            finalScoreDisplay.classList.add('quiz-title')

            var exitButton = document.createElement('button');
            exitButton.classList.add('exit-button');
            exitButton.textContent = "Exit";
            exitButton.addEventListener('click', function () {
                exit();
            });

            var quizContainer = document.querySelector('.quiz-container');
            quizContainer.appendChild(finalScoreDisplay);
            quizContainer.appendChild(exitButton);
        }
    } else {
        displayRandomQuestion();
    }

    // Következő gomb elrejtése
    nextButton.style.display = 'none';
}
