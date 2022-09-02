const arrayBtn = document.querySelector('#newArray');
const arraySize = document.querySelector('#size');
const simulationSpeed = document.querySelector('#speed');
const barsContainer = document.querySelector('.bars-container');

arrayBtn.addEventListener('click', () => {
   barsContainer.innerHTML = null;
   let size = parseInt(arraySize.value);
   let newArray = Array(size).fill().map(() => { return Math.ceil((Math.random() * 250)) });
   for (let i = 0; i < size; i++) {
      let newDiv = document.createElement('div');
      newDiv.classList.add('bars')
      newDiv.style.height = `${newArray[i] * 2}px`;
      barsContainer.appendChild(newDiv);
   }
})

const swap = (bar1, bar2) => {
   let temp = bar1.style.height;
   bar1.style.height = bar2.style.height;
   bar2.style.height = temp;

}