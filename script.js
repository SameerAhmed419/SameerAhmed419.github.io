"use strict";
//On Content Load
document.body.onload = () => {
//On Content Load
let books = document.querySelector("#second");
let bookState = false;
let booksButton = document.querySelector("#books");
booksButton.onclick = () => {
    if (!bookState) {
      books.style.display = "block";
      setTimeout(() => {
        //books.style.width = "70%";
        books.style.height = "70%"; 
      }, 0);
      bookState = true;
    }
    else if (bookState) {
      //books.style.width = "0";
      books.style.height = "0";
      setTimeout(() => {
        books.style.display= "none";
      }, 3000);
      bookState = false;
    }
};
const foot = document.getElementById("foot");
let initial = foot.innerHTML;
foot.addEventListener("animationiteration", () => {
    let text = foot.innerHTML;
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
       foot.innerHTML = "";
       foot.appendChild(link1);
       foot.appendChild(brk);
       foot.appendChild(link2);
       foot.appendChild(link3);
    } else {
       foot.innerHTML = initial;
    }
});

document.querySelector("#btn").addEventListener("click", event => {
  event.preventDefault();
  let checkvalue = document.querySelector("input[name='eng']:checked");
  if (checkvalue) {
    let first = document.querySelector("#first");
    let third = document.querySelector("#third");
    first.style.animation = "none";
    third.style.animation = "none";
    void first.offsetWidth;
    void third.offsetWidth;
    first.style.animation = null;
    third.style.animation = null;
    first.style.animation = "slider 5s 1 normal forwards running";
    third.style.animation = "moveup 5s 1 normal forwards running";
    document.querySelector("#undo").style.display = "inline";
    let url;
    switch (checkvalue.value) {
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
      default:
        console.log("Choose an Option");
      break;
    }
    let frame;
    if (!document.querySelector("iframe")) {
      // Create a frame and play the video
      frame = document.createElement("iframe");
      // The Hidden Container Is to be Tapped
      let contain = document.querySelector("#third");
      contain.appendChild(frame);
    }
    // The Frame is to be Adjusted
     frame.src = url;
     frame.style.width = '80%';
     frame.style.height = '45vw';
     frame.style.maxWidth = '600px';
     frame.style.maxHeight = '338px';
     frame.style.display = 'block';
     frame.style.margin = '0 auto';
  }
});
let slideStatus = true;
document.querySelector("#undo").addEventListener("click", () => {
  if (slideStatus) {
    let first = document.querySelector("#first");
    let third = document.querySelector("#third");
    first.style.animation = "none";
    third.style.animation = "none";
    void first.offsetWidth;
    void third.offsetWidth;
    first.style.animation = null;
    third.style.animation = null;
    first.style.animation = "slider 5s 1 reverse forwards running";
    third.style.animation = "moveup 5s 1 reverse forwards running";
    document.querySelector("#undo").innerHTML = "Hide Lectures";
    slideStatus = false;
  }
  else if (!slideStatus) {
    let first = document.querySelector("#first");
    let third = document.querySelector("#third");
    first.style.animation = "none";
    third.style.animation = "none";
    void first.offsetWidth;
    void third.offsetWidth;
    first.style.animation = null;
    third.style.animation = null;
    first.style.animation = "slider 5s 1 normal forwards running";
    third.style.animation = "moveup 5s 1 normal forwards running";
    document.querySelector("#undo").innerHTML = "Show Lectures";  
    slideStatus = true;
  }
});
booksButton.click();
//On Content Load
};
//On Content Load
