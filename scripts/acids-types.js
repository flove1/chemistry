function dragstart_handler(ev) {
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
}
function drop_handler(ev) {
    ev.preventDefault();
    if (ev.target.className !== "item") {
        var data = ev.dataTransfer.getData("application/my-app");
        ev.target.appendChild(document.getElementById(data));
    }
}
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
function setOrder() {
    for (let i = 0; i < names.length; ++i) {
        indexes.push(i);
    }
    wrongCount = 0;
    correctCount = 0;
    shuffle(indexes);
    setTitles();
}
function setTitles() {
    console.log(indexes);
    for (let i = 0; i < items.length; ++i) {
        items[i].innerHTML = names[indexes.pop()];
        items[i].style = "";
    }
    for (let i = 0; i < 6; ++i) {
        widget.appendChild(items[0]);
    }
    check.onclick = checkTitles;
    check.textContent = "Check";
}
function checkTitles() {
    for (var i = 0; i < items.length; i++) {
        if (items[i].parentElement.cellIndex === types[names.indexOf(items[i].innerHTML)]) {
            items[i].style = "background-color: green";
            correctCount++;
        }
        else {
            items[i].style = "background-color: red";
            wrongCount++;
        }
    }
    if (indexes.length === 0) {
        alert("You answered " + correctCount + " of " + (wrongCount + correctCount) + " questions correctly")
        check.onclick = setOrder;
        check.textContent = "Next";
        wrongCount = 0;
        correctCount = 0;
    }
    else {
        check.onclick = setTitles;
        check.textContent = "Next";
    }
}
var wrongCount, correctCount;
var indexes = [];
var items = document.getElementsByClassName("item");
var drag = document.querySelectorAll("#dragIn");
for (i = 0; i < 3; ++i) {
    drag[i].cellIndex = i;
}
widget.cellIndex = -1;
names = ['H<sub>2</sub>CO<sub>3</sub>', 'H<sub>2</sub>S', 'H<sub>3</sub>PO<sub>3</sub>', 'H<sub>2</sub>SiO<sub>3</sub>', 'H<sub>3</sub>PO<sub>4</sub>', 'H<sub>2</sub>SO<sub>3</sub>', 'HNO<sub>2</sub>', 'HNO<sub>3</sub>', 'H<sub>2</sub>SO<sub>4</sub>', 'HCl'];
types = [1, 1, 1, 1, 2, 2, 2, 0, 0, 0];
setOrder();
