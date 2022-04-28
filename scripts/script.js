const boxes = document.querySelectorAll('.box');

function modify(e) {
  console.log(e.target);
  e.target.style.backgroundColor = 'black';
  
}

boxes.forEach(box =>  {
  box.addEventListener('mouseover', modify);
})

function createGrid(width) {

    const container = document.querySelector('#container');

    for (let row = 0; row < width; ++row) {

      const rowDiv = document.createElement('div');
      rowDiv.style.display = 'flex';

      for (let col = 0; col < width; ++col) {

        const boxNumber = col + row * width;
        const colDiv = document.createElement('div');
        colDiv.classList.add('box');
        colDiv.setAttribute('id', `box-${boxNumber}`);

        rowDiv.appendChild(colDiv);
      }

      container.appendChild(rowDiv);
    }

    const boxes = document.querySelectorAll('.box');

    boxes.forEach(box =>  {
      box.addEventListener('mouseover', modify);
    })

}

createGrid(prompt('Dimension?'));