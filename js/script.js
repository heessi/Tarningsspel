var resultOfDices = [];
var sumOfDices = 0;
var numOfRolls = 0;

function randomNr()
{

	var r = Math.random();
	if(r < (1/6))
		return 1;
	else if(r <= (2/6))
		return 2;
	else if(r <= (3/6))
		return 3;
	else if(r <= (4/6))
		return 4;
	else if(r <= (5/6))
		return 5;
	else if(r <= (6/6))
		return 6;

}

function rollDice()
{

	document.getElementById("rule1").style.color = '#777777';
	var inputValue = document.getElementById("guessResult").value;

	if(((inputValue > 2) && (inputValue < 19)) && (numOfRolls < 10))
	{

		// Kastar tärningen 4 gånger
		for (var i = 0; i < 4; i++)
		{
			resultOfDices.push(randomNr());
			sumOfDices += resultOfDices[resultOfDices.length - 1];
		}

		// Summerar ut de tre första tärningarna i ett kast
		var sumOfFirstThree = 0;
		for (var i = 3; i > 0; i--)
		{

			sumOfFirstThree += resultOfDices[resultOfDices.length - i];

		}

		// Kontrollerar om summan av de tre första kasten motsvarar chansningen
		if (sumOfFirstThree == inputValue)
		{

			resultOfDices[resultOfDices.length - 1] = (resultOfDices[resultOfDices.length - 1] * inputValue);
			guessInfo.className = "correctGuess";
			//document.getElementById("guessInfo").style.background="#e8f5e9";
			document.getElementById("guessInfo").innerHTML = "Du chansade rätt! <br />Den fjärde tärningens värde multiplicerades till: " + resultOfDices[resultOfDices.length - 1];
		}

		else
		{
			guessInfo.className = "wrongGuess";
			document.getElementById("guessInfo").innerHTML = "Summan av de tre första tärningarna summerades till: " + sumOfFirstThree + "<br />Du chasnade på: " + inputValue;
		}

		// Skriver ut tärningarnas resultat
		for (var i = 4; i > 0; i--)
		{

			if (i == 4)
				document.getElementById('dicesResult').innerHTML = " ";

			var listLength = resultOfDices.length;
			document.getElementById('dicesResult').innerHTML += "Tärning " + (5-i) + ": " + resultOfDices[listLength - i] + "<br />";

		}

		numOfRolls++;

		document.getElementById("rule2").innerHTML = "Du har  " + (10 - numOfRolls) + " kast kvar.";

		if (numOfRolls == 10)
		{
			printResult();
		}

	}
	else if(numOfRolls >= 10)
		document.getElementById("rule2").innerHTML = "Du har inga kast kvar. Starta en ny omgång."
	else
	{
		document.getElementById("rule1").style.color = '#c10000';
	}
}

function printResult()
{

	document.getElementById("gameOver").style.display = "block";
	document.getElementById("gameOver").innerHTML =
	"Spelet är över! Den totala summan blev: " + sumOfDices;

}

function newRound()
{
	
	resultOfDices = [];
	sumOfDices = 0;
	numOfRolls = 0;
	guessInfo.className = "";
	document.getElementById('dicesResult').innerHTML = "";
	document.getElementById('guessInfo').innerHTML = "";
	document.getElementById("rule1").style.color = '#777777';
	document.getElementById("rule2").innerHTML = "Du har totalt 10 kast på dig";
	document.getElementById("gameOver").style.display = "none";

}