const container = document.getElementById('container');


function makeGrid(cols, rows){
  container.style.cssText = `grid-template-columns: repeat(${cols}, 1fr); grid-template-rows: repeat(${rows}, 1fr);`;
  for(var i = 0; i < (cols * rows); i++){
    cell = document.createElement('div');
    // cell.textContent = i + 1;
    cell.classList.add('grid-item');
    container.appendChild(cell);
   }
}
cell.addEventListener('mouseover', ()=>{
  cell.style.cssText = 'background-color: black;'
  alert('sammy')
})
makeGrid(64, 64);