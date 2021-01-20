btnHamburger.addEventListener("click", () => {
    console.log("clicked");
    header.classList.toggle("open");
    if (header.classList.contains("open")) {
        overlay.classList.remove("fade-out");
        overlay.classList.add("fade-in");
    } else {
        overlay.classList.add("fade-out");
        overlay.classList.remove("fade-in");
    }
});
