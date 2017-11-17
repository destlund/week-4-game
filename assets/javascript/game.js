$(document).ready(function() {
	var mushroom1;
	var mushroom2;
	var mushroom3;
	var mushroom4;
	var toxicity;
	var score = 0
	var wins = 0
	var losses = 0



	function gameStart() {
		

		// assign random numbers to the mushrooms
		mushroom1 = Math.floor(Math.random() * 12 + 1);
		console.log("Mushroom 1: " + mushroom1);
		mushroom2 = Math.floor(Math.random() * 12 + 1);
		console.log("Mushroom 2: " + mushroom2);
		mushroom3 = Math.floor(Math.random() * 12 + 1);
		console.log("Mushroom 3: " + mushroom3);
		mushroom4 = Math.floor(Math.random() * 12 + 1);
		console.log("Mushroom 4: " + mushroom4);
		toxicity = Math.floor(Math.random() * 101 + 19);
		console.log("Toxicity: " + toxicity);

		// show stuff to the user
		$('#toxicity').text(toxicity);
		$('#score').text(score);
		$('#wins').text(wins);
		$('#losses').text(losses);

		// add mushroom values to score
		$('#mushroom1').click(function() {
			lastScore = score
			score = (lastScore + mushroom1);
			$('#score').text(score);
		})
		$('#mushroom2').click(function() {
			score = (score + mushroom2);
			$('#score').text(score);
		})
		$('#mushroom3').click(function() {
			score = (score + mushroom3);
			$('#score').text(score);
		})
		$('#mushroom4').click(function() {
			score = (score + mushroom4);
			$('#score').text(score);
		})


		// victory condition
		$(this).click(function() {
			if (score == toxicity) {
				wins++;
				$('#intro').text("You win! Have another go?");
				score = 0;
				gameStart();

			}
			else if (score > toxicity) {
				losses++;
				$('#intro').text("You've been poisoned. Try again?");
				score = 0;
				gameStart();
			}
		})
	}


	gameStart()
})