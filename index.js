const nextE1 = document.querySelector(".next");
const prevE1 = document.querySelector(".prev");
// const iamgeContainerE1 = document.querySelector(".pic");
let currentImg = 1;
let timeout;


nextE1.addEventListener("touchstart", e=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

nextE1.addEventListener("touchend", e => {
    nextE1.style.color = "white";
})

nextE1.addEventListener("click", e=>{
    currentImg++;
    clearTimeout(timeout);
    updateImg();
})

prevE1.addEventListener("touchstart", e=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

prevE1.addEventListener("touchend", e => {
    prevE1.style.color = "white";
})

prevE1.addEventListener("click", e=>{
    currentImg--;
    clearTimeout(timeout);
    updateImg();
})

function updateImg(){
    if (currentImg == 5){
        currentImg = 1;
    }

    if (currentImg == 0){
        currentImg = 4;
    }
    let imageE1 = document.querySelector(".image");
    imageE1.src = `./Images/image${currentImg}.jpg`;

    // timeout = setTimeout(e=>{
    //     currentImg++;
    //     updateImg();
    // }, 5000);
}

// updateImg();