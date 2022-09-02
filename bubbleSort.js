const bubbleBtn = document.querySelector('#bubble');

bubbleBtn.addEventListener('click', () => {
   let bars = document.querySelectorAll('.bars');
   console.log(bars)
   for (let i = 0; i < bars.length - 1; i++) {
      for (let j = 0; j < bars.length - i - 1; j++) {
         bars[j].style.backgroundColor = `#00ffff`;
         bars[j + 1].style.backgroundColor = 'yellow';
         if (parseInt(bars[j].style.height) > parseInt(bars[j + 1].style.height)) {
            swap(bars[j], bars[j + 1])
         }
      }
   }
})
