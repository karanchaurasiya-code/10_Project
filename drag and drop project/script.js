let dropBox = document.querySelector("#drop-box");
let inputFile = document.querySelector("#input-file");
let viewImg = document.querySelector(".viwe-img");

inputFile.addEventListener("change", uploadImg);

function uploadImg() {
    let imgSrc = URL.createObjectURL(inputFile.files[0]);  // Fixed variable name
    viewImg.style.backgroundImage = `url(${imgSrc})`;  // Fixed property name and syntax
    viewImg.style.border = 0;
    viewImg.textContent = "";

}  