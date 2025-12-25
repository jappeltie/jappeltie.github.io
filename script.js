
const overlay = document.getElementById("overlay");
const overlayImg = document.getElementById("overlay-img");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".pizza-thumb").forEach(img => {
    img.addEventListener("click", () => {
        overlay.style.display = "flex";
        overlayImg.src = img.src;
        overlayImg.alt = img.alt;
    });
});

closeBtn.addEventListener("click", () => {
    overlay.style.display = "none";
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.style.display = "none";
    }
});
