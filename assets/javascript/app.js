var questions = [
    {       // 0
        question: "In S1E1 'Pilot': Who started their first day at Dunder Mifflin Scranton?",
        corrAns: "Ryan Howard",
        answer1: "Jim Halpert",
        answer2: "Michael Scott",
        answer3: "Erin Hannon"
    }, {    // 1
        question: "In S1E2 'Diversity Day': What famous comedian's stand up routine does Michael imitate",
        corrAns: "Chris Rock",
        answer1: "Richard Pryor",
        answer2: "Robin Williams",
        answer3: "George Carlin"
    }, {    // 2
        question: "In S1E3 'Health Care': Which of these is NOT one of Jim and Pam's made up diseases",
        corrAns: "Hair cancer",
        answer1: "Killer nanorobots",
        answer2: "Hot dog fingers",
        answer3: "Spontaneous dental hydroplosion"
    }, {    // 3    
        question: "In S1E4 'The Alliance': How much money does Michael donate to Oscar's nephew's charity, not realizing it is a walk-a-thon and the amount is per mile?",
        corrAns: "$25",
        answer1: "$10",
        answer2: "$40",
        answer3: "$100"
    }, {    // 4
        question: "In S1E5 'Basketball': What small appliance of Pam's breaks down? (It was given to her at her engagement party three years earlier",
        corrAns: "Toaster oven",
        answer1: "Toaster",
        answer2: "Microwave",
        answer3: "Blender"
    }, {    // 5
        question: "In S1E6 'Hot Girl': What is the Hot Girl's name?",
        corrAns: "Katy",
        answer1: "Amy",
        answer2: "Christy",
        answer3: "Kelly"
    }, {    // 6
        question: "In S2E1 'The Dundies': What Dundie award does Phillis take home?",
        corrAns: "The Bushiest Beaver Dundie",
        answer1: "The Busiest Beaver Dundie",
        answer2: "Spicy Currey Dundie",
        answer3: "Whitest Sneakers Dundie"
    }, {    // 7
        question: "In S2E2 'Sexual Harassment': What is on Todd Packer's vanity license plate?",
        corrAns: "WLHUNG",
        answer1: "LUVMKR",
        answer2: "TODPKR",
        answer3: "BGDADY"
    }, {    // 8
        question: "In S2E3 'Office Olympics': What does Pam name 'Box of paper snowshoe racing'?",
        corrAns: "Flonkerton",
        answer1: "Icelandic Snowshoe Racing",
        answer2: "Gixing",
        answer3: "Pegerhosen"
    }, {    // 9
        question: "In S2E5 'Halloween': What is Jim's costume?",
        corrAns: "Three Hole Punch Jim",
        answer1: "Dave",
        answer2: "Bookface",
        answer3: "Rational Consumer"
    }, {    // 4
        question: "In S2E6 'The Fight': What is Dwight's Sensei's name?",
        corrAns: "Ira",
        answer1: "George",
        answer2: "Stuart",
        answer3: "Mr. Miyagi"
    }
]
var time = 100;
var correctCount = 0;
var incorrectCount = 0;
var i = 0;

displayTime();
displayStats();

nextQuestion(i);
function nextQuestion(i) {   // Should be in a for loop.
    displayQuestions(i);
    console.log("Correct answer is: " + questions[i].corrAns)
    $("button").on("click", function () {
        var answer = $(this).attr("response");
        if (answer === questions[i].corrAns) {
            alert("correct");
            time = 10;
            correctCount++;
            if (correctCount === 10) {
                winScreen();
            }
            displayStats();
            i++;
            nextQuestion(i);
        }
        else {
            resetGame();
            alert("wrong")
        }
    });
}

function displayQuestions(i) {
    var randomCount = Math.floor(Math.random() * 4);
    console.log(randomCount);
    switch (randomCount) {
        case 0:
            $(".questions").text(questions[i].question);
            $(".buttons").html("");
            $(".buttons").append("<button class='options' id='q1' response='" + questions[i].corrAns + "'>" + questions[i].corrAns + "</button>");
            $(".buttons").append("<button class='options' id='q2' response='" + questions[i].answer1 + "'>" + questions[i].answer1 + "</button>");
            $(".buttons").append("<button class='options' id='q3' response='" + questions[i].answer2 + "'>" + questions[i].answer2 + "</button>");
            $(".buttons").append("<button class='options' id='q4' response='" + questions[i].answer3 + "'>" + questions[i].answer3 + "</button>");
            break;

        case 1:
            $(".questions").text(questions[i].question);
            $(".buttons").html("");
            $(".buttons").append("<button class='options' id='q2' response='" + questions[i].answer1 + "'>" + questions[i].answer1 + "</button>");
            $(".buttons").append("<button class='options' id='q1' response='" + questions[i].corrAns + "'>" + questions[i].corrAns + "</button>");
            $(".buttons").append("<button class='options' id='q3' response='" + questions[i].answer2 + "'>" + questions[i].answer2 + "</button>");
            $(".buttons").append("<button class='options' id='q4' response='" + questions[i].answer3 + "'>" + questions[i].answer3 + "</button>");
            break;

        case 2:
            $(".questions").text(questions[i].question);
            $(".buttons").html("");
            $(".buttons").append("<button class='options' id='q2' response='" + questions[i].answer1 + "'>" + questions[i].answer1 + "</button>");
            $(".buttons").append("<button class='options' id='q3' response='" + questions[i].answer2 + "'>" + questions[i].answer2 + "</button>");
            $(".buttons").append("<button class='options' id='q1' response='" + questions[i].corrAns + "'>" + questions[i].corrAns + "</button>");
            $(".buttons").append("<button class='options' id='q4' response='" + questions[i].answer3 + "'>" + questions[i].answer3 + "</button>");
            break;

        case 3:
            $(".questions").text(questions[i].question);
            $(".buttons").html("");
            $(".buttons").append("<button class='options' id='q2' response='" + questions[i].answer1 + "'>" + questions[i].answer1 + "</button>");
            $(".buttons").append("<button class='options' id='q3' response='" + questions[i].answer2 + "'>" + questions[i].answer2 + "</button>");
            $(".buttons").append("<button class='options' id='q4' response='" + questions[i].answer3 + "'>" + questions[i].answer3 + "</button>");
            $(".buttons").append("<button class='options' id='q1' response='" + questions[i].corrAns + "'>" + questions[i].corrAns + "</button>");
            break;

    }
}

function displayTime() {
    // var time = 10;
    $(".timeBox").text("you have " + time + " seconds left")
    var timer = setInterval(function () {
        if (time < 1) {
            clearInterval(timer);
            resetGame();
        }
        else {
            time--;
            $(".timeBox").text("you have " + time + " seconds left")
        }
    }, 1000)
}

function loseScreen() {

}
function displayStats() {
    $(".score").text("Guesses correct: " + correctCount + "/10");
}
function resetGame() {
    emptyDivs();
    $(".score").html("Game Over <br> Try again? <button id='yes'>yes</button> <button>no</button>");
    $("button").on("click", function () {
        alert("button clicked")
        var answer = $(this).attr("id");
        if (answer === "yes") {
            alert("yes")
            i = 0;
            displayTime();
            nextQuestion(i);
        }
        else {
            $("body").html(":(");
        }
    });
}
function emptyDivs() {
    $(".score").empty();
    $(".timeBox").empty();
    $(".questions").empty();
    $(".buttons").empty();
}
function winScreen() {
    $(".displayScreen").html("you won! refresh to play again");
}