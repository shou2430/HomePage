let close = document.querySelector('.close');
let link = document.querySelector('.play');
const video = document.querySelector('video');

window.onload = function() {
    video.pause();
}

link.addEventListener('click', (e) => {
    toggleVideo();
})


close.addEventListener('click', (e) => {
    toggleVideo();
    video.pause();
})

function toggleVideo(){
    let playing = document.querySelector('.video-container');   
    playing.classList.toggle('active');
    video.currentTime = 0;
    video.play();
}