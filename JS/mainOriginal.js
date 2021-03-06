(function () {
    function buildQuiz() {
        // variable to store the HTML output
        const output = [];

        // for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) => {

                // variable to store the list of possible answers
                const answers = [];

                // and for each available answer...
                for (letter in currentQuestion.answers) {

                    // ...add an HTML radio button
                    answers.push(
                        `<label>
              <input type="radio" name="question${questionNumber}" value="${letter}">
              ${letter} :
              ${currentQuestion.answers[letter]}
            </label>`
                    );
                }

                // add this question and its answers to the output
                output.push(
                    `<div class="question"> ${currentQuestion.question} </div>
          <div class="answers"> ${answers.join('')} </div>`
                );
            }
        );

        // finally combine our output list into one string of HTML and put it on the page
        quizContainer.innerHTML = output.join('');
    }

    function showResults() {

        // gather answer containers from our quiz
        const answerContainers = quizContainer.querySelectorAll('.answers');

        // keep track of user's answers
        let numCorrect = 0;

        // for each question...
        myQuestions.forEach((currentQuestion, questionNumber) => {

            // find selected answer
            const answerContainer = answerContainers[questionNumber];
            const selector = `input[name=question${questionNumber}]:checked`;
            const userAnswer = (answerContainer.querySelector(selector) || {}).value;

            // if answer is correct
            if (userAnswer === currentQuestion.correctAnswer) {
                // add to the number of correct answers
                numCorrect++;

                // color the answers green
                answerContainers[questionNumber].style.color = 'lightgreen';
            }
            // if answer wrong or unanswered
            else {
                // color the answers red
                answerContainers[questionNumber].style.color = 'red';
            }
        });

        // show number of correct answers out of total questions
        resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }

    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('results');
    const submitButton = document.getElementById('submit');
    const myQuestions = [
        {
            question: "What are the advantages of using Javascript?",
            answers: {
                a: "Immediate feedback to visitors",
                b: "Increased interactivity",
                c: "Less server interaction",
                d: "All of the above"
            },
            correctAnswer: "d"
        },
        {
            question: "Which of the following function of String object creates a string to be displayed as bold as if it were in a b tag?",
            answers: {
                a: "anchor()",
                b: "big()",
                c: "blink()",
                d: "bold()"
            },
            correctAnswer: "d"
        },
        {
            question: "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
            answers: {
                a: "location()",
                b: "getIndex()",
                c: "indexOf()",
                d: "None of the above"
            },
            correctAnswer: "c"
        },
        {
            question: "How is a for statement different from a for each statement?",
            answers: {
                a: "only a for statement uses a callback function.",
                b: "A for statement is generic, but a forEach statement can be used only with an array.",
                c: "Only a forEach statement lets you specify your own iterator.",
                d: "A forEach statement is generic, but a for statement can be used only with an array."
            },
            correctAnswer: "b"
        },
        {
            question: "How does a function create closure?",
            answers: {
                a: "It reloads the document whenever the value changes.",
                b: "It returns a reference to a variable in its parent scope.",
                c: "It completes execution without returning.",
                d: "It copies a local variable to the global scope"
            },
            correctAnswer: "b"
        }
    ];

    buildQuiz();

    // Event listeners
    submitButton.addEventListener('click', showResults);
})();