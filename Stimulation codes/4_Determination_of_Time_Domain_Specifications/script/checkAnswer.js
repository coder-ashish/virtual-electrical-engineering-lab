function checkAnswer1(){
    if(
        (document.form1.naturalFrequency.value==4)&&
        (document.form1.dampingratio.value==0.5)&&
        (document.form1.dampingFrequency.value==3.464)&&
        (document.form1.riseTime.value==0.6046)&&
        (document.form1.peakTime.value==0.907)&&
        (document.form1.peakOvershoot.value==16.3)&&
        (document.form1.twoError.value==2)&&
        (document.form1.fiveError.value==1.5)
        ){
            document.getElementById("output").innerHTML="Correct Answer";
            document.getElementById("output").style.color = "Green";
        }else{
            document.getElementById("output").innerHTML="Wrong Answer";
            document.getElementById("output").style.color = "red";
        }
}

function checkAnswer2(){
    if(
        (document.form1.naturalFrequency.value==10)&&
        (document.form1.dampingratio.value==0.6)&&
        (document.form1.dampingFrequency.value==8)&&
        (document.form1.riseTime.value==0.2768)&&
        (document.form1.peakTime.value==0.3925)&&
        (document.form1.peakOvershoot.value==9.45)&&
        (document.form1.twoError.value==1.33)&&
        (document.form1.fiveError.value==1)
        ){
            document.getElementById("output").innerHTML="Correct Answer";
            document.getElementById("output").style.color = "Green";
        }else{
            document.getElementById("output").innerHTML="Wrong Answer";
            document.getElementById("output").style.color = "red";
        }
}

function showHint(){
    document.getElementById("hint").style.display = "block";
}



function showAnswer(){
    document.getElementById("answer").style.display = "block";
}