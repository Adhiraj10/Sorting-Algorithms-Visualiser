const selectionBtn = document.getElementById('selection');

const selectionSort = async (bars, len) => {
   let i, j, min_idx;
   for (i = 0; i < len - 1; i++) {
      min_idx = i;
      bars[i].style.backgroundColor = "#ff0000";
      await animater((1110 - parseInt(animationSpeed.value)));
      for (j = i + 1; j < len; j++) {
         bars[j].style.backgroundColor = "yellow";
         await animater((1110 - parseInt(animationSpeed.value)));
         if (parseInt(bars[j].style.height) < parseInt(bars[min_idx].style.height)) {
            bars[min_idx].style.backgroundColor = "yellow";
            min_idx = j;
            bars[min_idx].style.backgroundColor = "#ff0000";
         }
      }
      bars[i].style.backgroundColor = "cyan";
      await animater(800);
      swap(bars[min_idx], bars[i]);
      await recolor();
   }
}

selectionBtn.addEventListener('click', async () => {
   const bars = document.getElementsByClassName('bars');
   selectionSort(bars, bars.length);
})