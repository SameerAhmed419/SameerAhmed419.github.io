"use strict";
//On Content Load
document.body.onload = () => {
//On Content Load
const books = document.querySelector("#second");
let bookState = false;
const booksButton = document.querySelector("#books");
let eng = true;
let json;
let slideStatus = true;
const first = document.querySelector("#first");
const third = document.querySelector("#third");
const betterOptionEnglish = document.querySelector("#p2");
let hadithRevealed = localStorage.getItem("done");
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
let animationStage = "myMail";
const foot = document.getElementById("foot");
let initial = foot.innerHTML;
foot.addEventListener("animationiteration", () => {
    let text = foot.innerHTML;

    if (animationStage == "myMail") {
       let link1 = document.createElement("a"); 
       link1.href = "https://ahlesunnatpak.com/";
       link1.innerHTML = eng ? "Engineer Muhammad Ali Mirza's Website" : "انجینئر محمد علی مرزا کی ویب سائٹ"; 
       let brk = document.createElement("BR");
       let link2 = document.createElement("a");
       link2.href = "https://m.youtube.com/user/EngineerMuhammadAliM";
       link2.innerHTML = eng ? "His Main Channel&nbsp" : "ان کا مرکزی چینل&nbsp";
       let link3 = document.createElement("a");
       link3.href = "https://m.youtube.com/@EngineerMuhammadAliMirzaComp";
       link3.innerHTML = eng ? "&nbspHis Full-Lectures Channel" : "&nbspان کا مکمل لیکچر چینل";
       foot.innerHTML = "";
       foot.appendChild(link1);
       foot.appendChild(brk);
       foot.appendChild(link2);
       foot.appendChild(link3);
       animationStage = "notMyMail";
    } else {
       if (eng) {
        foot.innerHTML = initial;
       }
       else {
        foot.innerHTML = json.foot.ur;
       }
       animationStage = "myMail";
    }
});

document.querySelector("#btn").addEventListener("click", event => {
  event.preventDefault();
  //document.querySelector("#fourth").style.backgroundColor = "#F5F5F5";
  let checkvalue = document.querySelector("input[name='eng']:checked");
  if (checkvalue) {
    resetAnimations();
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
     frame.style.border = "2vw solid skyblue";
     frame.style.borderRadius = "5%";
  }
});
document.querySelector("#undo").addEventListener("click", () => {
  if (slideStatus) {
    resetAnimations();
    first.style.animation = "slider 5s 1 reverse forwards running";
    third.style.animation = "moveup 5s 1 reverse forwards running";
    document.querySelector("#undo").innerHTML = eng ? "Hide Lectures" : "ليکجر جھپایں" ;
    slideStatus = false;
  }
  else if (!slideStatus) {
    resetAnimations();
    first.style.animation = "slider 5s 1 normal forwards running";
    third.style.animation = "moveup 5s 1 normal forwards running";
    document.querySelector("#undo").innerHTML = eng ? "Show Lectures" : "مضامین دکھائیں";  
    slideStatus = true;
  }
});

document.querySelector("#translate").addEventListener("click", async () => {
  if (!json) {
    let file = await fetch("urdu.json");
    json = await file.json();
  }
  for (let key in json) {
    let element = document.getElementById(`${key}`);
    if (element) {
      element.innerHTML = eng ? json[key]["ur"]: json[key]["en"];
    }
  }
  eng = !eng;
});
if (hadithRevealed != "yes") {
  localStorage.setItem("done","yes");
  booksButton.click();
}
function resetAnimations() {
  first.style.animation = "none";
  third.style.animation = "none";
  void first.offsetWidth;
  void third.offsetWidth;
  first.style.animation = null;
  third.style.animation = null;
}
//On Content Load
};
//On Content Load
