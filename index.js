const btnVideo = document.getElementById("btnVideo");
const videoBox = document.getElementById("videoBox");

if (btnVideo && videoBox) {
  btnVideo.addEventListener("click", () => {
    videoBox.classList.toggle("show");
  });
}
