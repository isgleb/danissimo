let activeBlock = null;
let initialX = 0;
let initialY = 0;

const blocks = document.querySelectorAll('.sticker');

for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i];

    block.addEventListener('mousedown', dragStart);
    block.addEventListener('touchstart', dragStart);
    block.addEventListener('mouseup', dragEnd);
    block.addEventListener('touchend', dragEnd);
    block.addEventListener('mousemove', drag);
    block.addEventListener('touchmove', drag);

    function dragStart(e) {
        if (e.type === 'touchstart') {
            initialX = e.touches[0].clientX - e.target.offsetLeft;
            initialY = e.touches[0].clientY - e.target.offsetTop;
        } else {
            initialX = e.clientX - e.target.offsetLeft;
            initialY = e.clientY - e.target.offsetTop;
        }
        activeBlock = e.target;
    }

    function dragEnd(e) {
        initialX = 0;
        initialY = 0;
        activeBlock = null;
    }

    function drag(e) {
        if (activeBlock) {
            e.preventDefault();
            let currentX;
            let currentY;

            if (e.type === 'touchmove') {
                currentX = e.touches[0].clientX - initialX;
                currentY = e.touches[0].clientY - initialY;
            } else {
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
            }
            e.target.style.left = currentX + "px";
            e.target.style.top = currentY + "px";
        }
    }
}