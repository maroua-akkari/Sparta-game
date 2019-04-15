$(function(event) {
console.log("DOM is ready");


//get questions and answers from API
  function questions() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");

  request.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);
    // console.log(data);
    $(".q").html(data.results[0].question);
    $("#a1").html(data.results[0].incorrect_answers[0]);
    $("#a2").html(data.results[0].correct_answer);
    $("#a3").html(data.results[0].incorrect_answers[2]);
    $("#a4").html(data.results[0].incorrect_answers[1]);
  })
  request.send();
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
