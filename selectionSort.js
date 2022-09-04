const selectionBtn = document.querySelector('#selection');

selectionBtn.addEventListener('click', async () => {
   const bars = document.querySelectorAll('.bars');
   let min_idx;
   for (let i = 0; i < bars.length - 1; i++) {
      min_idx = i;
      for (let j = i + 1; j < bars.length; j++) {
         if (parseInt(bars[j].style.height) < parseInt(bars[min_idx].style.height))
            min_idx = j;
      }
      swap(bars[i], bars[min_idx]);
   }
})