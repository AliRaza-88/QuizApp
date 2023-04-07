const quizDB = [
    {
        question: "Q1: What is the full form of CSS?",
        a: "Cascading Style Sheets",
        b: "Cartoon Style Sheets",
        c: "Cascading Style Sheep",
        d: "Cascading Super Sheets",
        ans: "ans1"
    },
    {
        question: "Q2: What is the full form of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "HyperText Markup Language",
        d: "Hypertext Markup Language",
        ans: "ans4"
    },
    {
        question: "Q3: What is the full form of HTTP?",
        a: "Hypertext Transfer Product",
        b: "Hypertext Test Protocol",
        c: "Hey Transfer Protocol",
        d: "Hypertext Transfer Protocol",
        ans: "ans4"
    },
    {
        question: "Q4: What is the full form of JS?",
        a: "JavaScript",
        b: "JavaSuper",
        c: "JustScript",
        d: "JordenShoes",
        ans: "ans1"
    },
    {
        question: "Q5: What is the full form of CPU?",
        a: "Combined Prison Union",
        b: "Central Processing Unit",
        c: "Cantonment Procurement Unit",
        d: "Cascading Product Uniform",
        ans: "ans2"
    },
    {
        question: "Q6: What is the full form of MMA?",
        a: "Menie Minie Ao",
        b: "Mixed Material Ants",
        c: "Mixed Martial Arts",
        d: "Mayor Memorial Ads",
        ans: "ans3"
    },
    {
        question: "Q7: Which animal is known as the 'Ship of the Desert?",
        a: "Cow",
        b: "Elephant",
        c: "Lion",
        d: "Camel",
        ans: "ans4"
    },
    {
        question: "Q8: Name the National bird of India?",
        a: "Dove",
        b: "Crow",
        c: "Peacock",
        d: "Hen",
        ans: "ans3"
    },
    {
        question: "Q9: What is the National sport of Pakistan?",
        a: "Cricket",
        b: "Hockey",
        c: "Squash",
        d: "Boxing",
        ans: "ans2"
    },
    {
        question: "Q10: How many continents are there in the world?",
        a: "Seven",
        b: "Four",
        c: "Nine",
        d: "Three",
        ans: "ans1"
    },
]

const question = document.querySelector('.question');   
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');

const answers = document.querySelectorAll('.answer');

const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

 const loadQuestion = () => {

    const questionList = quizDB[questionCount];

    question.innerHTML = questionList.question;

    option1.innerHTML = questionList.a;
    option2.innerHTML = questionList.b;
    option3.innerHTML = questionList.c;
    option4.innerHTML = questionList.d;
 }

 loadQuestion();

 const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) => {
        if (curAnsElem.checked){
            answer = curAnsElem.id;
        };
    });
    return answer;
 }

 const deselectAll = () => {
    answers.forEach((curAnsElem) => {
        curAnsElem.checked = false
    });
 }


submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer); 

    if(checkedAnswer === quizDB[questionCount].ans){
         score++;
    };

    questionCount++;
    deselectAll();
 
    if(questionCount < quizDB.length){
        loadQuestion();
        
    }
    else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${quizDB.length} &#9996; </h3>
        <button class='btn' onClick='location.reload()'>Play Again!</button>
        `
        showScore.classList.remove('scoreArea');

        
        
    }
});

//timerr code

let timeLeft = 600;
let timer = setInterval(function(){
    let minutes = Math.floor(timeLeft/60);
    let seconds = timeLeft - minutes * 60;

    let displayMinutes = minutes < 10 ? "0" + minutes : minutes;
    let displaySeconds = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById('timer').innerHTML = displayMinutes + ":" + displaySeconds;
    timeLeft--;

    
    if (timeLeft < 0) {
        clearInterval(timer);
        alert("Time's up!");
      }

    if(questionCount  === quizDB.length - 1){
        clearInterval(timer);
    }

  
}, 1000);