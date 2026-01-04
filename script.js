const scanBtn = document.getElementById("scanBtn");
const loading = document.getElementById("loading");
const progressText = document.getElementById("progress");
const videoBox = document.getElementById("videoBox");
const video = document.getElementById("futureVideo");

scanBtn.addEventListener("click", () => {
  scanBtn.style.display = "none";
  loading.classList.remove("hidden");

  let progress = 0;

  const interval = setInterval(() => {
    progress += 4;
    progressText.textContent = `Analyzing DNA... ${progress}%`;

    if (progress >= 100) {
      clearInterval(interval);
      loading.classList.add("hidden");
      videoBox.classList.remove("hidden");
      video.play();
    }
  }, 200);
});
