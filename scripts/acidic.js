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
function setLabels() {
    orderCompounds = [];
    orderNames = [];
    var q;
    while (orderCompounds.length !== 6) {
        q = labels[Math.floor(Math.random() * labels.length)];
        if (!orderCompounds.includes(q)) {
            orderCompounds.push(q);
        }
    }
    for (var i = 0; i < 6; ++i) {
        orderNames.push(values[labels.indexOf(orderCompounds[i])]);
    }
    shuffle(orderNames);
    for (var i = 0; i < 6; ++i) {
        names[i].innerHTML = orderCompounds[i];
        selects[i].selectedIndex = -1;
        names[i].style = "border-color: transparent";
        selects[i].style = "border-color: transparent";
        for (var j = 0; j < 6; ++j) {
            selects[i].options[j].textContent = orderNames[j];
        }
    }
    button.onclick = checkLabels;
    button.textContent = "Check";
}
function checkLabels() {
    for (var i = 0; i < 6; ++i) {
        if (selects[i].selectedIndex !== -1 && selects[i].options[selects[i].selectedIndex].text === values[labels.indexOf(names[i].innerHTML)]) {
            selects[i].style = "background-color: #009900; border-color: #006600";
            names[i].style = "background-color: #009900; border-color: #006600";
        }
        else {
            selects[i].style = "background-color: #990000; border-color: #660000";
            names[i].style = "background-color: #990000; border-color: #660000";
        }
    }
    button.onclick = setLabels;
    button.textContent = "Next";
}
labels = ['Cl<sup>-</sup>', 'F<sup>-</sup>', 'Br<sup>-</sup>', 'I<sup>-</sup>', '(NO<sub>3</sub>)<sup>-</sup>', 'S<sup>2-</sup>', '(SO<sub>4</sub>)<sup>2-</sup>', '(CO<sub>3</sub>)<sup>2-</sup>', '(SiO<sub>3</sub>)<sup>2-</sup>', '(BO<sub>3</sub>)<sup>3-</sup>', '(PO<sub>4</sub>)<sup>3-</sup>', '(SO<sub>3</sub>)<sup>2-</sup>', '(PO<sub>3</sub>)<sup>3-</sup>'];
values = ['Хлориды', 'Фториды', 'Бромиды', 'Иодиды', 'Нитраты', 'Сульфиды', 'Сульфаты', 'Карбонаты', 'Силикаты', 'Бораты', 'Фосфаты', 'Сульфиты', 'Фосфиты'];
var orderCompounds = [];
var orderNames = [];
var names = document.getElementsByClassName("compound");
var selects = document.querySelectorAll("select");
var button = document.querySelector("#check");
setLabels()
