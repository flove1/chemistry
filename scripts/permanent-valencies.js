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
function setTiles () {
    let j;
    let order=[], orderAll=[];
    while (orderAll.length!==28) {
      j=Math.floor(Math.random() * labels.length);
      if (!orderAll.includes(labels[j])) {
        orderAll.push(labels[j]);
        orderAll.push(names[j])
      }
    }
    for (let i=0; i<28; ++i) {
      order.push(i);
    }
    shuffle(order);
    for (let i=0; i<28; ++i) {
      if (labels.includes(orderAll[i])) {
        buttons[order[i]].className="tile1";
      }
      else {
        buttons[order[i]].className="tile2";
      }
      buttons[order[i]].style.visibility="visible";
      buttons[order[i]].textContent = orderAll[i];
      buttons[order[i]].disabled = "";
    }
    len=14;
}
function press(element) {
    if (element.className==="tile1") {
      if (previousLabel) {
        previousLabel.disabled="";
      }
      element.disabled="disabled";
      previousLabel=element;
    }
    else {
      if (previousName) {
        previousName.disabled="";
      }
      element.disabled="disabled";
      previousName=element;
    }
    check();
}
function check() {
  console.log(labels.indexOf(previousLabel.textContent));
  console.log(names.indexOf(previousName.textContent));
  if (previousLabel && previousName) {
    if (names[labels.indexOf(previousLabel.textContent)]===previousName.textContent) {
      previousName.style.visibility="hidden";
      previousName=false;
      previousLabel.style.visibility="hidden";
      previousLabel=false;
      --len;
      if (len===0) {
        setTiles();
      }
    }
    else {
      previousName.disabled="";
      previousLabel.disabled="";
      previousName=false;
      previousLabel=false;
    }
  }
}
labels=['H', 'F', 'Li', 'Na', 'K', 'Ag', 'O', 'Be', 'Mg', 'Ca', 'Zn', 'B', 'Al', 'Ba'];
names=['I', 'I', 'I', 'I', 'I', 'I', 'II', 'II', 'II', 'II', 'II', 'III', 'III', 'II'];
var buttons=document.querySelectorAll("#wrapper button")
var previousName=false, previousLabel=false, len;
setTiles();
