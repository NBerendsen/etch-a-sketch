const boxes = document.querySelectorAll('.box');

function modify(e) {
  console.log(e.target);
  e.target.style.backgroundColor = 'black';
  
}

boxes.forEach(box =>  {
  box.addEventListener('mouseover', modify);
})

function createGrid() {

}

// createGrid(prompt('Dimension?'));