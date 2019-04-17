$(function(event) {
console.log("DOM is ready");

$('#startingModal').modal('show');


  function getQuestions() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://opentdb.com/api.php?amount=20&category=22&difficulty=medium&type=multiple");
    request.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      fillInQAndA(data);
    });
    request.send();
  }
  getQuestions();

  function fillInQAndA(data) {
    questions = data;
    question(data);
    ansChoices(data);
  }

  var answers = [];
  var correctAns = [];
  var score = [];
  var questionNumber = 0;
  var questions;


  function question(data) {
    $("#q").html(data.results[questionNumber].question);
  }

  function ansChoices(data) {
    correctAns.push(data.results[questionNumber].correct_answer + " A");
    answers.push(data.results[questionNumber].incorrect_answers[0]);
    answers.push(data.results[questionNumber].incorrect_answers[1]);
    answers.push(data.results[questionNumber].incorrect_answers[2]);
    answers.push(correctAns[0]);

    randomAns = answers.sort(function(a,b) {
      return 0.5 - Math.random();
    });
      for (var i = 0; i < randomAns.length; i++) {
        $("#a"+ i).html(randomAns[i]);
      }
  }



    $(".choice").on("click", function(){
      if (this.innerHTML == correctAns[0]) {
        var audio = $("#correctSound")[0];
        audio.play();
        // console.log("Correct answer!!");
        score++;
        document.getElementById("userScore").innerHTML ="Correct answers: " + score;
        answers = [];
        correctAns = [];
        questionNumber++;
        fillInQAndA(questions);
      } else {
      // console.log("Wrong answer");
      var audio = $("#incorrectSound")[0];
      audio.play();
      answers = [];
      correctAns = [];
      questionNumber++;
      fillInQAndA(questions);
    }

  });

  $("#start").on("click", function(){
  var timer = setInterval(function(){
    var time = document.getElementById('secs').innerHTML;
    if(time > 0) {
      time--;
    } else {
      clearInterval(timer);
    }
    if (time <= 0) {
      $(".secs").html("Time's up!").css("color", "red");
      $('#myModal').modal('show');
      $("#finalScore").html("You answered " + score + " questions correctly");
    }
    document.getElementById("secs").innerHTML = time;
  }, 1000);
  })



})
