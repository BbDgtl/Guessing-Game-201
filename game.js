/*This is the beginning of a guessing game for my Code201 course @ Codefellows
  on 10/31/2015*/
//Place your 3 guessing game ?'s into prompts
//Store user input into separate vars for each ?
//console log the results for each question
//In a sequence of alerts to user, give msg repeating answers they gave
//Creating if/else statements for each ?

//Adding functions to the game 11/06/2015
//Moved ALL alerts into the DOM.
var userName = prompt("What's your name?");

function wannaPlay() {
  var gameOn = prompt("Hello there, " + userName + ". Want to play a game?").toLowerCase();
    if ((gameOn === "yes") || (gameOn === "y")) {
      alert("Right on! Let's begin.");
    } else {
      alert("That's a shame, maybe next time!");
      return;
    }

//moving questions and answers into arrays
  var questions = ["Was I born here in Washington?", "Am I older than 30 years old?",
   "Do I have any pets?", "How many years have I lived in Seattle?", "Do I live within 5 miles of Code Fellows?",
   "I'm thinking of a number between 1 and 10, can you guess it?"];
  var answers = ["no", "yes", "yes", "13", "no", ranNum];

  var born = prompt(questions[0]).toLowerCase();
  console.log("correct answer is no");
    if ((born === "no") || (born === "n")) {
      document.getElementById("alert1").innerHTML = "That's correct " + userName + ", I was born in the Philippines.";
      document.getElementById("alert1").innerHTML = "<img src='http://guidetropical.com/wp-content/uploads/2013/08/Philippines-Islands.jpg' height='200px' width='200px'>";
    } else {
      document.getElementById("alert1").innerHTML = "I'm sorry, " + userName + ", but you're wrong. I was born in the Philippines.";
    }

  var age = prompt(questions[1]).toLowerCase();
  console.log("correct answer is yes");
    if ((age === "yes") || (age === "y")) {
      document.getElementById("alert2").innerHTML = "That's correct, " + userName + "! I am 35 (ugh) years old.";
      document.getElementById("alert2").innerHTML = "<img src='https://img0.etsystatic.com/026/0/8640774/il_340x270.597273002_sdhj.jpg' height='200px' width='200px'>";
    } else {
      document.getElementById("alert2").innerHTML = "That's not right " + userName + ", I am actually 35 years old.";
    }

  var pets = prompt(questions[2]).toLowerCase();
  console.log("correct answer is yes");
    if ((pets === "yes") || (pets === "y")) {
      document.getElementById("alert3").innerHTML = "That's correct, " + userName + "! I have a big goofy dog named Rocky!";
      document.getElementById("alert3").innerHTML = "<img src='https://scontent-sea1-1.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/11129538_10152949059123250_1361773881257655722_n.jpg?oh=9b64c580968828f642b747ea453a821e&oe=56BAF96B' height='200px' width='200px'>";
    } else {
      document.getElementById("alert3").innerHTML = "Wrong! " + userName + ", I have a dog named Rocky... do you even know me?";
    }

//including a 4th ? to add a numerical value
  var timeHere = prompt(questions[3]);
    console.log("13 years");
      if (timeHere > "13") {
        document.getElementById("alert4").innerHTML = "Too high. How old do you think I am, " + userName + "?";
      } else if (timeHere < "13") {
        alert("Too low, sorry.");
      } else {
        document.getElementById("alert4").innerHTML = "Correct! I've lived here for 13 years now.";
        document.getElementById("alert4").innerHTML = "<img src='http://actionmovingcompany.com/wp-content/uploads/2015/07/seattle-storage-service.jpg' height='200px' width='200px' >";
      }

//adding a 5th yes/no question to the game
  var commute = prompt(questions[4]);
    console.log("No, I live 7 miles away.");
      if ((commute === "yes") || (commute === "y")) {
        document.getElementById("alert5").innerHTML = "Nope. Sorry, " + userName + ". I live about 7 miles south of Codefellows.";
      } else {
        document.getElementById("alert5").innerHTML = "Correct! I live about 7 miles south of Codefellows.";
        document.getElementById("alert5").innerHTML = "<img src='https://cdn.evbuc.com/images/1432181/3111333942/1/logo.png'>";
      }

//adding a 6th question to the game, this time with a numeric value.
var ranNum = Math.floor(Math.random() * 10) + 1;
var tryAGuess = "I'm thinking of a number between 1 and 10, can you guess it?";
var turns = 5;
console.log("It is " + ranNum);
  while (turns > 0) {
    var guess = Number(prompt(questions[5] + " You have " + turns + " chances."));
    if (guess === ranNum) {
      document.getElementById("alert6").innerHTML = "Correct! You win all the things!";
      document.getElementById("alert5").innerHTML = "<img src='http://burienlittletheatre.org/blog/wp-content/uploads/2015/09/Modern-fashion-party.jpeg' height='200px' width='200px'>";
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
}

wannaPlay();





