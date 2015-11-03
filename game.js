/*This is the beginning of a guessing game for my Code201 course @ Codefellows
  on 10/31/2015*/
//Place your 3 guessing game ?'s into prompts
//Store user input into separate vars for each ?
//console log the results for each question
//In a sequence of alerts to user, give msg repeating answers they gave
//Creating if/else statements for each ?
var userName = prompt("First of all, what's YOUR name?");
var gameOn = prompt("Hello there, " + userName + " want to play a game?").toLowerCase();
  if ((gameOn === "yes") || (gameOn === "y")) {
    alert("Right on! Let's begin.");
  } else {
    alert("Too bad, I don't know how to stop!");
  }

var born = prompt(userName + ", was I born here in Washington?").toLowerCase();
console.log("correct answer is no");
alert("You guessed: " + born);
  if ((born === "no") || (born === "n")) {
    alert("That's correct " + userName + ", I was born in the Philippines, but I have no memory of it.");
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
    } else if (timeHere < 13) {
      alert("Too low, sorry.");
    } else {
      alert("Correct! I've lived here for 13 years now.");
    }

