"use strict";
    let w = innerWidth;
    let h = innerHeight;
    // Change the Content of #foot
   
    let initial = document.getElementById("foot").innerHTML;
    //console.log(initial); document.getElementById("foot").addEventListener("animationiteration", changetext);
    function changetext() {
        let text = this.innerHTML;
        let tofind = "Tell Me About Your Judgement About EMAM";
        if (text.includes(tofind)) {
           let link1 = document.createElement("a"); 
           link1.href = "https://ahlesunnatpak.com/";
           link1.innerHTML = "Engineer Muhammad Ali Mirza's Website"; 
           let brk = document.createElement("BR");
           let link2 = document.createElement("a");
           link2.href = "https://m.youtube.com/user/EngineerMuhammadAliM";
           link2.innerHTML = "His Main Channel&nbsp";
           let link3 = document.createElement("a");
           link3.href = "https://m.youtube.com/@EngineerMuhammadAliMirzaComp";
           link3.innerHTML = "&nbspHis Full-Lectures Channel";
           this.innerHTML = "";
           this.appendChild(link1);
           this.appendChild(brk);
           this.appendChild(link2);
           this.appendChild(link3);
        } else {
           this.innerHTML = initial;
        }
}    
   // Well-Responsive Layout With An Event Listener
   document.addEventListener("DOMContentLoaded", function () {
       if (h > w) {
           portrait();
       } else {
           landscape();
       }
   } );
   // The Function portrait is global
   function portrait() {
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
//alert("portrait");
} 
//The Function Landscape is Global
function landscape() {
    document.getElementById("zero").style.height = (0.03 * w) + "px";
document.getElementById("zero").style.maxHeight = (0.03 * w) + "px";        
document.getElementById("zero").style.marginBottom = (0.02 * w) + "px" ;  
document.getElementById("main").style.height = (0.46 * w) + "px";
document.getElementById("main").style.marginBottom = (0.01 * w) + "px";  
document.getElementById("main").style.maxHeight = (0.46 * w) + "px"; 
document.getElementById("third").style.height = (0.44 * w) + "px";
document.getElementById("third").style.marginBottom = (0.01 * w) + "px";
document.getElementById("fourth").style.height = (0.03 * w) + "px";
document.getElementById("fourth").style.maxHeight = (0.03 * w) + "px";
//alert("landscape");
}
   // The Layout Handler Ends Here  
   // Form Handler for the Button
document.querySelector("#form").addEventListener("submit", guide);
// The Function guide is the Boss
function guide(event) {
   //console.log(event);
    event.preventDefault();
   // An Event Handler to make them reappear
   // Hide1 is the Lectures Section
   // Hide2 is the Hadith-Books Section
     document.getElementById("hide1").addEventListener("click", toggleAnimation);
document.getElementById("hide2").addEventListener("click", toggleAnimation);

function toggleAnimation() {
    let targetElement = this.parentNode;
    let framediv = document.getElementById("third"); 
    let thisPosition = window.getComputedStyle(this.parentNode).getPropertyValue("position");

    // If you want to use the animation properties, you can keep them for future use
    let SasukeP = window.getComputedStyle(document.getElementById("first")).getPropertyValue("position");
   //console.log("SasukeP: " + SasukeP);
    let NarutoP = window.getComputedStyle(document.getElementById("second")).getPropertyValue("position");
   //console.log("NarutoP: " + NarutoP);
    let SakuraP = window.getComputedStyle(document.getElementById("third")).getPropertyValue("position");
   //console.log("SakuraP: " + SakuraP);

    // Toggle the animation state
    // (1) When the Menus are Closed, but the Frame is Risen
    // (2) When This Menu is Open, and the Frame is Near the Bottom
    // (3) When the Other Menu is Open, and the Frame is Near the Bottom
    // (4) When Both Menus are Open, and the Frame is Near the Bottom
    if (SasukeP == "relative" && NarutoP == "relative" && SakuraP == "relative") {
        this.parentNode.style.animation = "rollup 5s 1 reverse forwards running";
        framediv.style.animation = "colorlessmoveup 5s 1 reverse forwards running";
    } else if (thisPosition == "static" && (SasukeP == "relative" || NarutoP == "relative")) {
       //alert("else if 1st");
        this.parentNode.style.animation = "rollup 5s 1 normal forwards running";
        framediv.style.animation = "colorlessmoveup 5s 1 normal forwards running";
    } else if (thisPosition == "relative" && (SasukeP == "static" || NarutoP == "static")) {
       //alert("else if 2nd");
        this.parentNode.style.animation = "rollup 5s 1 reverse forwards running"; 
    } else if (SasukeP == "static" && NarutoP == "static" && SakuraP == "static") {
       //alert("else if 3rd");
        this.parentNode.style.animation = "rollup 5s 1 normal forwards running";
    }
}
   // val Will hold the value of the selected option
   let checkvalue = document.querySelector("input[name='eng']:checked");
   let val;
   // Checks Whether an Option is Selected
   if (checkvalue != null) {
       val = document.querySelector("input[name='eng']:checked").value; 
    // The Button Closes  the Menus
    let hideshow = document.getElementsByClassName("hid");
     for (let n=0; n < hideshow.length; n++) {
         hideshow[n].style.animation = "rollup 5s 1 forwards running";
     } 
     // Slides The Frame Upwards
     document.getElementById("third").style.animation = "moveup 5s 1 forwards running";
   }
   else {
       val = 0;
   }
    // url will hold the url to be used by the frame 
    let url;
    switch (val) {
        case "a":
        // Majlis 50
        //console.log("case 1");
         url = "https://www.youtube.com/embed/sUaMFoX0hls";
        break;
        case "b":
        // Majlis 100
        //console.log("case 2");
         url = "https://www.youtube.com/embed/NcS5TG1gRos";
        break;
        case "c":
        // Masalah 179
        //console.log("case 3");
         url = "https://www.youtube.com/embed/xBGsEyfsBL4";
        break;
        case "d":
        // Students' Questioning Him
        //console.log("case 4");
         url = "https://www.youtube.com/embed/D5Mo4y8El4o";
        break;
        case "e":
        // His Life Story
        //console.log("case 5");
         url = "https://www.youtube.com/embed/at1s-OqWb_A";
        break;
        case "f":
        // His Financial Situation
        //console.log();
         url = "https://www.youtube.com/embed/PHq_uue0OQg";
        break;
        case 0:
        if (h > w) {
           // alert("portrait");
           portrait();
        } else {
           // alert("landscape");
           landscape();
        }
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
    // Its Animation Is To Be Turned On
    frame.style.animation = "opacity 5s  1 forwards running";
}
// The Button's Event Handler Ends Here
