$(function(event) {
console.log("DOM is ready");


//get questions and answers from API and put into arrays
  function questions() {
  var request = new XMLHttpRequest();
  request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
  // var question = [];
  var answers = [];
  request.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);

    console.log(data);
      $(".q").html(data.results[0].question);
    answers.push(data.results[0].incorrect_answers[0]);
    answers.push(data.results[0].incorrect_answers[1]);
    answers.push(data.results[0].incorrect_answers[2]);
    answers.push(data.results[0].correct_answer);

    // for (var i = 0; i < answers.length; i++) {
      // var randomAns1 = answers[Math.floor(Math.random()*answers.length)];
      // var randomAns2 = answers[Math.floor(Math.random()*answers.length)];
      // var randomAns3 = answers[Math.floor(Math.random()*answers.length)];
      // var randomAns4 = answers[Math.floor(Math.random()*answers.length)];
      randomAns = answers.sort(function(a,b) {
        return 0.5 - Math.random();
      })
      console.log(randomAns);

      for (var i = 0; i < randomAns.length; i++) {
        $("#a"+ i).html(randomAns[i]);
      }


  })
  request.send();
  console.log(answers);
}
questions()


// when correct answer is clicked:
  // var answerButton = document.getElementById("a2");
  // answerButton.addEventListener("click", buttonClick);
  // var score = 0;
  // function buttonClick() {
  //     console.log("Correct answer!");
  //     score++;
  //       console.log(score)
  //       document.getElementById("userScore").innerHTML = score + " / 10";
  //     console.log(score + "/10");
  //         questions();
  //   }



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
