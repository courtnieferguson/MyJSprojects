"use strict";

(function(){
    function createTest(){
        //variable to store the html output
        const output = [];

        //for each question...
        myQuestions.forEach(
            (currentQuestion, questionNumber) =>
        {

            //variable to store list of possible answers
            const answers = [];

            //for each available answer...
            for (letter in currentQuestion.answers) {

                // ...add an html radio button
                answers.push(
                    `<label>
<input type="radio"
name="question${questionNumber}"
value="${letter}">
 ${letter} :

${currentQuestion.answers[letter]}
</label>`
                );
            }

            //add this question and its answers to output
            output.push(
                `<div class="question">
${currentQuestion.question} </div>
<div class="answers">
${answers.join('')}
</div>`
            );
        }
    );



function showResults(){}

// display quiz
createTest();

// show results on submit
submitButton.addEventListener('click', showResults);

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
    }

]

function createQuiz() {
    //variable to store html output
    const output = [];

    //for each question
    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

            //variable to store list of possible answers
            const answers = [];

            //for each available answer
            for (letter in currentQuestion.answers) {

                //add a html radio button
                answers.push(
                    `<label>
                      <input type="radio" name="question${questionNumber}" value="${letter}">
                      ${letter} :
                      ${currentQuestion.answers[letter]}
                     </label>`
                );
            }

            //add question and its answers to the output
            output.push(
                `<div class="question"> ${currentQuestion.question} </div>
                 <div class="answers"> ${answers.join('')}</div>`
            );
        }
    )

    //combine output list into one string of html and put it on the page
    testContainer.innerHTML = output.join('');


    myQuestions.forEach((currentQuestion, questionNumber) => {
        //store list of answer choices
        const answers = [];

        //for each available answer
        for(letter in currentQuestion.answers){

            //add an html radio button
            answers.push(
                `<label>
                 <input type="radio" name="question${questionNumber}" value="${letter}">
                 `
            )
        }

    });

}