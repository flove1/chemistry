function dragstart_handler(ev) {
    ev.dataTransfer.setData("application/my-app", ev.target.id);
    ev.dataTransfer.dropEffect = "move";
}
function dragover_handler(ev) {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move"
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
    for (let i = 0; i < items.length; ++i) {
        items[i].innerHTML = names[indexes.pop()];
        items[i].style = "";
    }
    for (let i = 0; i < items.length; ++i) {
        widget.appendChild(items[0]);
    }
    check.onclick = checkTitles;
    check.textContent = "Check";
}
function checkTitles() {
    for (var i = 0; i < items.length; i++) {
        if (items[i].parentElement.cellIndex  === types[names.indexOf(items[i].innerHTML)]) {
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
for (i = 0; i < 4; ++i) {
    drag[i].cellIndex = i;
}
widget.cellIndex = -1;
names = ["Mn<sub>2</sub>O<sub>7</sub>", "Br<sub>2</sub>O<sub>7</sub>", "NO<sub>2</sub>", "CO<sub>2</sub>", "SiO<sub>2</sub>", "BeO", "ZnO", "PbO", "Al<sub>2</sub>O<sub>3</sub>", "SnO<sub>2</sub>", "CaO", "MgO", "Li<sub>2</sub>O", "Na<sub>2</sub>O", "MnO", "SO<sub>2</sub>", "P<sub>2</sub>O<sub>5</sub>", "FeO", "CrO", "MnO<sub>2</sub>", "Cr<sub>2</sub>O<sub>3</sub>", "NO", "N<sub>2</sub>O", "CO"];
types = [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 2, 3, 3, 3];
setOrder();
