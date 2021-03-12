function init() {
  console.log('Hello there!')

  // DOM Elements

  const pixelGrid = document.querySelector('.pixel-grid')


  // grid variables
  const width = 31
  const cellCount = width * width


  // creating the grid

  function createPixelGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.textContent = i
      pixelGrid.appendChild(cell)
      cell.classList.add('whole-grid')
    }
  }
  createPixelGrid()
}

window.addEventListener('DOMContentLoaded', init)