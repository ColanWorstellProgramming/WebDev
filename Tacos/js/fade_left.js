console.log('fade_left.js has been loaded');

let fade_left_obj = document.getElementById("0001");

let left = -100;

fade_left_obj.style.position = 'absolute';
fade_left_obj.style.top = '200px';

function fade_left() {
   if (left >= 10) {
      return;
   }
   /* console.log(fade_left_obj.style.left); */

   left += 0.75;
   fade_left_obj.style.left = left + '%';

   requestAnimationFrame(fade_left);
}

requestAnimationFrame(fade_left);
