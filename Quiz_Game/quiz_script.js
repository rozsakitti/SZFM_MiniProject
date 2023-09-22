/*
document.querySelector('.start-button').addEventListener('click', function() {
    displayRandomQuestion();
});
*/
document.querySelector('.start-button').addEventListener('click', function() {
    displayModeButtons();
});

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
    easyButton.addEventListener('click', function() {
        startEasyGame(); // Itt hivjuk majd meg a Könnyű játékmódot.
        hideModeButtons();
    });

    var hardButton = document.createElement('button');
    hardButton.classList.add('mode-button', 'hard-mode-button');
    hardButton.textContent = 'Nehéz';
    hardButton.addEventListener('click', function() {
        startHardGame(); // Itt hivjuk majd meg a Nehéz játékmódot.
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
    displayRandomQuestion();

}

function startHardGame() {
    //Itt történik majd a Nehéz játékmód kezelése.
}

function exit() {
    var titleBox = document.querySelector('.quiz-head');
    titleBox.style.display = 'block'; // Visszaállítjuk a címsor megjelenítését

    var startButton = document.querySelector('.start-button');
    startButton.style.display = 'block'; // Visszaállítjuk a "Start" gomb megjelenítését

    var questionBox = document.getElementById('question-box');
    if (questionBox) {
        questionBox.remove(); // Töröljük a kérdés dobozát
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
                });
                answersContainer.appendChild(answerButton);
            });

            var correctAnswerButton = document.createElement('button');
            correctAnswerButton.classList.add('answer-button');
            correctAnswerButton.textContent = randomQuestion.correctAnswer;
            correctAnswerButton.addEventListener('click', function() {
                // Itt történik majd a helyes válasz kezelése
            });

            var exitButton = document.createElement('button');
            exitButton.classList.add('exit-button');
            exitButton.textContent = "Exit";
            exitButton.addEventListener('click', function () {
                exit();
            });

            answersContainer.appendChild(correctAnswerButton);

            questionBox.appendChild(questionTitle);
            questionBox.appendChild(answersContainer);
            questionBox.appendChild(exitButton);

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
