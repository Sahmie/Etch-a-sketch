
// function to create rows and cols
function makeGrid(cols, rows){
  //get container div from html document
  const container = document.getElementById('container');
  container.style.cssText = `grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`;

  //create grid boxes using loops
  for(var i = 0; i < (cols * rows); i++){
    cell = document.createElement('div');
    cell.classList.add('grid-item');
    container.appendChild(cell);
   }
}
//initial function call with default 16x16 grid
makeGrid(16, 16);


// mouseover color effect
function rgbColor(){
  const cells = Array.from(document.querySelectorAll('.grid-item'));
  cells.forEach(cell => cell.addEventListener('mouseover', ()=>{
    let randomColor = Math.floor(Math.random() * 255);
    let randomColor1 = Math.floor(Math.random() * 255);
    let randomColor2 = Math.floor(Math.random() * 255);
    cell.style.cssText = `background-color:rgb(${randomColor}, ${randomColor1}, ${randomColor2})`
  }));
}

//call hover effect
rgbColor();
  
//function to reset grid and input new number of boxes
function resetGrid(){
  document.body.innerHTML = `<div id="main">
  <button id="reset" onclick="resetGrid()">Reset boxes</button>
  
  <div id="container">
    
  </div>
  
</div>

<script src="app.js"></script>`
  let newCell = prompt("How many boxes do you want?" ,"16");
    makeGrid(newCell, newCell);
    rgbColor();
}
