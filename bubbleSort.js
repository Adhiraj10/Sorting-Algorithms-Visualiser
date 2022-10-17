const bubbleBtn = document.querySelector('#bubble');

const bubbleSort = async () => {
   const bars = document.querySelectorAll('.bars');
   // console.log(bars)
   for (let i = 0; i < bars.length - 1; i++) {
      for (let j = 0; j < bars.length - i - 1; j++) {
         bars[j].style.backgroundColor = 'yellow';
         bars[j + 1].style.backgroundColor = 'yellow';
         if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
            await animater((1110 - parseInt(animationSpeed.value)));
            swap(bars[j], bars[j + 1]);
         }
         bars[j].style.backgroundColor = '#006400';
         bars[j + 1].style.backgroundColor = '#006400'
      }
      bars[(bars.length - 1) - i].style.backgroundColor = '#ff0000';
   }
   await recolor();
}

bubbleBtn.addEventListener('click', async () => {
   disableBtns();
   await bubbleSort();
   enableBtns();
});
