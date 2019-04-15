$(function(event) {
console.log("DOM is ready");



  var request = new XMLHttpRequest();
  request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");

  request.addEventListener("load", function() {
    var data = JSON.parse(this.responseText);
    console.log(data);
    $(".q").html(data.results[0].question);
    $(".a1").html(data.results[0].incorrect_answers[0]);
    $(".a2").html(data.results[0].correct_answer);
    $(".a3").html(data.results[0].incorrect_answers[2]);
    $(".a4").html(data.results[0].incorrect_answers[1]);
  })
  request.send();







})
