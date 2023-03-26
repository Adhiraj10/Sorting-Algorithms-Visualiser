const quickBtn = document.getElementById('quick');


const partition = async (bars, low, high) => {
   let pivot = bars[low];
   let i = low + 1, j = high;

   pivot.style.backgroundColor = '#ff0000';

   while (i <= j) {
      while (i <= high && parseInt(bars[i].style.height) <= parseInt(pivot.style.height)) {
         bars[i].style.backgroundColor = 'yellow';
         await animater((1110 - parseInt(animationSpeed.value)));
         bars[i].style.backgroundColor = '#006400';
         i++;
      }
      while (j >= low && parseInt(bars[j].style.height) > parseInt(pivot.style.height)) {
         bars[j].style.backgroundColor = 'yellow';
         await animater((1110 - parseInt(animationSpeed.value)));
         bars[j].style.backgroundColor = '#006400';
         j--;
      }
      if (i < j) {
         bars[i].style.backgroundColor = 'pink';
         bars[j].style.backgroundColor = 'pink';
         await animater((1110 - parseInt(animationSpeed.value)));
         swap(bars[i], bars[j]);
      }
   }

   await animater((1110 - parseInt(animationSpeed.value)));
   swap(bars[j], bars[low]);
   pivot.style.backgroundColor = '#006400';

   for (let k = low + 1; k <= j - 1; k++)
      bars[k].style.backgroundColor = '#006400';
   await recolor();
   return j;
}

const quickSort = async (bars, low, high) => {
   if (low < high) {
      let pivot = await partition(bars, low, high);
      await quickSort(bars, low, pivot - 1);
      await quickSort(bars, pivot + 1, high);
   }
}

quickBtn.addEventListener('click', async () => {
   const bars = document.querySelectorAll('.bars');
   disableBtns();
   await quickSort(bars, 0, bars.length - 1);
   enableBtns();
})