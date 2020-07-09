

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

answers = [[false, true], [true, false], [false, true], [false, true], [false, true], [true, false], [true, false], [true, false], [true, false]]


// for (i = 0; i < answers.length; i++) {
//     console.log(answers[i]);
//     for (j = 0; j < answers[i].length; j++)
//         console.log(answers[i][j]);
// }



var total;
total = 0;



function add1() {
    document.querySelector('.question1').style.fontSize = '20px';
    document.querySelector('.question1').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question1').style.color = 'green';
}

function add2() {
    document.querySelector('.question2').style.fontSize = '20px';
    document.querySelector('.question2').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question2').style.color = 'green';
}

function add3() {
    document.querySelector('.question3').style.fontSize = '20px';
    document.querySelector('.question3').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question3').style.color = 'green';
}

function add4() {
    document.querySelector('.question4').style.fontSize = '20px';
    document.querySelector('.question4').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question4').style.color = 'green';
}

function add5() {
    document.querySelector('.question5').style.fontSize = '20px';
    document.querySelector('.question5').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;

    document.querySelector('.question5').style.color = 'green';
}

function add6() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question6').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question6').style.color = 'green';
}

function add7() {
    document.querySelector('.question7').style.fontSize = '20px';
    document.querySelector('.question7').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question7').style.color = 'green';

}

function add8() {
    document.querySelector('.question8').style.fontSize = '20px';
    document.querySelector('.question8').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question8').style.color = 'green';
}

function add9() {
    document.querySelector('.question9').style.fontSize = '20px';
    document.querySelector('.question9').innerHTML = "That is correct"
    total = total + 1;
    document.querySelector('.result').innerHTML = total;
    document.querySelector('.question9').style.color = 'green';
    setTimeout(function () {
        alert("Game over!")
    }, 1000);


}


// answers = [[false, true], [true, false], [false, true], [false, true], [true, false], [false, true], [true, false], [true, false], [true, false]]



// for (let i = 0; i < questions.length; i++) {
//     console.log(questions[i])
// }


// for (let i = 0; i < trueBtns.length; i++) {
//     trueBtns[i].addEventListener("click", check);

//     function check(e) {
//         console.log(e.target)
//         let question = parseInt(e.target.dataset.question)
//         answers[question][1] = true;
//         console.log(e.target.dataset.question)
//     };
// }

// for (let i = 0; i < falseBtns.length; i++) {
//     falseBtns[i].addEventListener("click", check);

//     function check(e) {
//         console.log(e.target)
//         let question = parseInt(e.target.dataset.question)
//         answers[question][1] = true;
//     };
// }


// for (let i = 0; i < answers.length; i++) {
//     if (answers[i] == "true") {
//         playerScore.innerHTML = score += 5;
//         console.log("clicked");
//     } else {
//         score = score;
//     }
// }


// function checkAnswers() {
//     let correctCount = 0;
//     for (let i = 0; i < answers.length; i++) {
//         if (answers[i][0] == answers[i][1]) {
//             correctCount++
//         }
//     }
//     console.log(correctCount)
// }
// checkAnswers()

//how many of the correct answers equal your answer


// let wrapper = document.querySelector('.wrapper');

// wrapper.addEventListener('click', (event) => {
//     const isButton = event.target.nodeName === 'BUTTON';
//     if (!isButton) {
//         return;
//     }

//     console.dir(event.target.id);
// })





// function showDivs(n) {
//     var i;
//     var x = document.querySelectorAll(".card");
//     if (n > x.length) { slideIndex = 1 }
//     if (n < 1) { slideIndex = x.length }
//     for (i = 0; i < x.length; i++) {
//         x[i].style.display = "none";
//     }
//     x[slideIndex - 1].style.display = "block";
// }



function trueBtn1() {
    document.querySelector('.question1').style.fontSize = '20px';
    document.querySelector('.question1').innerHTML = "That is not correct";
    document.querySelector('.question1').style.color = 'red';

}

function falseBtn2() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question2').innerHTML = "That is not correct";
    document.querySelector('.question2').style.color = 'red';
}


function trueBtn3() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question3').innerHTML = "That is not correct";
    document.querySelector('.question3').style.color = 'red';
}


function trueBtn4() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question4').innerHTML = "That is not correct";
    document.querySelector('.question4').style.color = 'red';
}


function trueBtn5() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question5').innerHTML = "That is not correct";
    document.querySelector('.question5').style.color = 'red';
}


function falseBtn6() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question6').innerHTML = "That is not correct";
    document.querySelector('.question6').style.color = 'red';
}


function falseBtn7() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question7').innerHTML = "That is not correct";
    document.querySelector('.question7').style.color = 'red';
}


function falseBtn8() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question8').innerHTML = "That is not correct";
    document.querySelector('.question8').style.color = 'red';
}


function falseBtn9() {
    document.querySelector('.question6').style.fontSize = '20px';
    document.querySelector('.question9').innerHTML = "That is not correct";
    document.querySelector('.question9').style.color = 'red';
}




let reset = document.querySelector('.reset')

function resetGame() {
    document.location.href = ""
}









