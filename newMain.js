
const label = document.getElementById('swipe-label');
label.addEventListener('click', showAd);

new Promise(resolve => setTimeout(resolve, 400))
    .finally(() => {
        label.classList.remove("hidden");
})

function showAd() {
    label.classList.add("hidden")
    label.addEventListener("transitionend", () => {
        label.style.display="none"
    });
}

let activeBlock = null;
let initialX = 0;
let initialY = 0;

const blocks = document.querySelectorAll('.sticker');

blocks.forEach(block => {
    block.addEventListener('touchstart', dragStart);
    block.addEventListener('touchend', dragEnd);
    block.addEventListener('touchmove', drag);
})

function dragStart(e) {
    initialX = e.touches[0].clientX - e.target.offsetLeft;
    initialY = e.touches[0].clientY - e.target.offsetTop;
    activeBlock = e.target;
}

function dragEnd() {
    initialX = 0;
    initialY = 0;
    activeBlock = null;
}

function drag(e) {
    if (activeBlock) {
        e.preventDefault();
        let currentX = e.touches[0].clientX - initialX;
        let currentY = e.touches[0].clientY - initialY;
        e.target.style.left = currentX + "px";
        e.target.style.top = currentY + "px";
    }
}