"use strict";

const testContainer = document.getElementById('test');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function createTest(){}

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

