
var triviaQuestions = [
	{
		question: "What are the Koopalings from Super Mario games named after?",
		answers: {
			a: 'famous musicians',
			b: 'famous painters',
			c: 'famous architects'
		},
		correctAnswer: 'a'
	},
	{
		question: "What was the first game played in space?",
		answers: {
			a: 'PAC-MAN',
			b: 'Space Warrior',
			c: 'Tetris'
		},
		correctAnswer: 'c'
	},
	{
		question: "what was Sonic the hedgehog originally called?",
		answers: {
			a: 'Sonic the animal',
			b: 'Mr. Needlemouse',
			c: 'Syngin'
		},
		correctAnswer: 'b'
	},
	{
		question: "The entire GoldenEye 007 game on the N64 is how big?",
		answers: {
			a: '1 TB',
			b: '15 GB',
			c: '12 MB'
		},
		correctAnswer: 'c'
	},
	{
		question: "The average age of a U.S. gamer is?",
		answers: {
			a: '17',
			b: '35',
			c: '22'
		},
		correctAnswer: 'b'
	},
	{
		question: "What is Bowser called in Japan?",
		answers: {
			a: 'King Koopa',
			b: 'Akako',
			c: 'Shinrin-yoku'
		},
		correctAnswer: 'a'
	},
	{
		question: "<i>The New York Time</i> incorrectly described Mario and Luigi as?",
		answers: {
			a: 'janitor',
			b: 'firemen',
			c: 'farmers'
		},
		correctAnswer: 'a'
	},
	{
		question: "The creator of Pac-Man got the idea of the game while eating what food?",
		answers: {
			a: 'burger',
			b: 'sushi',
			c: 'pizza'
		},
		correctAnswer: 'c'
	},
];


$('.start').on('click', function(){

	var timer = 30;
	
	var downloadTimer = setInterval(function(){
		  document.getElementById("timer").innerHTML = timer;
		  timer -= 1;
		  if(timer <= 0){
			timer = 30;
			clearInterval(downloadTimer);
		  }
		}, 1000);
});

	
	function triviaGame() {

		triviaGame = triviaQuestions;

		
	}
	
	console.log(triviaGame);
