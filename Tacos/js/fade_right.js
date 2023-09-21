console.log('fade_right.js has been loaded');

let fade_right_obj = document.getElementById("0002");

let fade_right_left = 50;

fade_right_obj.style.position = 'absolute';
fade_right_obj.style.top = '475px';

function fade_right() {
   if (fade_right_left <= 10.5) {
      return;
   }
   console.log(fade_right_obj.style.left);

   fade_right_left -= 0.75;
   fade_right_obj.style.left = fade_right_left + '%';

   requestAnimationFrame(fade_right);
}

requestAnimationFrame(fade_right);
