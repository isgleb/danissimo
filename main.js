
window.onload= async () => {

    const leftTopSticker = document.getElementsByClassName("sticker top left")[0];
    let topSticker = document.getElementsByClassName("sticker top x-center")[0];
    const topRightSticker = document.getElementsByClassName("sticker top right")[0];
    const leftCenterSticker = document.getElementsByClassName("sticker y-center left")[0];
    const rightCenterSticker = document.getElementsByClassName("sticker y-center right")[0];
    const rightBottomSticker = document.getElementsByClassName("sticker bottom right")[0];
    const leftBottomSticker = document.getElementsByClassName("sticker bottom left")[0];
    const bottomCenterSticker = document.getElementsByClassName("sticker bottom-center x-center")[0];

    const stickers = [
        { el: leftTopSticker, x: 0, y: 0, isDragging: false },
        { el: topSticker, x: 0, y: 0, isDragging: false },
        { el: topRightSticker, x: 0, y: 0, isDragging: false},
        { el: leftCenterSticker, x: 0, y: 0, isDragging: false},
        { el: rightCenterSticker, x: 0, y: 0, isDragging: false},
        { el: rightBottomSticker, x: 0, y: 0, isDragging: false},
        { el: leftBottomSticker, x: 0, y: 0, isDragging: false},
        { el: bottomCenterSticker, x: 0, y: 0, isDragging: false},
    ]

    async function showLabel(delayTime) {
        new Promise(resolve => setTimeout(resolve, delayTime)).finally(() => {
            label?.classList.remove("wrapper-hidden");
        })
    }

    await showLabel(400)


    function showAd() {
        label.classList.add("wrapper-hidden")
        // label.style.display="none"
        label.addEventListener("transitionend", ()=>{
                label.style.display="none"
            });
    }

    const label = document.getElementsByClassName('label-wrapper')[0];
    label?.addEventListener('click', showAd);


    stickers?.forEach( sticker => {
        sticker.el?.addEventListener('pointerdown', (event) => {
            console.log(event)
            sticker.x = sticker.el.offsetLeft - event.clientX
            sticker.y = sticker.el.offsetTop - event.clientY
            sticker.isDragging = true
        }, true)
    })

    document.addEventListener("pointermove", (event) => {

        event.preventDefault();

        const sticker = stickers?.filter(sticker => { return sticker.isDragging } )[0]

        if (sticker) {
            sticker.el.style.left = (event.clientX + sticker.x) + 'px';
            sticker.el.style.top  = (event.clientY + sticker.y) + 'px';
        }
    },true)

    document.addEventListener('pointerup', function() {
        isDragging = false;
        stickers.forEach( (sticker) => {
            sticker.isDragging = false
        })

    }, true);
}