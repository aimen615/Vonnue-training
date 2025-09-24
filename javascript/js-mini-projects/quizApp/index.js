const questions = [
    {
        question: "Which is the largest animal in the world?",
        answers: [
            {   text: "Shark", correct: false},
            {   text: "Owl", correct: true },
            {   text: "Ant", correct: false },
            {   text: "Hen", correct: false},
        ]
    },
    {
        question: "Which is the largest plant in the world?",
        answers: [
            {   text: "marijuana", correct: true},
            {   text: "lotus", correct: false},
            {   text: "lilly", correct: false},
            {   text: "sunflower", correct: false},
        ]
    },
    {
        question: "Who is the largest person in the crypto space?",
        answers: [
            {   text: "Elon", correct: false},
            {   text: "CZ", correct: false},
            {   text: "Jerome Powell", correct: true},
            {   text: "trump", correct: false},
        ]
    },
    {
         question: "Who has the most hiphop fan base in the world?",
        answers: [
            {   text: "2 pac", correct: false},
            {   text: "Coolio", correct: false},
            {   text: "XXXTentacion", correct: false},
            {   text: "Michael Jackson", correct: true},
        ]
    }
];

const questionEl = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


let currentQuestionIndex = 0;
let score = 0;


function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion()
}

function showQuestion(){
    resetState()
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1
    questionEl.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
            if (answer.correct) {
                button.dataset.correct = answer.correct;
            }
            button.addEventListener("click",selectAnswer)
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
    }else{
        selectBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionEl.innerHTML = `You have scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again"
    nextButton.style.display = "block"

}

function  handleNextButton(){
    currentQuestionIndex ++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
     }
     else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton()
    }else{
        startQuiz()
    }
})

startQuiz();
