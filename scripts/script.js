const boxes = document.querySelectorAll('.box');

let transitionDuration = '4s';
let currentColor = 'pastel';

function getColor() {
  if (currentColor === 'pastel') {
    return getPastelColor();
  }

  return getRainbowColor();
}
function getPastelColor() { 
  return "hsl(" + 360 * Math.random() + ',' +
             (25 + 70 * Math.random()) + '%,' + 
             (85 + 10 * Math.random()) + '%)'
}

function getRainbowColor() { 
  return "hsl(" + 360 * Math.random() + ',' +
             (90 + 10 * Math.random()) + '%,' + 
             (50 + 5 * Math.random()) + '%)'
}

function fade(e) {
  e.target.style.transitionProperty = 'background-color';
  e.target.style.transitionDuration = transitionDuration;
  e.target.style.backgroundColor = '';
}

function modify(e) {
  // if (e.target.style.backgroundColor) {
  //   const reduceFactor = 0.9;
  //   let color = e.target.style.backgroundColor;
  //   let colors = color.match(/\d+/g).map(Number);
  //   e.target.style.backgroundColor = `rgb(${Math.floor(colors[0] * reduceFactor)}, ${Math.floor(colors[1] * reduceFactor)}, ${Math.floor(colors[2] * reduceFactor)})`;
  // } else {
  //   e.target.style.backgroundColor = getColor();
  // }
  e.target.style.transitionProperty = 'background-color';
  e.target.style.transitionDuration = '100ms';
  e.target.style.backgroundColor = getColor();
}


function createGrid(width) {

    const container = document.querySelector('#container');

    for (let row = 0; row < width; ++row) {

      const rowDiv = document.createElement('div');
      // rowDiv.style.display = 'flex';
      //rowDiv.style.alignItems = 'stretch';
      // rowDiv.style.width = '100%';
      rowDiv.classList.add('row');

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
      box.addEventListener('mouseout', fade);
    })
}

function increaseDimension() {
  const container = document.querySelector('#container');

  let newDimension = container.childElementCount + 1;
  console.log(`plus ${newDimension}`);

  while (container.hasChildNodes()) {
    console.log(`child: ${container.firstChild}`);
    container.removeChild(container.firstChild);
  }

  createGrid(newDimension);
}

function decreaseDimension() {
  const container = document.querySelector('#container');

  let newDimension = Math.max(container.childElementCount - 1, 0);

  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  createGrid(newDimension);
}

const plusButton = document.querySelector('#plus');
plusButton.addEventListener('click', increaseDimension);

const minusButton = document.querySelector('#minus');
minusButton.addEventListener('click', decreaseDimension);

function selectNeon() {
  console.log('neon');
  const neonButton = document.querySelector('#neon');
  const pastelButton = document.querySelector('#pastel');

  pastelButton.classList.remove("selected");
  neonButton.classList.add("selected");

  currentColor = 'neon';
}

function selectPastel() {
  const neonButton = document.querySelector('#neon');
  const pastelButton = document.querySelector('#pastel');

  pastelButton.classList.add("selected");
  neonButton.classList.remove("selected");

  currentColor = 'pastel';
}

function toggleFade() {
  const fadeButton = document.querySelector('#fade');

  if (transitionDuration == '0s') {
    transitionDuration = '4s';
    fadeButton.classList.add('selected');
  }
  else {
    transitionDuration = '0s';
    fadeButton.classList.remove('selected');
  }
}

const neonButton = document.querySelector('#neon');
neonButton.addEventListener('click', selectNeon);

const pastelButton = document.querySelector('#pastel');
pastelButton.addEventListener('click', selectPastel);

const fadeButton = document.querySelector('#fade');
fadeButton.addEventListener('click', toggleFade);

// createGrid(prompt('Dimension?'));
createGrid(5);