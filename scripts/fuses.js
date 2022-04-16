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
    let j;
    title.innerHTML = labels[indexes.pop()];
    var order=[names[labels.indexOf(title.innerHTML)]];
    while (order.length!==4){
      j=names[Math.floor(Math.random() * labels.length)];
      if (!order.includes(j)) {
        order.push(j);
      }
    }
    shuffle(order);
}
function checkAnswer (number) {
  if (number===names[labels.indexOf(title.innerHTML)]) {
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
var labels = ['Fe', 'H<sub>2</sub>', 'H<sub>2</sub>O', 'NaF', 'H<sub>2</sub>S', 'BaO', 'CO<sub>2</sub>', 'Al', 'K<sub>2</sub>O', 'NO<sub>2</sub>', 'O<sub>2</sub>', 'Na', 'Mg', 'K', 'Ag', 'N<sub>2</sub>', 'Na<sub>2</sub>O', 'SO<sub>3</sub>', 'Cl<sub>2</sub>', 'Br<sub>2</sub>', 'NaCl'];
var names = [4, 2, 1, 3, 1, 3, 1, 4, 3, 1, 2, 4, 4, 4, 4, 2, 3, 1, 2, 2, 3];
var timer, correctCount = 0, wrongCount = 0;
var indexes = [];
var buttons = document.querySelectorAll("#wrapper button");
setOrder();
setTitles();
for (let i=0; i<4; ++i) {
  buttons[i].onclick = function(a) {
    return function(){
      checkAnswer(a+1);
    }
  }(i);
}
