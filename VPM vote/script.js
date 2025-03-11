let partyImg = document.querySelectorAll(".party-img");
let voteCount = document.querySelectorAll(".vote-count");
let selectedImg = document.querySelector(".selected img");
let selected = document.querySelector(".selected");
let partiess = document.querySelector(".parties");



//  create a array for condtion 
const condidates = [
    { name: "condidate 1", imgScr: "pngwing.com (1).png" },
    { name: "condidate 2", imgScr: "pngwing.com (2).png" },
    { name: "condidate 3", imgScr: "pngwing.com (3).png" },
    { name: "condidate 4", imgScr: "pngwing.com (4).png" },
    { name: "condidate 5", imgScr: "pngwing.com (5).png" },
]
let voted = 0;

condidates.forEach((condidate, index) => {
    partyImg[index].addEventListener("click", () => {
        if (voted === 0) {
            voteCount[index].innerHTML = 1;
            selectedImg.src = condidate.imgScr;
            voted = 1
            setTimeout(() => {
                selected.style.display = "block";
                partiess.style.display = "none";
            }, 2000);
        }
    })

})

