
var dots=document.getElementById("ellipsis");

(function blink() {
    switch (dots.innerHTML) {
        case "":
            dots.innerHTML = ".";
            break;
        case ".":
            dots.innerHTML = "..";
            break;
        case "..":
            dots.innerHTML = "...";
            break;
        default:
            dots.innerHTML = "";
            break;
    }
    setTimeout(blink, 1000);
})();