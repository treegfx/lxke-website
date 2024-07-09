document.addEventListener("DOMContentLoaded", function() {
    const texto = ["l", "lx", "lxk", "lxke"];
    title(texto)
});
function title(text, i = 0) {
    document.title = text[i];
    if (i === text.length - 1) {
        return;
    }
    setTimeout(() => {
        title(text, i + 1);
    }, 300);
}
var typed = new Typed('#text-wrapper', {
    strings: ["lxke"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
    showCursor: false,
    cursorChar: ""
})