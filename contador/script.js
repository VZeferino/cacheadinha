document.getElementById("start").addEventListener("click", function() {
    const progressBar = document.getElementById("progress-bar");
    const progressContainer = document.querySelector(".progress-container");
    const result = document.getElementById("result");
    let progress = 0;

    progressContainer.style.display = "block";

    let interval = setInterval(() => {
        if (progress >= 100) {
            clearInterval(interval);
            result.style.display = "block";
        } else {
            progress += 2;
            progressBar.style.width = progress + "%";
        }
    }, 100);
});
