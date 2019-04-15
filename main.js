$(function(event) {
console.log("DOM is ready");


//get questions and answers from API and put into arrays
  function questions() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
  var question = [];
  var answers = [];
  request.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);
    question.push(data.results[0].question);
    answers.push(data.results[0].incorrect_answers[0]);
    answers.push(data.results[0].incorrect_answers[1]);
    answers.push(data.results[0].incorrect_answers[2]);
    answers.push(data.results[0].correct_answer);
    $(".q").html(question);

    for (var i = 0; i < answers.length; i++) {
      console.log(answers[i]);
    }




    $("#multipleChoice").html(answers);
    // $("button").html(answers);
    // $("#a1").html(data.results[0].incorrect_answers[0]);
    // $("#a2").html(data.results[0].correct_answer);
    // $("#a3").html(data.results[0].incorrect_answers[2]);
    // $("#a4").html(data.results[0].incorrect_answers[1]);
  })
  request.send();
  console.log(question);
  console.log(answers);
}
questions()


// when correct answer is clicked:
  var answerButton = document.getElementById("a2");
  answerButton.addEventListener("click", buttonClick);
  var score = 0;
  function buttonClick() {
      console.log("Correct answer!");
      score++;
        console.log(score)
        document.getElementById("userScore").innerHTML = score + " / 10";
      console.log(score + "/10");
          questions();
    }



// counts down to zero
var timer = setInterval(function(){
  var time = document.getElementById('secs').innerHTML;
  if(time > 0) {
    time--;
  } else {
    console.log("Ran out of time!");
    clearInterval(timer);
  }
  if (time == 0) {
    var timeUp = document.getElementById('secs');
    timeUp.style.color = "red";
    // timeUp.innerHTML = "Time's up!";
  }
  document.getElementById("secs").innerHTML = time;
}, 1000);





})
