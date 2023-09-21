// Form Handler
document.querySelector("#form").addEventListener("submit", guide);
function guide(event) {
    event.preventDefault();
    // val Will hold the value of the selected option
    let val = document.querySelector("input[name='eng']:checked").value;
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
        default:
         alert("Choose an option");
        break;
    }
    // Create a frame and play the video
    let frame = document.createElement("iframe");
    // The Hidden Container Is to be Tapped
    let contain = document.querySelector("#third");
    contain.appendChild(frame);
    // The Frame is to be Adjusted
    frame.src = url;
    frame.width = "64vw";
    frame.height = "36vw";
    frame.style.border = "none";
    // The Container is to be Revealed
    contain.style.display = "flex";
}
