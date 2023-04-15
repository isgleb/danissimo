
window.onload= async () => {

    const stickers = document.getElementById("stickers-wrapper")

    const leftTopSticker = document.getElementsByClassName("sticker top left")[0];
    const topSticker = document.getElementsByClassName("sticker top x-center")[0];
    const topRightSticker = document.getElementsByClassName("sticker top right")[0];
    const leftCenterSticker = document.getElementsByClassName("sticker y-center left")[0];
    const rightCenterSticker = document.getElementsByClassName("sticker y-center right")[0];
    const rightBottomSticker = document.getElementsByClassName("sticker bottom right")[0];
    const leftBottomSticker = document.getElementsByClassName("sticker bottom left")[0];
    const bottomCenterSticker = document.getElementsByClassName("sticker bottom-center x-center")[0];

    async function showLabel(delayTime) {
        new Promise(resolve => setTimeout(resolve, delayTime)).finally(() => {
            label?.classList.remove("wrapper-hidden");
        })
    }

    await showLabel(500)


    function showAd() {
        console.log("sadjfhglkasfghlkashfgk")
        // stickers.classList.add("hidden")
        label.classList.add("wrapper-hidden")

        leftTopSticker.classList.add("top-left-transition")
        topSticker.classList.add("top-transition")
        topRightSticker.classList.add("top-right-transition")
        leftCenterSticker.classList.add("left-transition")
        rightCenterSticker.classList.add("right-transition")
        rightBottomSticker.classList.add("bottom-right-transition")
        leftBottomSticker.classList.add("bottom-left-transition")
        bottomCenterSticker.classList.add("bottom-transition")

    }

    const label = document.getElementsByClassName('label-wrapper')[0];
    label?.addEventListener('click', showAd);
}