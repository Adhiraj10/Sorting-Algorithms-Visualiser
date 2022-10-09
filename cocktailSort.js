const cocktailBtn = document.getElementById('cocktail');

const cocktailSort = (bars) => {
   let swapped = true;
   let start = 0;
   let end = bars.length;

   while (swapped == true) {

      for (let i = start; i < end - 1; ++i) {
         if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
            swap(bars[i], bars[i + 1]);
            swapped = true;
         }
      }

      if (swapped == false)
         break;

      swapped = false;
      end = end - 1;

      for (let i = end - 1; i >= start; i--) {
         if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
            swap(bars[i], bars[i + 1]);
            swapped = true;
         }
      }
      start = start + 1;
   }
}

cocktailBtn.addEventListener('click', () => {
   const bars = document.getElementsByClassName('bars');
   cocktailSort(bars);
})
