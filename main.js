
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

    await showLabel(250)


    function showAd() {
        label.classList.add("wrapper-hidden")

        leftTopSticker.style.transform= "translate(-100%, -100%)";
        topSticker.style.transform = "translate(0%, -100%)";
        topRightSticker.style.transform = "translate(100%, -100%)";
        leftCenterSticker.style.transform = "translate(-100%, 0%)";
        rightCenterSticker.style.transform = "translate(100%, 0%)";
        rightBottomSticker.style.transform = "translate(100%, 100%)";
        leftBottomSticker.style.transform = "translate(-100%, 100%)";
        bottomCenterSticker.style.transform = "translate(0%, 200%)";

        label.addEventListener("transitionend", ()=>{
            stickers.style.display="none"
        });
    }

    const label = document.getElementsByClassName('label-wrapper')[0];
    label?.addEventListener('click', showAd);
}