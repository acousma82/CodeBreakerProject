let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    let solution = setHiddenFields;
    
    if(answer.value == "" || attempt.value == "") 
    {
      solution();
    };

    if(!validateInput(input.value)){
        return false;
    }
    else {
        attempt.value++;
    };

    let results = getResults(input.value);

    if (results) { 
        setMessage("You Win! :)");
        showAnswer(true);
        showReplay();
}
    else if (results == false || attempt >= 10) { 
        setMessage("You Lose! :(");
        showAnswer(false);
        showReplay();
}
    else { setMessage("Incorrect, try again.")};
    //add functionality to guess function here
};

function setHiddenFields() {
  
  answer.value = (Math.floor(Math.random() * 10000)).toString();
  while (answer.length < 4) { answer = "0" + answer.value};
  attempt.value = 0;
  return answer;
};

function setMessage(content){

let mesSage = document.getElementById('message');
    mesSage.innerHTML = content;

}

function validateInput(userIn){

if (userIn.length == 4){
    return true
}
else {
    setMessage("Guesses must be exactly 4 characters long.");
    return false
};

};

function getResults (input){
let html = '<div class="row"><span class="col-md-6">' + input + '</span><div class="col-md-6">';
let results = document.getElementById('results');
let correct = 0;;

for(i = 0; i < input.length; i++)
    
    {
        if(input.charAt(i) == answer.value.charAt(i))
        {
            html += '<span class="glyphicon glyphicon-ok"></span>';
            correct++;
        } else if (answer.value.includes(input.charAt(i)) === true) {                  //index of bestimmt den index an dem der Wert in einem array vorkommt. 
            html += '<span class="glyphicon glyphicon-transfer"></span>';
        } else {
            html += '<span class="glyphicon glyphicon-remove"></span>';
        }
    };
       html += '</div></div>';
       results.innerHTML += html;

if (correct == input.length){return true }

else{ return false};

};

function showAnswer(usanswer){
let code = document.getElementById("code");

   

    if (usanswer){
        code.className += " success";
    }
    else {
        code.className += " failure";
    };
 code.innerHTML = answer.value;

};

function showReplay(){
let guessingDiv = document.getElementById('guessing-div');
let replayDiv = document.getElementById('replay-div');

guessingDiv.style = "display: none";
replayDiv.style = "display: block";

};