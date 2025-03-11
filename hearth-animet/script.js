const bodEl= document.querySelector("body")
 
bodEl.addEventListener("mousemove", (event)=>{
    const xPos = event.offsetX;
    const yPos = event.offsetY;
    const spanEl = document.createElement("span");
    const size = Math.random() * 100;
    spanEl.style.width = size + "px"
    spanEl.style.height = size + "px"
    spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px"; 
    bodEl.appendChild(spanEl);
    setTimeout(()=> {
        spanEl.remove();
    }, 3000)
     
});