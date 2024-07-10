document.addEventListener("DOMContentLoaded", function() {
    const texto = ["l", "lx", "lxk", "lxke"];
    var audio = document.getElementById("audio");
    const button = document.getElementById('mute');
    document.getElementById('overlay').addEventListener('click', function() {
        fade(this);
        title(texto);
        audio.play().catch(error => {
            console.log("Autoplay prevented: ", error);
        });
    });
});
function fade(element) {
    var op = 1; 
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 40);
    
}
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