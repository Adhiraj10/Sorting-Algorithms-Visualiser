const cocktailBtn = document.getElementById('cocktail');

const cocktailSort = async (bars) => {
   let swapped = true;
   let start = 0;
   let end = bars.length;

   while (swapped == true) {

      for (let i = start; i < end - 1; ++i) {
         bars[i].style.backgroundColor = '#ff0000';
         bars[i + 1].style.backgroundColor = 'yellow';
         if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
            await animater((1110 - parseInt(animationSpeed.value)));
            swap(bars[i], bars[i + 1]);
            bars[i].style.backgroundColor = '#006400';
            bars[i + 1].style.backgroundColor = '#006400';
            swapped = true;
         }
         bars[i].style.backgroundColor = '#006400';
         bars[i + 1].style.backgroundColor = '#006400';
      }

      if (swapped == false)
         break;

      swapped = false;
      end = end - 1;

      for (let i = end - 1; i >= start; i--) {
         bars[i].style.backgroundColor = 'cyan';
         bars[i + 1].style.backgroundColor = '#ff0000';
         if (parseInt(bars[i].style.height) > parseInt(bars[i + 1].style.height)) {
            await animater((1110 - parseInt(animationSpeed.value)));
            swap(bars[i], bars[i + 1]);
            swapped = true;
            bars[i].style.backgroundColor = '#006400';
            bars[i + 1].style.backgroundColor = '#006400';
         }
         bars[i].style.backgroundColor = '#006400';
         bars[i + 1].style.backgroundColor = '#006400';
      }
      start = start + 1;
   }
}

cocktailBtn.addEventListener('click', async () => {
   const bars = document.getElementsByClassName('bars');
   cocktailSort(bars);
})
