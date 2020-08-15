

let trueBtns = document.querySelectorAll('.btn-1');
let falseBtns = document.querySelectorAll('.btn-2');
let trueBtn = document.querySelector('.btn-1');
let falseBtn = document.querySelector('.btn-2');

var score = 0;
let playerScore = document.getElementById("score");

var total;
total = 0;

function add1() {
    document.querySelector('.question0').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question0').style.color = 'green';
    document.querySelector('.question0').style.fontSize = '60px';
    document.querySelector('.question0').style.textAlign = 'center';
}

function add2() {
    document.querySelector('.question1').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question1').style.color = 'green';
    document.querySelector('.question1').style.fontSize = '60px';
    document.querySelector('.question1').style.textAlign = 'center';
}

function add3() {
    document.querySelector('.question2').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question2').style.color = 'green';
    document.querySelector('.question2').style.fontSize = '60px';
    document.querySelector('.question2').style.textAlign = 'center';
}

function add4() {
    document.querySelector('.question3').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question3').style.color = 'green';
    document.querySelector('.question3').style.fontSize = '60px';
    document.querySelector('.question3').style.textAlign = 'center';
}

function add5() {
    document.querySelector('.question4').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question4').style.color = 'green';
    document.querySelector('.question4').style.fontSize = '60px';
    document.querySelector('.question4').style.textAlign = 'center';
}

function add6() {
    document.querySelector('.question5').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question5').style.color = 'green';
    document.querySelector('.question5').style.fontSize = '60px';
    document.querySelector('.question5').style.textAlign = 'center';
}

function add7() {
    document.querySelector('.question6').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question6').style.color = 'green';
    document.querySelector('.question6').style.fontSize = '60px';
    document.querySelector('.question6').style.textAlign = 'center';
}

function add8() {
    document.querySelector('.question7').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question7').style.color = 'green';
    document.querySelector('.question7').style.fontSize = '60px';
    document.querySelector('.question7').style.textAlign = 'center';
}

function add9() {
    document.querySelector('.question8').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question8').style.color = 'green';
    document.querySelector('.question8').style.fontSize = '60px';
    document.querySelector('.question8').style.textAlign = 'center';
    setTimeout(function () {
        alert("Game over!")
        resetGame();
    }, 1000);
}



function falseBtn1() {
    document.querySelector('.question1').innerHTML = "That is not correct";
    document.querySelector('.question1').style.color = 'red';
    document.querySelector('.question1').style.fontSize = '60px';
    document.querySelector('.question1').style.textAlign = 'center';
}

function trueBtn2() {
    document.querySelector('.question0').innerHTML = "That is not correct";
    document.querySelector('.question0').style.color = 'red';
    document.querySelector('.question0').style.fontSize = '60px';
    document.querySelector('.question0').style.textAlign = 'center';
}

function trueBtn3() {
    document.querySelector('.question2').innerHTML = "That is not correct";
    document.querySelector('.question2').style.color = 'red';
    document.querySelector('.question2').style.fontSize = '60px';
    document.querySelector('.question2').style.textAlign = 'center';
}


function trueBtn4() {
    document.querySelector('.question3').innerHTML = "That is not correct";
    document.querySelector('.question3').style.color = 'red';
    document.querySelector('.question3').style.fontSize = '60px';
    document.querySelector('.question3').style.textAlign = 'center';
}


function trueBtn5() {
    document.querySelector('.question4').innerHTML = "That is not correct";
    document.querySelector('.question4').style.color = 'red';
    document.querySelector('.question4').style.fontSize = '60px';
    document.querySelector('.question4').style.textAlign = 'center';
}


function falseBtn6() {
    document.querySelector('.question5').innerHTML = "That is not correct";
    document.querySelector('.question5').style.color = 'red';
    document.querySelector('.question5').style.fontSize = '60px';
    document.querySelector('.question5').style.textAlign = 'center';
}


function falseBtn7() {
    document.querySelector('.question6').innerHTML = "That is not correct";
    document.querySelector('.question6').style.color = 'red';
    document.querySelector('.question6').style.fontSize = '60px';
    document.querySelector('.question6').style.textAlign = 'center';
}


function falseBtn8() {
    document.querySelector('.question7').innerHTML = "That is not correct";
    document.querySelector('.question7').style.color = 'red';
    document.querySelector('.question7').style.fontSize = '60px';
    document.querySelector('.question7').style.textAlign = 'center';
}


function falseBtn9() {
    document.querySelector('.question8').innerHTML = "That is not correct";
    document.querySelector('.question8').style.color = 'red';
    document.querySelector('.question8').style.fontSize = '60px';
    document.querySelector('.question8').style.textAlign = 'center';
    setTimeout(function () {
        alert("Game over!")
        resetGame();
    }, 1000);
}

myShow = w3.slideshow(".card", 0);


let reset = document.querySelector('.reset')

function resetGame() {
    document.location.href = "";
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