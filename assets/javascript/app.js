$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				wrongAnswer();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'What fruit did Persephone eat to get her stuck in the Underworld?',
	possibleAnswers : ['A. Pear',
				 'B. Apple',
				 'C. Pomegranate',
				 'D. Cherry'],
	flags : [false, false, true, false],
	answer : 'C. Pomegranate'
};

var q2 = {
	question: 'Which Titan ate his/her children to protect his/her rule?',
	possibleAnswers: ['A. Cronos',
				 'B. Uranus',
				 'C. Gaea',
				 'D. Hyperion'],
	flags : [true, false, false, false],
	answer : 'A. Cronos'
};

var q3 = {
	question : 'In Greek Mythology, what is the offspring of a god and a mortal called?',
	possibleAnswers : ['A. Warrior',
				 'B. Abomination',
				 'C. Mutant',
				 'D. Hero'],
	flags : [false, false, false, true],
	answer : 'D. Hero'
};

var q4 = {
	question : 'Who slayed the nine headed Hydra?',
	possibleAnswers : ['A. Odysseus',
				 'B. Achilles',
				 'C. Theseus',
				 'D. Hercules'],
	flags : [false, false, false, true],
	answer : 'D. Hercules'
};

var q5 = {
	question : 'Who is the goddess of wisdom?',
	possibleAnswers : ['A. Aphrodite',
				 'B. Athena',
				 'C. Hera',
				 'D. Artemis'],
	flags : [false, true, false, false],
	answer : 'B. Athena'
};

var q6 = {
	question : 'Who holds the heavens on his shoulders?',
	possibleAnswers : ['A. Prometheus',
				 'B. Oedipus',
				 'C. Atlas',
				 'D. Dionysus'],
	flags : [false, false, true, false],
	answer : 'C. Atlas'
};

var q7 = {
	question : 'Who is the leader of the Argonauts?',
	possibleAnswers : ['A. Atlanta',
				 'B. Hercules',
				 'C. Jason (not to be confused with JSON)',
				 'D. Peleus'],
	flags : [false, false, true, false],
	answer : 'C. Jason'
};

var q8 = {
	question : 'Name the goddess that yields a bow?',
	possibleAnswers : ['A. Demeter',
				 'B. Medusa',
				 'C. Artemis',
				 'D. Calypso'],
	flags : [false, false, true, false],
	answer : 'C. Artemis'
};

var q9 = {
	question : 'Who opened a box full of trouble?',
	possibleAnswers : ['A. Nike',
				 'B. The Muses',
				 'C. Rhea',
				 'D. Pandora'],
	flags : [false, false, false, true],
	answer : 'D. Pandora'
};

var q10 = {
	question : 'What Greek god is the god of games?',
	possibleAnswers : ['A. Zues',
				  'B. Hermes',
				  'C. Ares',
				  'D. Athena'],
	flags : [false, true, false, false],
	answer : 'B. Hermes'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function wrongAnswer() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	wrongAnswer();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	wrongAnswer();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	wrongAnswer();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	wrongAnswer();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});