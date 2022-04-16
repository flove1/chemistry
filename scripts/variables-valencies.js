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
    title.textContent = labels[indexes.pop()];
    for (var i=0; i<7; i++) {
      buttons[i].className="unpressed";
    }
    check.onclick = checkButtons;
    check.textContent = "Check";
}
function press(element) {
    if (element.className==="unpressed") {
      element.className="pressed";
    }
    else {
      element.className="unpressed";
    }
}
function checkButtons() {
  index=labels.indexOf(title.textContent);
  var wrong=0;
  for (var i=0; i<7; ++i) {
    if (names[index].includes(buttons[i].textContent) && buttons[i].className==="pressed") {
      buttons[i].className="correct";
    }
    else if (names[index].includes(buttons[i].textContent) && buttons[i].className==="unpressed") {
      buttons[i].className="needed";
      wrong++;
    }
    else if (!names[index].includes(buttons[i].textContent) && buttons[i].className==="pressed") {
      buttons[i].className="wrong";
      wrong++;
    }
  }
  if (wrong==0) {
    answer.textContent = "Correct";
    answer.style = "color: #00ff00";
    ++correctCount;
    correctT.textContent = "Correct answers: " + correctCount;
  }
  else {
    answer.textContent = "Wrong";
    answer.style = "color: #ff0000";
    ++wrongCount;
    wrongT.textContent = "Wrong answers: " + wrongCount;
  }
  check.onclick = setTitles;
  check.textContent = "Next";
  clearTimeout(timer);
  timer = setTimeout(function(){answer.textContent = "";}, 1000);
  if (indexes.length===0) {
    alert("You answered " + correctCount + " of " + (wrongCount+correctCount) + " questions correctly")
    setOrder();
    wrongCount = 0;
    correctCount = 0;
    correctT.textContent = "Correct answers: 0";
    wrongT.textContent = "Wrong answers: 0";
  }
}
labels=['S', 'N', 'P', 'Fe', 'Cu', 'C', 'Si', 'Cl', 'Br', 'I'];
names=[['IV', 'VI', 'II'], ['IV', 'II', 'I', 'III', 'V'], ['V', 'III'], ['III', 'II'], ['I', 'II'], ['IV', 'II'], ['IV', 'II'], ['V', 'I', 'VII', 'III'], ['V', 'I', 'VII', 'III'], ['V', 'I', 'VII', 'III']];
var buttons=document.querySelectorAll("#wrapper button")
var index;
var indexes=[];
var timer, correctCount = 0, wrongCount = 0, language=0;
var wrongT=document.querySelector("#answers #wrong")
var correctT=document.querySelector("#answers #correct")
setOrder();
setTitles();
