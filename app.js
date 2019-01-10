function populate() {
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }

        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};


function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores:" + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
    new Question("Guess the brand C_D_RY?", ["Cadbury", "Cldury","Cadmry", "Cadiry"], "Cadbury"),
    new Question("What oil is characteristically used in the cooking of South India?", ["Canola", "Coconut", "Pineapple", "Olive"], "Coconut"),
    new Question("What is India’s national fruit?", ["Apple", "Banana","Mango", "Grapes"], "Mango"),
    new Question("What word is used in India for tea?", ["za", "chai", "ta", "All"], "chai"),
    new Question("Which of these foods does not originate in Mughal cuisine?", ["kebab", "samosa", "pilaf", "baba ghanoush"], "baba ghanoush")
];

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();





