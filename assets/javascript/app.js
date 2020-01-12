$(document).ready(function () {
var triviaQuestions = [
	{
		question: "What are the Koopalings from Super Mario games named after?",
		choice: ["famous musicians", "famous painters", "famous architects"],
		correctAnswer: 0,
		image: "assets/images/koopalings.gif"
	},
	{
		question: "What was the first game played in space?",
		choice: ["Pac-Man", "Space Warrior", "Tetris"],
		correctAnswer: 2,
		image: "assets/images/tetris.gif"
	},
	{
		question: "what was Sonic the hedgehog originally called?",
		choice: ["Sonic the Animal", "Mr. Needlemouse", "Syngin the Snake"],
		correctAnswer: 1,
		image: "assets/images/sonic.gif"
	},
	{
		question: "The entire GoldenEye 007 game on the N64 is how big?",
		choice: [" 1 TB", "15 GB", "12 MB"],
		correctAnswer: 2,
		image: "assts/images/sonic.gif"
	},
	{
		question: "The average age of a U.S. gamer is?",
		choice: ["17", "35", "22"],
		correctAnswer: 1,
		image: "assets/images/gamer.gif"
	},
	{
		question: "What is Bowser called in Japan?",
		choice: ["King Koopa", "Akako", "Shinrin-yoku"],
		correctAnswer: 0,
		image: "assets/images/bowser.gif"
	},
	{
		question: "<i>The New York Time</i> incorrectly described Mario and Luigi as?",
		choice: ["janitor", "firemen", "farmers"],
		correctAnswer: 0,
		image: "assets/images/madmario.gif"
	},
	{
		question: "The creator of Pac-Man got the idea of the game while eating what food?",
		choice: ["burger", "sushi", "pizza"],
		correctAnswer: 2,
		image: "assets/images/pacmanpizza.gif"
	},
];

var userChoice ="";
var correctAnswer = 0;
var wrongAnswer = 0;
var notAnswered = 0;
var timer = 15;
var interval;
var startGame = "false";
var totalQuestion = triviaQuestions.length;
var pick;
var random;
var newArrau = [];
var questionholder = [];


$("#startOver").hide();
$('.start').click(function() {
	$('.start').hide();
	displayQuestions()
	startTimer();
	for (var i = 0; i < triviaQuestions.length; i++){
		questionholder.push(triviaQuestions[i]);
	}

});

function startTimer(){
	if (startGame){
		interval = setInterval(decrement, 1000);
		startGame = true;
	}
};

function decrement() {
	$("#timer").html(timer);
	timer --;

	if (timer === 0){
		notAnswered++;
		stop();
		$("#answer").text("OOOoo better luck next time! The answer is: " + pick.choice[pick.correctAnswer] )
		picture();
	}
};

function stop(){
	startGame = false;
	clearInterval(interval);
};

function displayQuestions(){
	random = Math.floor(Math.random()*triviaQuestions.length);
	pick = triviaQuestions[random];

	$("#questions").html("<p>" + pick.question + "</p>")
	for (var i = 0; i < pick.choice.length; i++){
		var choice = $("<div>");
		choice.addClass("answerChoice");
		choice.html(pick.choice[i]);

		choice.attr("data-guessvalue", i);
		$("#answer").append(choice);
		
	 }
};

$(".answerChoice").on("click", function () {

	userChoice = parseInt($(this).attr("data-guessvalue"));

	if (userChoice === pick.answer){
		stop();
		correctAnswer++;
		userChoice="";
		$("#answer").html("<p>CORRECT!</p>");
		picture();

	} else {

		stop();
		wrongAnswer++;
		userChoice="";
		$("#answer").html("<p> OOOOh try again!" + pick.choice[pick.answer] + "</p>");
		picture();
	}

});

function picture(){

	$("#answer").append("<img src=" + pick.photo + ">");
	newArrau.push(pick);
	triviaQuestions.splice(random, 1);

	var hideImage = setTimeout(function(){
		$("#answer").empty();
		timer=15;

	if((wrongAnswer + correctAnswer + notAnswered) === totalQuestion){
		$("#questions").empty();
		$("#questions").html("<p> GAME OVER <br> Your Results: </p>");
		$("#answer").append("<p> Correct " + correctAnswer + "</p>");
		$("#answer").append("<p> Incorrect: " + wrongAnswer+ "</p>");
		$("#answer").append("<p> Unanswered: " + notAnswered + "</p>");
		$("#reset").show();
		correctAnswer = 0;
		wrongAnswer = 0;
		notAnswered = 0;

	} else{
		startTimer();
		displayQuestions();
	}

	}, 3000);

}

$("#reset").on("click", function(){
	$("#startOver").hide();
	$("#answer").empty();
	$("#questions").empty();
	for (var i = 0; i < questionholder.length; i++){
		triviaQuestions.push(holder[i]);
	}
	startTimer();
	displayQuestions();

})


});