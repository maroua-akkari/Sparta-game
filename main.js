$(function(event) {
console.log("DOM is ready");


  function quiz() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://opentdb.com/api.php?amount=12&category=22&difficulty=medium&type=multiple");
    request.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      console.log(data);
      question(data);
      ansChoices(data);
    });
    request.send();
  }
  quiz();

  var answers = [];
  var correctAns = [];
  var score = [];


  function question(data) {
    $("#q").html(data.results[0].question);
  }

  function ansChoices(data) {
    correctAns.push(data.results[0].correct_answer+" A");
    answers.push(data.results[0].incorrect_answers[0]);
    answers.push(data.results[0].incorrect_answers[1]);
    answers.push(data.results[0].incorrect_answers[2]);
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
        console.log("Correct answer!!");

        score++;
        document.getElementById("userScore").innerHTML = score + " / 10";

        console.log(answers);
        console.log(correctAns);

        answers = [];
        correctAns = [];
        console.log(answers);
        console.log(correctAns);
        quiz();


      } else {
      console.log("Wrong answer");
      answers = [];
      correctAns = [];
      quiz();
    }

  });



// counts down to zero
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
      $("#finalScore").html("Your final score is " + score + " /10");
    }
    document.getElementById("secs").innerHTML = time;
  }, 1000);




})
