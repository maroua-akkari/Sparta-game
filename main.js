$(function(event) {
console.log("DOM is ready");

  function quiz() {
    var request = new XMLHttpRequest();
    request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
    request.addEventListener("load", function() {
      var data = JSON.parse(this.responseText);
      // console.log(data);
      $(".q").html(data.results[0].question);
      ansChoices(data);
    });
    request.send();
  } quiz();

  var answers = [];
  var correctAns = [];

  function ansChoices(data) {
    correctAns.push(data.results[0].correct_answer+" A");
    answers.push(data.results[0].incorrect_answers[0]);
    answers.push(data.results[0].incorrect_answers[1]);
    answers.push(data.results[0].incorrect_answers[2]);
    answers.push(correctAns[0]);

    console.log(answers);
    randomAns = answers.sort(function(a,b) {
      return 0.5 - Math.random();})
      for (var i = 0; i < randomAns.length; i++) {
        $("#a"+ i).html(randomAns[i]);
      }

      if (true) {

      }


      $(".choice").on("click", function(){
        console.log("clicked this answer");
      })

      $(".correct").on("click", function(){
        console.log("correct answer clicked!");
      })



      for (var i = 0; i < correctAns.length; i++) {
        var correct = correctAns[i];
        $("#a3").addClass("correct");
      }

    console.log(answers);
    console.log(correctAns);
  }

      // var answerButton = document.getElementById("a");
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
        clearInterval(timer);
      }
      if (time == 0) {
        $(".secs").html("Time's up!").css("color", "red");
      }
      document.getElementById("secs").innerHTML = time;
    }, 1000);





  // getAns();

  // function ansChoices() {
  //   getAns();
  //   randomAns = answers.sort(function(a,b) {
  //     return 0.5 - Math.random();})
  //     for (var i = 0; i < randomAns.length; i++) {
  //       // var ans = randomAns[i];
  //       $("#a"+ i).html(randomAns[i]);
  //     }
  //     console.log(randomAns);
  // } ansChoices();




//get questions and answers from API and put into arrays
//   function questions() {
//     var request = new XMLHttpRequest();
//     request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
//     // var answers = [];
//     request.addEventListener("load", function() {
//       var data = JSON.parse(this.responseText);
//       console.log(data);
// //puts question in html and all answers into an empty array
//       $(".q").html(data.results[0].question);
//       // answers.push(data.results[0].incorrect_answers[0]);
//       // answers.push(data.results[0].incorrect_answers[1]);
//       // answers.push(data.results[0].incorrect_answers[2]);
//       // answers.push(data.results[0].correct_answer + " A");
//     })
//     request.send();
//   } questions();

  // function ansChoices() {
  //   var request = new XMLHttpRequest();
  //   request.open("GET", "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple");
  //   var answers = [];
  //   request.addEventListener("load", function() {
  //     var data = JSON.parse(this.responseText);
  //     answers.push(data.results[0].incorrect_answers[0]);
  //     answers.push(data.results[0].incorrect_answers[1]);
  //     answers.push(data.results[0].incorrect_answers[2]);
  //     answers.push(data.results[0].correct_answer + " A");
  //   })
  //   request.send();
  //     console.log(answers);
  // } ansChoices();

//randomly sorts array - 1st two then second two and so on
      // randomAns = answers.sort(function(a,b) {
//         return 0.5 - Math.random();})
// //put a random answer in each of the html buttons
//         for (var i = 0; i < randomAns.length; i++) {
//           var ans = randomAns[i];
//           $("#a"+ i).html(ans);
//         }
//             console.log(randomAns);
//     });
//     request.send();
  //
  // }
  // questions()





// when correct answer is clicked:
  // if (answerButton == answers.correct_answer) {
  //
  // }


  // var answerButton = document.getElementById("a");
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


//
// // counts down to zero
//   var timer = setInterval(function(){
//     var time = document.getElementById('secs').innerHTML;
//     if(time > 0) {
//       time--;
//     } else {
//       clearInterval(timer);
//     }
//     if (time == 0) {
//       $(".secs").html("Time's up!").css("color", "red");
//     }
//     document.getElementById("secs").innerHTML = time;
//   }, 1000);





})
