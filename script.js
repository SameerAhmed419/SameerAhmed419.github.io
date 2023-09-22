   // Form Handler
document.querySelector("#form").addEventListener("submit", guide);
function guide(event) {
    console.log(event);
    event.preventDefault();
    // Both the Divisions Must Give Space to the Frame
      let tohide = document.getElementsByClassName("hid");
      for (let n = 0; n < tohide.length; n++) {
      tohide[n].style.display = "none";
      }
   // A Button to make it reappear
         let btn =  document.createElement("button");
     document.querySelector("#main").appendChild(btn);
     btn.innerHTML = "Uncover";
     btn.id = "restore";
     btn.style = "border: none; font-size: vw; width: vw; height: 5%; margin: 0 auto 3%; color: #0f5742; background-color: white; font-weight: bold";
   // The Script for the Button
   document.getElementById("restore").addEventListener("click", restore);
   function restore() {
   // Unhide the Divisions
       let toshow = document.getElementsByClassName("hid");
      for (let i = 0; i < toshow.length; i++) {
      toshow[i].style.display = "flex";
}
   // Remove the Restore Button
      document.getElementById("restore").remove();
      }
   // val Will hold the value of the selected option
   let checkvalue = document.querySelector("input[name='eng']:checked");
   let val;
   if (checkvalue != null) {
       val = document.querySelector("input[name='eng']:checked").value; 
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
        case 0:
         restore();
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
    frame.width = "90%";
    frame.height = "90%";
    frame.style.border = "none";
   // The Container is to be Revealed
    contain.style.display = "flex";
}
