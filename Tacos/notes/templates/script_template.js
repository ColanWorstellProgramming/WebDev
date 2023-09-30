// Script Loaded
console.log('script.js has been loaded');

// Element Array
var FadeElementsArray = [];
var InFromLeftElementsArray = [];
var InFromRightElementsArray = [];

// All Elements

// Header Elements
let obj_1 = document.getElementById("0001");
FadeElementsArray.push(obj_1);
InFromLeftElementsArray.push(obj_1);

let obj_2 = document.getElementById("0002");
FadeElementsArray.push(obj_2);
InFromRightElementsArray.push(obj_2);

// Footer Elements
let obj_3 = document.getElementById("0003");
FadeElementsArray.push(obj_3);
InFromLeftElementsArray.push(obj_3);

let obj_4 = document.getElementById("0004");
FadeElementsArray.push(obj_4);
InFromRightElementsArray.push(obj_4);



// Run Script
checkElements();
var intervalId = setInterval(checkElements, 10);

// When In Frame
function checkElements() {
    console.log("Running");
    for (var i = 0; i < FadeElementsArray.length; i++) {
        if (isAnyPartOfElementInViewport(FadeElementsArray[i]))
        {
          runMicroInteractionFade(FadeElementsArray[i])
          FadeElementsArray.splice(i, 1);
          i--;
        }
    }
    for (var i = 0; i < InFromLeftElementsArray.length; i++) {
        if (isAnyPartOfElementInViewport(InFromLeftElementsArray[i]))
        {
          runMicroInteractionInFromLeft(InFromLeftElementsArray[i])
          InFromLeftElementsArray.splice(i, 1);
          i--;
        }
    }
    for (var i = 0; i < InFromRightElementsArray.length; i++) {
        if (isAnyPartOfElementInViewport(InFromRightElementsArray[i]))
        {
          runMicroInteractionInFromRight(InFromRightElementsArray[i])
          InFromRightElementsArray.splice(i, 1);
          i--;
        }
    }
    if (FadeElementsArray.length === 0 && InFromLeftElementsArray.length === 0 && InFromRightElementsArray.length === 0) {
        clearInterval(intervalId);
        console.log("Stopping");
    }
}

// Frame Check Function
function isAnyPartOfElementInViewport(element) {
    var rect = element.getBoundingClientRect();

    return (
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.bottom >= 0 &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth) &&
      rect.right >= 0
    );
}

function runMicroInteractionInFromLeft(element) {

    element.style.transform = 'translateX(-200px)';

    var targetPosition = 0;

    setTimeout(function() {
        element.style.transform = 'translateX(' + targetPosition + 'px)';
        element.style.transition = 'transform 1s ease-out';
    }, 0);

}

function runMicroInteractionInFromRight(element) {

    element.style.transform = 'translateX(200px)';

    var targetPosition = 0;

    setTimeout(function() {
        element.style.transform = 'translateX(' + targetPosition + 'px)';
        element.style.transition = 'transform 1s ease-out';
    }, 0);

 }


function runMicroInteractionFade(element) {

    let opacity = 0;

    function fade() {
        if (opacity >= 1) {
           return;
        }

        opacity += 0.005;
        element.style.opacity = opacity;

        requestAnimationFrame(fade);
    }

    requestAnimationFrame(fade);

}