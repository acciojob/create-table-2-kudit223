function createTable() {
  //Write your code here
  let row = prompt("Input number of rows");
  let col = prompt("Input number of columns");

  const table = document.querySelector("#myTable");

  for (let i = 0; i < row; i++) {
    let tableRow=document.createElement('tr');
    for (let j = 0; j < col; j++) {
      let tableCol=document.createElement('td');
      tableCol.textContent=`Row-${i} Column-${j}`
      tableRow.appendChild(tableCol);
    }
    table.appendChild(tableRow);
  }

}