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
    while (orderAll.length!==buttons.length) {
      j=Math.floor(Math.random() * labels.length);
      if (!orderAll.includes(labels[j])) {
        orderAll.push(labels[j]);
        orderAll.push(names[j])
      }
    }
    for (let i=0; i<buttons.length; ++i) {
      order.push(i);
    }
    shuffle(order);
    for (let i=0; i<buttons.length; ++i) {
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
    len=18;
}
function press(element) {
  console.log(previousName);
  console.log(previousLabel);
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
  if (previousLabel && previousName) {
    if (labels.indexOf(previousLabel.textContent)===names.indexOf(previousName.textContent)) {
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
labels=['H', 'Li', 'Be', 'B', 'C', 'N', 'O', 'F', 'Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'K', 'Ca', 'Cr', 'Mn', 'Fe', 'Cu', 'Zn', 'As', 'Br', 'Ag', 'I', 'Ba', 'Au', 'Se', 'W', 'Hg', 'Pb'];
names=['аш', 'литий', 'берилий', 'бор', 'цэ', 'эн', 'о', 'фтор', 'натрий', 'магний', 'алюминий', 'силициум', 'рэ', 'эс', 'хлор', 'калий', 'кальций', 'хром', 'марганец', 'феррум', 'купрум', 'цинк', 'арсеникум', 'бром', 'аргентум', 'йод', 'барий', 'аурум', 'селен', 'вольфрам', 'гидраргирум', 'плюмбум'];
var buttons=document.querySelectorAll("#wrapper button")
var previousName=false, previousLabel=false, len;
setTiles();
