function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
function setOrder () {
  for (let i=0; i<labels.length; ++i) {
    indexes.push(i);
  }
  shuffle(indexes);
}
function setTitles () {
    title.innerHTML = labels[indexes.pop()];
}
function checkAnswer (number) {
  if (names[labels.indexOf(title.innerHTML)].includes(buttons[number].textContent)) {
    answer.textContent = "Correct";
    answer.style = "color: #00ff00";
    ++correctCount;
    correct.textContent = "Correct answers: " + correctCount;
  } else {
    answer.textContent = "Wrong";
    answer.style = "color: #ff0000";
    ++wrongCount;
    wrong.textContent = "Wrong answers: " + wrongCount;
  }
  if (indexes.length===0) {
    alert("You answered " + correctCount + " of " + (wrongCount+correctCount) + " questions correctly")
    setOrder();
    wrongCount = 0;
    correctCount = 0;
    correct.textContent = "Correct answers: 0";
    wrong.textContent = "Wrong answers: 0";
  }
  else {
    setTitles();
  }
  clearTimeout(timer);
  timer = setTimeout(function(){answer.textContent = "";}, 500);
}
var labels = ['Na(OH)', 'K(OH)', 'Li(OH)', 'Ba(OH)', 'Ca(OH)', 'Fe(OH)', 'Cu(OH)', 'Mg(OH)', 'Ni(OH)', 'NH4(OH)'];
var names = [['I'], ['I'], ['I'], ['II'], ['II'], ['II', 'III'], ['II'], ['II'], ['II'], ['I']];
var timer, correctCount = 0, wrongCount = 0;
var indexes = [];
var buttons = document.querySelectorAll("#wrapper button");
setOrder();
setTitles();
for (let i=0; i<3; ++i) {
  buttons[i].onclick = function(a) {
    return function(){
      checkAnswer(a);
    }
  }(i);
}
