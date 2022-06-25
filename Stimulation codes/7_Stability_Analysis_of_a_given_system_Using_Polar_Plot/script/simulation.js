function checkAnswer1() {
  if (
    (document.form1.gainOne.value == 3.47) &&
    (document.form1.phaseOne.value == -131)&&
    (document.form1.gainTwo.value == 1.26) &&
    (document.form1.phaseTwo.value == -162)&&
    (document.form1.gainThree.value == 0.67) &&
    (document.form1.phaseThree.value == -180)&&
    (document.form1.gainFour.value == 0.59) &&
    (document.form1.phaseFour.value == -183)&&
    (document.form1.gainFive.value == 0.31) &&
    (document.form1.phaseFive.value == -198)&&
    (document.form1.gainSix.value == 0.004) &&
    (document.form1.phaseSix.value == -235)

  ) {
    document.getElementById("output1").style.color = "Green";
    document.getElementById("output1").innerHTML = "Correct Answer";
  } else {
    document.getElementById("output1").innerHTML = "Wrong Answer";
    document.getElementById("output1").style.color = "red";
  }
}

function showHint1() {
  document.getElementById("hint-display1").style.display = "block";
}

function showAnswer1() {
  document.getElementById("answer-display1").style.display = "block";
}



function checkAnswer2() {
  if (
    (document.form1.QgainOne.value == 11.64) &&
    (document.form1.QphaseOne.value == -194)&&
    (document.form1.QgainTwo.value == 2.68) &&
    (document.form1.QphaseTwo.value == -207)&&
    (document.form1.QgainThree.value == 1.07) &&
    (document.form1.QphaseThree.value == -217)&&
    (document.form1.QgainFour.value == 0.53) &&
    (document.form1.QphaseFour.value == -225)&&
    (document.form1.QgainFive.value == 0.06) &&
    (document.form1.QphaseFive.value == -259)

  ) {
    document.getElementById("output2").style.color = "Green";
    document.getElementById("output2").innerHTML = "Correct Answer";
  } else {
    document.getElementById("output2").innerHTML = "Wrong Answer";
    document.getElementById("output2").style.color = "red";
  }
}

function showHint2() {
  document.getElementById("hint-display2").style.display = "block";
}

function showAnswer2() {
  document.getElementById("answer-display2").style.display = "block";
}