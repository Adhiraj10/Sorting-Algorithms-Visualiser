const insertionBtn = document.querySelector('#insertion');

const insertionSort = async () => {
   const bars = document.querySelectorAll('.bars');
   bars[0].style.backgroundColor = 'yellow';
   for (let i = 1; i < bars.length; i++) {
      let temp = bars[i].style.height;
      bars[i].style.backgroundColor = '#ff0000';
      let j = i - 1;
      await animater((1110 - parseInt(animationSpeed.value)));
      while (j >= 0 && (parseInt(bars[j].style.height) > parseInt(temp))) {
         bars[j].style.backgroundColor = '#ff0000';
         bars[j + 1].style.backgroundColor = 'yellow';
         bars[j + 1].style.height = bars[j].style.height;
         j--;
         await animater((1110 - parseInt(animationSpeed.value)));
         for (let k = i - 1; k >= 0; k--) {
            bars[k].style.backgroundColor = 'yellow';
         }
      }
      bars[j + 1].style.height = temp;
   }
   await recolor();
}

insertionBtn.addEventListener('click', async () => {
   disableBtns();
   await insertionSort();
   enableBtns();
})