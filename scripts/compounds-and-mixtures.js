function setLabels() {
  var order=[];
  var q;
  while (order.length!==6){
    q=labels[Math.floor(Math.random() * labels.length)];
    if (!order.includes(q)) {
      order.push( q);
    }
  }
  for (var i=0; i<6; ++i) {
    names[i].textContent=order[i];
    selects[i].selectedIndex= -1;
    selects[i].style ="border-color: transparent";
    names[i].style ="border-color: transparent";
  }
  button.onclick = checkLabels;
  button.textContent = "Check";
}
function checkLabels() {
  for (var i=0; i<6; ++i) {
    if (selects[i].selectedIndex !==-1 && selects[i].options[selects[i].selectedIndex].text === values[labels.indexOf(names[i].textContent)]) {
      selects[i].style="background-color: #009900; border-color: #006600";
      names[i].style ="background-color: #009900; border-color: #006600";
    }
    else {
      selects[i].style ="background-color: #990000; border-color: #660000";
      names[i].style ="background-color: #990000; border-color: #660000";
    }
  }
  button.onclick = setLabels;
  button.textContent = "Next";
}
labels=['Поваренная соль', 'Сульфат натрия', 'Углекислый газ', 'Гидрооксид железа', 'Кислород', 'Азот', 'Натрий', 'Водород', 'Сера', 'Кипячённая вода', 'Родниковая вода', 'Сталь', 'Чугун', 'Бронза', 'Сахар', 'Молоко', 'Хлор', 'Соляная кислота', 'Маслянная краска'];
values=['Complex', 'Complex', 'Complex', 'Complex', 'Simple', 'Simple', 'Simple', 'Simple', 'Simple', 'Complex', 'Mixture', 'Mixture', 'Mixture', 'Mixture', 'Complex', 'Mixture', 'Simple', 'Complex', 'Mixture'];
var i;
var names = document.getElementsByClassName("compound");
var selects=document.querySelectorAll("select");
var button = document.querySelector("#check");
setLabels()
