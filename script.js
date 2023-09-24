"use strict";
    let w = innerWidth;
    let h = innerHeight;
   // Well-Responsive Layout With An Event Listener
   document.addEventListener("DOMContentLoaded", sizechange );
   // The Function sizechange is global
   function sizechange() {
       document.getElementById("zero").style.height = (0.03 * h) + "px";
document.getElementById("zero").style.maxHeight = (0.03 * h) + "px"; 
document.getElementById("zero").style.marginBottom = (0.02 * h) + "px" ;  
document.getElementById("main").style.height = (0.46 * h) + "px";
document.getElementById("main").style.marginBottom = (0.01 * h) + "px";  
document.getElementById("main").style.maxHeight = (0.46 * h) + "px"; 
document.getElementById("third").style.height = (0.44 * h) + "px";
document.getElementById("third").style.marginBottom = (0.01 * h) + "px";
document.getElementById("fourth").style.height = (0.03 * h) + "px";
document.getElementById("fourth").style.maxHeight = (0.03 * h) + "px";
console.log(h + "and" + w);
} 
   // The Layout Handler Ends Here  
   // Form Handler for the Button
document.querySelector("#form").addEventListener("submit", guide);
// The Function guide is the Boss
function guide(event) {
    console.log(event);
    event.preventDefault();
   // An Event Handler to make them reappear
     document.getElementById("hide1").addEventListener("click", hideseek);
     document.getElementById("hide2").addEventListener("click", hideseek);
     // The Function Hideseek is limited to the Function guide
     function hideseek() {
         let anivalue = window.getComputedStyle(this.parentNode).getPropertyValue("animation-play-state");
         console.log(anivalue);
     }
   // val Will hold the value of the selected option
   let checkvalue = document.querySelector("input[name='eng']:checked");
   let val;
   // Checks Whether an Option is Selected
   if (checkvalue != null) {
       val = document.querySelector("input[name='eng']:checked").value; 
    // The Button Closes Both the Menus
    let hideshow = document.getElementsByClassName("hid");
     for (let n=0; n < hideshow.length; n++) {
         hideshow[n].style.animationPlayState = "running";
     } 
   }
   else {
       val = 0;
   }
    // url will hold the url to be used by the frame 
    let url;
    switch (val) {
        case "a":
        // Majlis 50
         console.log("case 1");
         url = "https://www.youtube.com/embed/sUaMFoX0hls";
        break;
        case "b":
        // Majlis 100
         console.log("case 2");
         url = "https://www.youtube.com/embed/NcS5TG1gRos";
        break;
        case "c":
        // Masalah 179
         console.log("case 3");
         url = "https://www.youtube.com/embed/xBGsEyfsBL4";
        break;
        case "d":
        // Students' Questioning Him
         console.log("case 4");
         url = "https://www.youtube.com/embed/D5Mo4y8El4o";
        break;
        case "e":
        // His Life Story
         console.log("case 5");
         url = "https://www.youtube.com/embed/at1s-OqWb_A";
        break;
        case "f":
        // His Financial Situation
         console.log();
         url = "https://www.youtube.com/embed/PHq_uue0OQg";
        break;
        case 0:
         sizechange();
         
         return;
        break;
    }
   // Remove Any Pre-existing Frame
   let removal = document.querySelector("iframe");
   if (removal) {
       removal.remove(); 
       }
   // Create a frame and play the video
    let frame = document.createElement("iframe");
   // The Hidden Container Is to be Tapped
    let contain = document.querySelector("#third");
    contain.appendChild(frame);
   // The Frame is to be Adjusted
    frame.src = url;
    frame.id = "vid";
    frame.width = w * 0.8;
    frame.height = h / 3;
    frame.style.margin = (0.055 * h) + "px";    
   // The Container is to be Adjusted
    contain.style.visibility = "visible";
}
// The Button's Event Handler Ends Here
