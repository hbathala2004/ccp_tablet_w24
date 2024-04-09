

document.addEventListener("DOMContentLoaded", function() {
    const mainBtn = document.getElementById("home");
    const text = document.getElementById("text");

    mainBtn.addEventListener("click", function() {
        const currentFontSize = parseFloat(window.getComputedStyle(text).fontSize);
        const newFontSize = currentFontSize + 2; // Increase font size by 2 pixels

        text.style.fontSize = newFontSize + "2px";
    });
});