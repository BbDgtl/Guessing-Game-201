/*This is the beginning of a guessing game for my Code201 course @ Codefellows
  on 10/31/2015*/
//Place your 3 guessing game ?'s into prompts
//Store user input into separate vars for each ?
//console log the results for each question
//In a sequence of alerts to user, give msg repeating answers they gave
//Creating if/else statements for each ?
var userName = prompt("First of all, what's YOUR name?");
var gameOn = prompt("Hello there, " + userName + ". Want to play a game?").toLowerCase();
  if ((gameOn === "yes") || (gameOn === "y")) {
    alert("Right on! Let's begin.");
  } else {
    alert("Too bad, I don't know how to stop!");
  }

var born = prompt(userName + ", was I born here in Washington?").toLowerCase();
console.log("correct answer is no");
alert("You guessed: " + born);
  if ((born === "no") || (born === "n")) {
    alert("That's correct " + userName + ", I was born in the Philippines.");
  } else {
    alert("I'm sorry, " + userName + ", but you're wrong. I was born in the Philippines.");
  }

var age = prompt("Am I older than 30 years old?").toLowerCase();
console.log("correct answer is yes");
alert("You guessed: " + age);
  if ((age === "yes") || (age === "y")) {
    alert("That's correct, " + userName + "! I am 35 (ugh) years old.");
  } else {
    alert("That's not right " + userName + ", I am actually 35 years old.");
  }

var pets = prompt("Do I have any pets?").toLowerCase();
console.log("correct answer is yes");
alert("You guessed: " + pets);
  if ((pets === "yes") || (pets === "y")) {
    alert("That's correct, " + userName + "! I have a big goofy dog named Rocky!");
  } else {
    alert("Wrong! " + userName + ", I have a dog named Rocky... do you even know me?");
  }

//including a 4th ? to add a numerical value
var timeHere = prompt("How many years have I lived in Seattle?");
  console.log("13 years");
  alert("You guessed: " + timeHere);
    if (timeHere > "13") {
      alert("Too high. How old do you think I am, " + userName + "?");
    } else if (timeHere < "13") {
      alert("Too low, sorry.");
    } else {
      alert("Correct! I've lived here for 13 years now.");
    }

//adding a 5th yes/no question to the game
var commute = prompt("Do I live within 5 miles of Codefellows?");
  console.log("No, I live 7 miles away.");
  alert("You guessed: " + commute);
    if ((commute === "yes") || (commute === "y")) {
      alert("Nope. Sorry, " + userName + ". I live about 7 miles south of Codefellows.");
    } else {
      alert("Correct! I live about 7 miles south of Codefellows.");
    }

//adding a 6th question to the game, this time with a numeric value.
var ranNum = Math.floor(Math.random() * 10) + 1;
var tryAGuess = "I'm thinking of a number between 1 and 10, can you guess it?";
var turns = 5;
  console.log("It is " + ranNum);
  while (turns > 0) {
    var guess = Number(prompt(tryAGuess + " You have " + turns + " turns left!"));
    if (guess === ranNum) {
      alert("Correct! You win all the things!");
      break;
    } else {
      tryAGuess = "WRONG!";
      if (guess < ranNum) {
        alert(tryAGuess + " Too low.");
      } else if (guess > ranNum) {
        alert(tryAGuess + " Too high.");
      }
      turns = turns - 1;
    }
  }





