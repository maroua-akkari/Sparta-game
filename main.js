$(function(event) {
console.log("DOM is ready");


//get questions and answers from API and put into arrays
  function questions() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    var answers = [];
    request.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
//puts question in html and all answers into an empty array
      $(".q").html(data.results[0].question);
      answers.push(data.results[0].incorrect_answers[0]);
      answers.push(data.results[0].incorrect_answers[1]);
      answers.push(data.results[0].incorrect_answers[2]);
      answers.push(data.results[0].correct_answer);
//randomly sorts array - 1st two then second two and so on
      randomAns = answers.sort(function(a,b) {
        return 0.5 - Math.random();})

        for (var i = 0; i < randomAns.length; i++) {
          $("#a"+ i).html(randomAns[i]);}
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
  }
  document.getElementById("secs").innerHTML = time;
  timeUp.style.color = "red";
  // timeUp.innerHTML = "Time's up!";

}, 1000);





})
