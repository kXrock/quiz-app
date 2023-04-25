const QuizData = [
    {
        question: "Kerem Kayanın yaşı kaçtır?",
        a: "20",
        b: "31",
        c: "25",
        d: "11",
        answer: "a"
    },
    {
        question: "Kerem Kaya kodlamaya hangi dille başlamıştır?",
        a: "Javascript",
        b: "Python",
        c: "C++",
        d: "Java",
        answer: "b"
    },
    {
        question: "Türkiyede kaç il vardır?",
        a: "Yoktur",
        b: "45",
        c: "81",
        d: "34",
        answer: "c"
    },
    {
        question: "Kerem Kaya kaç sene basketbol oynamıştır?",
        a: "11",
        b: "3",
        c: "5",
        d: "Bu ne anlar basketten",
        answer: "a"
    },
    {
        question: "Favori NBA takımım hangisidir?",
        a: "Lakers",
        b: "GSW",
        c: "Chiaco Buls",
        d: "Baketbol köylü işi",
        answer: "b"
    },
];

const questionEl = document.getElementById("ques");
const text_one = document.getElementById("1");
const text_two = document.getElementById("2");
const text_three = document.getElementById("3");
const text_four = document.getElementById("4");
const button = document.getElementById("btnnext");
const answersEls = document.querySelectorAll(".answer")
const quiz = document.getElementById("quiz")
let current_quiz = 0;
let current_page = 0;

set_questions();

function set_questions() {
    
    getElement();

    deselectAnswers();


    questionEl.innerHTML = QuizData[current_page].question;
    text_one.innerHTML = QuizData[current_page].a;
    text_two.innerHTML = QuizData[current_page].b
    text_three.innerHTML = QuizData[current_page].c;
    text_four.innerHTML = QuizData[current_page].d;



    current_page++;

}

let correct_answers = 0;

function getElement() {
    answersEls.forEach((answers1) => {

        if (answers1.checked) {
            if (answers1.id === QuizData[current_quiz].answer && current_quiz < QuizData.length) {
                correct_answers++;
            }
        }
    })
}

let isclick = false;

button.addEventListener("click", () => {
    
    console.log(isclick);
    isSelect();
    if (isclick) {
        if (current_page - 1 <= QuizData.length) {
            if (current_page === QuizData.length) {
                getElement();
                let final_view = document.querySelector("#quiz");
                final_view.style.padding = "100px";
                final_view.style.fontSize = "35px";
                final_view.style.textAlign = "center"
                final_view.style.borderRadius = "10px";
                quiz.innerHTML = `You answered correctly at ${correct_answers}/${QuizData.length}`;
            }
            else {
                set_questions();
                isclick=false;
                current_quiz++;
            }
        }
    }


})

function deselectAnswers() {
    answersEls.forEach((answers) => { answers.checked = false; })
}

function isSelect() {
    answersEls.forEach((x) => {
        if (x.checked == true) {
            isclick = true;
        }
    })
}





