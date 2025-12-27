const openBtn = document.getElementById("openSearch");
const closeBtn = document.getElementById("closeSearch");
const overlay = document.getElementById("searchOverlay");

openBtn.addEventListener("click", () => {
    overlay.classList.add("active");
    
});

closeBtn.addEventListener("click", () => {
    overlay.classList.remove("active");
});

// Close on ESC
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        overlay.classList.remove("active");
    }
});
