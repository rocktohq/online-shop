// Loader
var loader = document.getElementById("pre-loader");
$(document).ready(function() {
    loader.classList.add("stop");
    // setTimeout(() => { loader.classList.add("stop"); }, 700);
});

// Up Button on Scroll
const element = document.querySelector('.up-button');

function onScroll(event) {
    const current = document.documentElement.scrollTop;
    const maxHeight = document.body.scrollHeight;

    // if current position is more than 80% of document height
    if (current > maxHeight * 0.2) {
        element.classList.add('is-active');
    } else {
        element.classList.remove('is-active');
    }
}

window.addEventListener('scroll', event => onScroll(event));

// Go to Top
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}