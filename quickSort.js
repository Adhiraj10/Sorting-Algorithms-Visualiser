const quickBtn = document.getElementById('quick');

const partition = async (bars, l, r) => {
   let pivot = bars[l].style.height;
   bars[l].style.backgroundColor = '#ff0000';
   while (l <= r) {
      while (parseInt(bars[l].style.height) > parseInt(pivot))
         l++;

      while (parseInt(bars[r].style.height) < parseInt(pivot))
         r--;

      await swap(bars[l], bars[r]);
   }
   await swap(pivot, bars[r]);
}

const quickSort = async (bars, l, r) => {
   if (l < h) {
      let pivot = await partition(bars, l, h);
      await quickSort(bars, l, pivot);
      await quickSort(bars, pivot + 1, h);
   }
}

quickBtn.addEventListener('click', async () => {
   const bars = document.getElementsByClassName('bars');
   await quickSort(bars, 0, bars.length - 1);
})