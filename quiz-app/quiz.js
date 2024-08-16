const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    },
    // Add 8 more questions here...
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 1
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
        answer: 1
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        options: ["Gold", "Oxygen", "Osmium", "Zinc"],
        answer: 1
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "5"],
        answer: 1
    },
    {
        question: "Which country is the Great Wall of China located in?",
        options: ["India", "China", "Japan", "Russia"],
        answer: 1
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Ruby"],
        answer: 2
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["China", "Brazil", "Japan", "Australia"],
        answer: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;

const quizContainer = document.getElementById('quiz-container');
const restartBtn = document.getElementById('restart-btn');

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    quizContainer.innerHTML = `
        <h2 class="text-xl font-semibold mb-4">${currentQuestion.question}</h2>
        <ul>
            ${currentQuestion.options.map((option, index) =>
                `<li class="mb-2">
                    <button onclick="checkAnswer(${index})" class="option-btn bg-gray-200 text-black py-2 px-4 rounded w-full text-left">
                        ${option}
                    </button>
                </li>`
            ).join('')}
        </ul>
    `;
}

function checkAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].answer;
    const options = document.querySelectorAll('.option-btn');

    options.forEach((option, index) => {
        if (index === correctIndex) {
            option.classList.add('correct');
        } else if (index === selectedIndex) {
            option.classList.add('incorrect');
        }
        option.disabled = true;
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(loadQuestion, 1000);
    } else {
        setTimeout(showResults, 1000);
    }
}

function showResults() {
    quizContainer.innerHTML = `
        <h2 class="text-xl font-semibold mb-4">Quiz Completed!</h2>
        <p class="text-lg mb-4">Your Score: ${score} / ${questions.length}</p>
    `;
    restartBtn.classList.remove('hidden');
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    score = 0;
    restartBtn.classList.add('hidden');
    loadQuestion();
});

loadQuestion();
