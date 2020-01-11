$(document).ready(function () {
var triviaQuestions = [
	{
		question: "What are the Koopalings from Super Mario games named after?",
		choices: ["famous musicians", "famous painters", "famous architects"],
		correctAnswer: 0,
		image: "assets/images/koopalings.gif"
	},
	{
		question: "What was the first game played in space?",
		choices: ["Pac-Man", "Space Warrior", "Tetris"],
		correctAnswer: 2,
		image: "assets/images/tetris.gif"
	},
	{
		question: "what was Sonic the hedgehog originally called?",
		choices: ["Sonic the Animal", "Mr. Needlemouse", "Syngin the Snake"],
		correctAnswer: 1,
		image: "assets/images/sonic.gif"
	},
	{
		question: "The entire GoldenEye 007 game on the N64 is how big?",
		choices: [" 1 TB", "15 GB", "12 MB"],
		correctAnswer: 2,
		image: "assts/images/sonic.gif"
	},
	{
		question: "The average age of a U.S. gamer is?",
		choices: ["17", "35", "22"],
		correctAnswer: 1,
		image: ""
	},
	{
		question: "What is Bowser called in Japan?",
		choices: ["King Koopa", "Akako", "Shinrin-yoku"],
		correctAnswer: 0,
		image: ""
	},
	{
		question: "<i>The New York Time</i> incorrectly described Mario and Luigi as?",
		choices: ["janitor", "firemen", "farmers"],
		correctAnswer: 0,
		image: ""
	},
	{
		question: "The creator of Pac-Man got the idea of the game while eating what food?",
		choices: ["burger", "sushi", "pizza"],
		correctAnswer: 2,
		image: ""
	},
];

var userChoice;

var correctAnswer = 0;

var wrongAnswer = 0;

var notAnswered = 0;

var timer = 30;


$('.start').click(function() {
 
	$('.start').hide();
	counter = setInterval(timer, 1000);
	displayQuestions()

});


function displayQuestions(){
	for (var i = 0; i < triviaQuestions.length; i++){

		$("#questions").text(JSON.stringify(triviaQuestions[0].question));
 
		 $("#questions").append(JSON.stringify(triviaQuestions[0].choices));
 
	 }
}




$('.startOver').hide();
$('.startOver').click(function() {
  
});




}