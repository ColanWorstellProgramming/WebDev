console.log('fade.js has been loaded');

let fade_obj = document.getElementById("0001");
let fade_obj_1 = document.getElementById("0002");

let opacity = 0;


function fade() {
   if (opacity >= 1) {
      return;
   }
   /* console.log(element); */

   opacity += 0.005;
   fade_obj.style.opacity = opacity;
   fade_obj_1.style.opacity = opacity;

   requestAnimationFrame(fade);
}

requestAnimationFrame(fade);
