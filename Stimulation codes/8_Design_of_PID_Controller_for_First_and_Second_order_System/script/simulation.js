function checkAnswer8() {
  if (
    document.form8.delayTime.value == 0.6&&
    document.form8.timeConstant.value == 1.8
  ) {
    document.getElementById("output8").innerHTML = "Correct Answer";
    document.getElementById("output8").style.color = "Green";
  } else {
    document.getElementById("output8").innerHTML = "Wrong Answer";
    document.getElementById("output8").style.color = "red";
  }
}

function showHint8() {
  document.getElementById("hint-display8").style.display = "block";
}

function showAnswer8() {
  document.getElementById("answer-display8").style.display = "block";
}

function checkAnswer7() {
  if (
    document.form7.crossoverFrequency.value == 3.6 &&
    document.form7.crossoverAngle.value == 1.2 &&
    document.form7.phaseMargin.value == 0.3
  ) {
    document.getElementById("output7").innerHTML = "Correct Answer";
    document.getElementById("output7").style.color = "Green";
  } else {
    document.getElementById("output7").innerHTML = "Wrong Answer";
    document.getElementById("output7").style.color = "red";
  }
}

function showHint7() {
  document.getElementById("hint-display7").style.display = "block";
}

function showAnswer7() {
  document.getElementById("answer-display7").style.display = "block";
}

function showResponse(){
  document.getElementById("imgGraph").style.display="block";
}