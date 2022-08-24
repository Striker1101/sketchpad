const container = document.querySelector('.container');
let input = document.querySelector('.input')
let submit = document.querySelector('.submit')
let form = document.querySelector('#form');
let grid = document.createElement('div');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let work = document.querySelector(".work")

grid.classList.add('grid');
container.appendChild(grid); 
var rows = document.querySelector('.row')
var colomns = document.querySelector('.coloum')

let drows = 10;
let dcolomns = 10; 
let dsum = 100;
  function renderGrid( ){
    
      console.log(drows)
      console.log(dsum)
      
    grid.style.setProperty ("display", ' grid');
  // console.log(getComputedStyle(grid).getPropertyValue('display'));
   grid.style.setProperty ("grid-template-columns", `repeat(${drows} , minmax(10px, 1fr))`);
   grid.style.setProperty ("grid-template-rows", `repeat(${dcolomns}, minmax(10px, 1fr))`);
   grid.style.setProperty('width', '100%');
   grid.style.setProperty('height', '100%');

   for( let i = 0; i < `${dsum}` ; i++){
     let squares = document.createElement('div');
     squares.classList.add('squares');
     grid.appendChild(squares);
     squares.style.border = "0.5px solid red"
     
   }
   const allSquares = document.querySelectorAll('.squares')
    console.log(allSquares);
    allSquares.forEach((squares) => {
      squares.addEventListener('mouseover', (e) => {
        squares.style['backgroundColor'] = 'grey';
        console.log(squares)
       })
    })
    allSquares.forEach((squares) => {
      squares.addEventListener('mouseout', (e) => {
        squares.style['backgroundColor'] = 'white';
        console.log(squares)
       })
    })
  
  }
  

  renderGrid();
  
  submit.addEventListener('click', 
    (e) => {e.preventDefault(); getGrid( )});

function getGrid(){
  grid.textContent = "";
  
  dsum =  rows.value * colomns.value ;
  
  drows = rows.value 
  
  dcolomns = colomns.value 
  console.log(drows)
  console.log(dsum)
  renderGrid( );

}
// make hover reach maximum dark at 10 divs
