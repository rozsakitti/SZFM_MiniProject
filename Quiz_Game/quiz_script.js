document.querySelector('.start-button').addEventListener('click', function() {
    displayRandomQuestion();
});

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
            answersContainer.appendChild(correctAnswerButton);

            questionBox.appendChild(questionTitle);
            questionBox.appendChild(answersContainer);

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
