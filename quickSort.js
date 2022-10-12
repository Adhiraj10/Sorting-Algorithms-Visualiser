const quickBtn = document.getElementById('quick');

const partition = async (bars, l, r) => {
   let pivot = bars[l];
   pivot.style.backgroundColor = '#ff0000';
   let i = l, j = r;
   while (i < j) {
      do {
         i++;
         bars[i].style.backgroundColor = 'yellow';
         await animater((1110 - parseInt(animationSpeed.value)));
      } while (parseInt(bars[i].style.height) < parseInt(pivot.style.height));

      do {
         j--;
         bars[j].style.backgroundColor = 'yellow';
         await animater((1110 - parseInt(animationSpeed.value)));
      } while (parseInt(bars[j].style.height) > parseInt(pivot.style.height));

      if (i < j) {
         await animater((1110 - parseInt(animationSpeed.value)));
         bars[i].style.backgroundColor = 'pink';
         bars[j].style.backgroundColor = 'pink';
         await animater((1110 - parseInt(animationSpeed.value)));
         swap(bars[i], bars[j]);

         for (let k = l + 1; k < i; k++)
            bars[k].style.backgroundColor = '#006400';

         for (let k = j; k < bars.length - 1; k++)
            bars[k].style.backgroundColor = '#006400';

         await animater((1110 - parseInt(animationSpeed.value)));
         bars[i].style.backgroundColor = '#006400';
         bars[j].style.backgroundColor = '#006400';
      }
   }
   animater((1110 - parseInt(animationSpeed.value)));
   swap(bars[l], bars[j]);
   await recolor();
   return j;
}

const quickSort = async (bars, l, r) => {
   if (l < r) {
      let pivot = await partition(bars, l, r);
      await quickSort(bars, l, pivot);
      await quickSort(bars, pivot + 1, r);
   }
}

quickBtn.addEventListener('click', async () => {
   const bars = document.querySelectorAll('.bars');
   await quickSort(bars, 0, bars.length - 1);
})