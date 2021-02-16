var questionsArray = [
    {
        question: "HTML stands for________",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Markup Language",
            "High Text Markup Language",
            "Hyper Text Marking Language",
            "none of the above",
        ]
    },
    {
        question: "CSS stands for______",
        answer: "Cascading Style Sheets",
        options: [
            "Cascading Style Sheets",
            "Central Style Sheets",
            "Control Style Sheets",
            "none of the above",
        ]
    },
    {
        question: "Full Form of E-MAIL is?",
        answer: "electronic mail",
        options: [
            "electric mail",
            "easy mail",
            "electronic mail",
            "none of the above",
        ]
    },
    {
        question: "LCD stands for",
        answer: "liquid crystal display",
        options: [
            "liquid crystal display",
            "light crystal display",
            "liquid cold display",
            "none of the above",
        ]
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        answer: "h1",
        options: [
            "h1",
            "head",
            "h6",
            "none of the above",
        ]
    },
   
];

function vlidate(){
    sessionStorage.clear();
    var input = document.getElementById("userName");
    if(input.value == "" || input.value == " "){
        alert("User Name Required!");
    }
    else {
        sessionStorage.setItem("name",input.value);
        startQuiz();
    }
}


function question(e){
    var question = document.getElementById("question");
    question.innerHTML = questionsArray[e].question;

    var options = document.getElementsByClassName("btns");
    for(i = 0; i < options.length; i++){
        options[i].innerHTML=questionsArray[e].options[i];
    }
}
var quesCount = 0
var score = 0
function nxtQ(){
    scr(quesCount)
    result()
    quesCount++;
    question(quesCount)
    removehighLight()
}

function highLight(e){
    removehighLight()
    e.classList.add("HL")    
}

function removehighLight(){
    var HLl = document.getElementsByClassName("HL");
    for(i = 0; i < HLl.length; i++){
        HLl[i].classList.remove("HL")
    }
}

function scr(){
    var ans = document.getElementsByClassName("HL")
    if(ans[0].innerHTML == questionsArray[quesCount].answer){
        score += 10;
        console.log(score)
    }
}

function result(){
    if(quesCount === 4)
    {
        location.href = "result.html"
        // alert(score)
    }
    sessionStorage.setItem("userscore", score);
}

function startQuiz(){
    window.location.href = "Quiz.html";
    
}


function renderResult(){
    var cs = sessionStorage.getItem("userscore");
    var result = document.getElementById("result");
    result.innerHTML = "You scored "+ cs +" out of 50";

}

function takeAgain(){
    window.location.href = "index.html";
}