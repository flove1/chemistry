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
    title.textContent = labels[indexes.pop()];
    var order=[names[language][labels.indexOf(title.textContent)]];
    while (order.length!==6){
      j=names[language][Math.floor(Math.random() * labels.length)];
      if (!order.includes(j)) {
        order.push(j);
      }
    }
    shuffle(order);
    for (let i=0; i<6; ++i) {
      buttons[i].textContent = order[i];
    }
}
function checkAnswer (number) {
  if (buttons[number].textContent===names[language][labels.indexOf(title.textContent)]) {
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
  clearTimeout(timer);
  timer = setTimeout(function(){answer.textContent = "";}, 1000);
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
}
var labels = ["N", "Al", "Ba", "B", "Br", "H", "Fe", "Au", "I", "K", "Ca", "O", "Si", "Mg", "Mn", "Ag", "Cu", "Na", "Hg", "S", "C", "Pb", "P", "F", "Zn", "Be", "Li", "Cl", "Cr", "As", "Se", "W"];
var names = [["Nitrogen", "Aluminum", "Barium", "Boron", "Bromine", "Hydrogen", "Iron", "Gold", "Iodine", "Potassium", "Calcium", "Oxygen", "Silicon", "Magnesium", "Manganese", "Silver", "Copper", "Sodium", "Mercury", "Sulfur", "Carbon", "Lead", "Phosphorus", "Fluorine", "Zinc", "Beryllium", "Lithium", "Clhorine", "Chromium", "Arsenic", "Selenium", "Tungsten"],
             ['Азот', 'Алюминий', 'Барий', 'Бор', 'Бром', 'Водород', 'Железо', 'Золото', 'Йод', 'Калий', 'Кальций', 'Кислород', 'Кремний', 'Магний', 'Марганец', 'Серебро', 'Медь', 'Натрий', 'Ртуть', 'Сера', 'Углерод', 'Свинец', 'Фосфор', 'Фтор', 'Цинк', 'Берилий', 'Литий', 'Хлор', 'Хром', 'Мышьяк', 'Селен', 'Вольфрам']];
var timer, correctCount = 0, wrongCount = 0, language=0;
var indexes = [];
var buttons = document.querySelectorAll("#wrapper button");
var correct= document.getElementById("correct")
var wrong= document.getElementById("wrong")
var title= document.querySelector("#main #title")
setOrder();
setTitles();
for (let i=0; i<6; ++i) {
  buttons[i].onclick = function(a) {
    return function(){
      checkAnswer(a);
    }
  }(i);
}
