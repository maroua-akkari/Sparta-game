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
  if (category == "Video Games") {
    options2.push("15");
  } else if (category == "Music") {
    options2.push("12");
  } else if (category == "Movies") {
    options2.push("11");
  } else if (category == "General Knowledge") {
    options2.push("9");
  }
})

$("#start").on("click", function(){
  getQuestions(category, difficulty)
})




// $(".difficulty").on("click", function() {
//   var difficulty = (this.innerHTML)
//   if (difficulty == "Easy") {
//     getQuestions("easy");
//   } else if (category == "Medium") {
//     getQuestions("medium");
//   } else if (category == "Hard") {
//     getQuestions("hard");
//   }
// })
//
// $(".category").on("click", function() {
//   var category = (this.innerHTML)
//   if (category == "Video Games") {
//     getQuestions("15");
//   } else if (category == "Music") {
//     getQuestions("12");
//   } else if (category == "Movies") {
//     getQuestions("11");
//   } else if (category == "General Knowledge") {
//     getQuestions("9");
//   }
// })


  function getQuestions(category, difficulty) {
    var request = new XMLHttpRequest();
    request.open("GET", "https://opentdb.com/api.php?amount=5&category="+ category +"&difficulty="+ difficulty + "&type=multiple");
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
