
window.onload= async () => {

    function keyDown() {
        console.log("sadjfhglkasfghlkashfgk")
        stickers.classList.add("hidden")
        label.classList.add("wrapper-right-hidden")

    }

    const label = document.getElementsByClassName('label-wrapper')[0];
    label?.addEventListener('click', keyDown);

    // label.classList.remove("wrapper-hidden")

    const stickers = document.getElementById("stickers-wrapper")

    const leftTopSticker = document.getElementsByClassName("sticker top left")[0];
    const topSticker = document.getElementsByClassName("sticker top x-center")[0];
    const topRightSticker = document.getElementsByClassName("sticker top right")[0];
    const leftCenterSticker = document.getElementsByClassName("sticker y-center left")[0];
    const rightCenterSticker = document.getElementsByClassName("sticker y-center right")[0];
    const rightBottomSticker = document.getElementsByClassName("sticker bottom right")[0];
    const leftBottomSticker = document.getElementsByClassName("sticker bottom left")[0];
    const bottomCenterSticker = document.getElementsByClassName("sticker bottom-center x-center")[0];


    console.log(
        leftTopSticker,
        topSticker,
        topRightSticker,
        leftCenterSticker,
        rightCenterSticker,
        rightBottomSticker,
        leftBottomSticker,
        bottomCenterSticker
    )

    async function showLabel(delayTime) {
        new Promise(resolve => setTimeout(resolve, delayTime)).finally(() => {
            label?.classList.remove("wrapper-hidden");
        })
    }

    await showLabel(500)
}