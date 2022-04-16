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
    var order=[names[language][labels.indexOf(title.innerHTML)]];
    while (order.length!==6){
      j=names[language][Math.floor(Math.random() * labels.length)];
      if (!order.includes(j)) {
        order.push(j);
      }
    }
    shuffle(order);
    for (let i=0; i<6; ++i) {
      buttons[i].innerHTML = order[i];
    }
}
function checkAnswer (number) {
  if (buttons[number].innerHTML===names[language][labels.indexOf(title.innerHTML)]) {
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
  if (language===0) {
    language=1;
  }
  else {
    language=0;
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
var labels = ['HCl', 'HF', 'HBr', 'HI', 'HNO<sub>3</sub>', 'H<sub>2</sub>S', 'H<sub>2</sub>SO<sub>4</sub>', 'H<sub>2</sub>SO<sub>3</sub>', 'H<sub>2</sub>CO<sub>3</sub>', 'H<sub>2</sub>SiO<sub>3</sub>', 'H<sub>3</sub>BO<sub>3</sub>', 'H<sub>3</sub>PO<sub>4</sub>', 'H<sub>3</sub>PO<sub>3</sub>'];
var names = [['Hydrochloric', 'Hydrofluoric', 'Hydrobromic', 'Hydroiodic', 'Nitric', 'Hydrosulfuric', 'Sulfuric', 'Sulfurous', 'Carbonic', 'Silicic', 'Boric', 'Phosphoric', 'Phosphorous'],
             ['Соляная', 'Фторо<wbr>водородная', 'Бромо<wbr>водородная', 'Иодо<wbr>водородная', 'Азотная', 'Серо<wbr>водородная', 'Серная', 'Сернистая', 'Угольная', 'Кремниевая', 'Борная', 'Фосфорная', 'Фосфористая']  ];
var timer, correctCount = 0, wrongCount = 0, language=0;
var indexes = [];
var buttons = document.querySelectorAll("#wrapper button");
setOrder();
setTitles();
for (let i=0; i<6; ++i) {
  buttons[i].onclick = function(a) {
    return function(){
      checkAnswer(a);
    }
  }(i);
}
