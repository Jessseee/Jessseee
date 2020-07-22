function playButton(video, overlay) {
    if(video.paused) {
        video.play()
        overlay.style.display = "none";
    } else {
        video.pause();
        overlay.style.display = "block";
    }
}