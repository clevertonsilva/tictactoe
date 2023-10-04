"use strict";

let cells = [];
const PLAYER_X_CLASS = 'x';
const PLAYER_O_CLASS = 'o';

const WINNING_COMBINATIONS = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6]
];

let btnReset = document.querySelector(".btnReset");

function loadTable() {

  const tbElement = document.createElement('table');
  const tbBodyElement = document.createElement('tbody');
  const appBody = document.querySelector('.app-body');

  let count = 0;

  for (let tr = 0; tr < 3; tr++) {

    const row = document.createElement("tr");

    for (let td = 0; td < 3; td++) {

      const cell = document.createElement("td");

      cell.dataset.cell=count;

      row.appendChild(cell);

      count++;

    }

    tbBodyElement.appendChild(row);
  }

  tbElement.appendChild(tbBodyElement);

  appBody.appendChild(tbElement);

}

function checkWin(currentClass) {

 for(let i = 0; i < WINNING_COMBINATIONS.length; i++){
    
    let win =[];
    
    for(let j = 0; j < 3; j++){
       if (tableCells[WINNING_COMBINATIONS[i][j]].classList.contains(currentClass)){
        win.push(j);
       }
    }
  
    if (win.length == 3)
       return true;

  }
}

function resetTable() {

  cells = [];

  document.querySelectorAll('.app-body td')
    .forEach(e => e.classList.remove(PLAYER_X_CLASS)
      || e.classList.remove(PLAYER_O_CLASS));
}

loadTable();
btnReset.onclick = resetTable;

document.querySelectorAll('.app-body td')
  .forEach(e => e.addEventListener("click", function (e) {

    const cellNewValue = cells.length > 0 && cells[cells.length - 1].cellValue == PLAYER_X_CLASS
        ? PLAYER_O_CLASS
        : PLAYER_X_CLASS;

    if (cells.length == 10
      || this.className.includes(PLAYER_X_CLASS)
      || this.className.includes(PLAYER_O_CLASS)) {
      return;
    }

    this.classList.add(cellNewValue);
        
     cells.push({ cellValue: cellNewValue,  pos:this.getAttribute("data-cell") });

    if (checkWin(cellNewValue)){
      document.querySelector('.winner').innerHTML = cellNewValue;
    }

  }));

  var tableCells = document.querySelectorAll('.app-body td');