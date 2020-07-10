

function flip(event) {
    var element = event.currentTarget;
    if (element.className === "flip-card-inner") {
        if (element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
        else {
            element.style.transform = "rotateY(180deg)";
        }
    }
};




let trueBtns = document.querySelectorAll('.btn-1');
let falseBtns = document.querySelectorAll('.btn-2');
let trueBtn = document.querySelector('.btn-1');
let falseBtn = document.querySelector('.btn-2');
let answer = document.querySelector('.answer')

let questions = document.querySelectorAll('.question');

let question = document.querySelector('.question');



var score = 0;
let playerScore = document.getElementById("score");



var total;
total = 0;



function add1() {
    document.querySelector('.question0').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question0').style.color = 'green';
    document.querySelector('.question0').style.fontSize = '30px';
}

function add2() {
    document.querySelector('.question1').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question1').style.color = 'green';
    document.querySelector('.question1').style.fontSize = '30px';
}

function add3() {
    document.querySelector('.question2').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question2').style.color = 'green';
    document.querySelector('.question2').style.fontSize = '30px';
}

function add4() {
    document.querySelector('.question3').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question3').style.color = 'green';
    document.querySelector('.question3').style.fontSize = '30px';
}

function add5() {
    document.querySelector('.question4').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question4').style.color = 'green';
    document.querySelector('.question4').style.fontSize = '30px';
}

function add6() {
    document.querySelector('.question5').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question5').style.color = 'green';
    document.querySelector('.question5').style.fontSize = '30px';
}

function add7() {
    document.querySelector('.question6').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question6').style.color = 'green';
    document.querySelector('.question6').style.fontSize = '30px';
}

function add8() {
    document.querySelector('.question7').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question7').style.color = 'green';
    document.querySelector('.question7').style.fontSize = '30px';
}

function add9() {
    document.querySelector('.question8').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question8').style.color = 'green';
    document.querySelector('.question8').style.fontSize = '30px';
    setTimeout(function () {
        alert("Game over!")
        resetGame();
    }, 1000);
}




function trueBtn1() {
    document.querySelector('.question0').innerHTML = "That is not correct";
    document.querySelector('.question0').style.color = 'red';
    document.querySelector('.question0').style.fontSize = '30px';
}

function falseBtn2() {
    document.querySelector('.question1').innerHTML = "That is not correct";
    document.querySelector('.question1').style.color = 'red';
    document.querySelector('.question1').style.fontSize = '30px';
}


function trueBtn3() {
    document.querySelector('.question2').innerHTML = "That is not correct";
    document.querySelector('.question2').style.color = 'red';
    document.querySelector('.question2').style.fontSize = '30px';
}


function trueBtn4() {
    document.querySelector('.question3').innerHTML = "That is not correct";
    document.querySelector('.question3').style.color = 'red';
    document.querySelector('.question3').style.fontSize = '30px';
}


function trueBtn5() {
    document.querySelector('.question4').innerHTML = "That is not correct";
    document.querySelector('.question4').style.color = 'red';
    document.querySelector('.question4').style.fontSize = '30px';
}


function falseBtn6() {
    document.querySelector('.question5').innerHTML = "That is not correct";
    document.querySelector('.question5').style.color = 'red';
    document.querySelector('.question5').style.fontSize = '30px';
}


function falseBtn7() {
    document.querySelector('.question6').innerHTML = "That is not correct";
    document.querySelector('.question6').style.color = 'red';
    document.querySelector('.question6').style.fontSize = '30px';
}


function falseBtn8() {
    document.querySelector('.question7').innerHTML = "That is not correct";
    document.querySelector('.question7').style.color = 'red';
    document.querySelector('.question7').style.fontSize = '30px';
}


function falseBtn9() {
    document.querySelector('.question8').innerHTML = "That is not correct";
    document.querySelector('.question8').style.color = 'red';
    document.querySelector('.question8').style.fontSize = '30px';
    setTimeout(function () {
        alert("Game over!")
        resetGame();
    }, 1000);
}




let reset = document.querySelector('.reset')

function resetGame() {
    document.location.href = "";
}



let flipcards = document.querySelectorAll('.flip-card-inner')
window.onkeydown = function (event) {
    if (event.keyCode === 32) {
        event.preventDefault();
        for (let i = 0; i < flipcards.length; i++) {
            flipcards[i].click();

        }
    }

}



window.onkeydown = function (event) {
    if (event.keyCode === 37) {
        event.preventDefault();
        trueBtn.click();

    }

}

window.onkeydown = function (event) {
    if (event.keyCode === 39) {
        event.preventDefault();
        falseBtn.click();

    }

}

var seconds = 60;
var timer;
function myFunction() {
    if (seconds < 60) {
        document.getElementById("timer").innerHTML = seconds;
    }
    if (seconds > 0) {
        seconds--;
    } else {
        clearInterval(timer);
        alert("Game Over");
        resetGame();
    }
}
function myTimer() {
    if (!timer) {
        timer = window.setInterval(function () {
            myFunction();
        }, 1000);
    }
}

document.getElementById("timer").innerHTML = "1:00"; 
