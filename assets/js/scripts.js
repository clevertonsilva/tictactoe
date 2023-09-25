"use strict";

let cells = [];
let CLOSECLASSNAME = 'close';
let CIRCLECLASSNAME = 'circle';
let btnReset = document.querySelector(".btnReset");

function loadTable() {
 
  const tbElement = document.createElement('table');
  const tbBodyElement = document.createElement('tbody');
  const appBody = document.querySelector('.app-body');

  for (let tr = 0; tr < 3; tr++) {

    const row = document.createElement("tr");

    for (let td = 0; td < 3; td++) {

      const cell = document.createElement("td");

      row.appendChild(cell);

    }

    tbBodyElement.appendChild(row);
  }

  tbElement.appendChild(tbBodyElement);

  appBody.appendChild(tbElement);

}

function resetTable(){

  cells = [];
  
  document.querySelectorAll('.app-body td')
      .forEach(e => e.classList.remove(CLOSECLASSNAME));

  document.querySelectorAll('.app-body td')
    .forEach(e => e.classList.remove(CIRCLECLASSNAME));

}

loadTable();
btnReset.onclick = resetTable;

document.querySelectorAll('.app-body td')
  .forEach(e => e.addEventListener("click", function (e) {

    if (cells.length == 10
      || this.className.includes(CLOSECLASSNAME)
      || this.className.includes(CIRCLECLASSNAME)) {
      return;
    }

    if (cells.length == 0) {

      this.classList.add(CLOSECLASSNAME);
      cells.push(CLOSECLASSNAME);

    } else {

      const cellLastValue = cells[cells.length - 1] == CLOSECLASSNAME
        ? CIRCLECLASSNAME
        : CLOSECLASSNAME;

      this.classList.add(cellLastValue);

      cells.push(cellLastValue);
    }
  }));


