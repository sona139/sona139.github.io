const videoScreen = document.querySelector("#video");
const video = document.querySelector(".video");
const pauseBtn = document.querySelector(".video-btn");
// const videoBackground = document.querySelector(".video-background");

videoScreen.addEventListener("click", () => {
	video.paused ? video.play() : video.pause();
	pauseBtn.classList.toggle("hide");
	// videoBackground.classList.toggle("hide");
});
