$(function(event) {
console.log("DOM is ready");

$('#startingModal').modal('show');

var difficulty = [];
$(".difficulty").on("click", function(){
  var options1 = (this.innerHTML);
  if (options1 == "Easy") {
    difficulty.push("easy");
  } else if (options1 == "Medium") {
    difficulty.push("medium");
  } else if (options1 == "Hard") {
    difficulty.push("hard");
  }
})

var category = [];
$(".category").on("click", function() {
  var options2 = (this.innerHTML)
  if (options2 == "Video Games") {
    category.push(15);
  } else if (options2 == "Music") {
    category.push(12);
  } else if (options2 == "Movies") {
    category.push(11);
  } else if (options2 == "Sports") {
    category.push(21);
  }
})

$("#start").on("click", function(){
  getQuestions(difficulty, category)
})



  function getQuestions(difficulty, category) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://opentdb.com/api.php?amount=60&category="+ category +"&difficulty="+ difficulty + "&type=multiple");
    request.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      console.log(data);
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
    correctAns.push(data.results[questionNumber].correct_answer);
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
        score++;
        document.getElementById("userScore").innerHTML ="Correct answers: " + score;
        answers = [];
        correctAns = [];
        questionNumber++;
        fillInQAndA(questions);
      } else {
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
      $("#myConfetti").html("<canvas id='my-canvas'></canvas>")
      var confettiSettings = { target: 'my-canvas' };
      var confetti = new ConfettiGenerator(confettiSettings);
      confetti.render();
      $('#myModal').modal('show');
      $("#finalScore").html("You answered " + score + " questions correctly");
    }
    if (time == 5) {
      var audio = $("#countdownSound")[0];
      audio.play();
    }
    document.getElementById("secs").innerHTML = time;
  }, 1000);
  })



})
