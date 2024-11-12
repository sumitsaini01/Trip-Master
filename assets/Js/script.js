/*function JavaBlink() {
    var blinks = document.getElementsByTagName('JavaBlink');
    for (var i = blinks.length - 1; i >= 0; i--) {
       var s = blinks[i];
       s.style.visibility = (s.style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    window.setTimeout(JavaBlink, 400);
 }
 if (document.addEventListener) document.addEventListener("DOMContentLoaded", JavaBlink, false);
 else if (window.addEventListener) window.addEventListener("load", JavaBlink, false);
 else if (window.attachEvent) window.attachEvent("onload", JavaBlink);
 else window.onload = JavaBlink;
 */
// script.js

// Update the slider value display
const mySlider = document.getElementById("mySlider");
const result = document.getElementById("result");

if (mySlider && result) {
    mySlider.oninput = function() {
        result.innerText = this.value;
    };
}

// Blink effect for the Book Now button
function JavaBlink() {
    const blinks = document.getElementsByTagName('JavaBlink');
    for (let i = 0; i < blinks.length; i++) {
        blinks[i].style.visibility = (blinks[i].style.visibility === 'visible') ? 'hidden' : 'visible';
    }
    setTimeout(JavaBlink, 500);
}

document.addEventListener("DOMContentLoaded", JavaBlink);
