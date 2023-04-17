

// $(document).ready( function() {

    console.log("loaded")

    var leftTopSticker = document.getElementsByClassName("sticker top left")[0];
    var topSticker = document.getElementsByClassName("sticker top x-center")[0];
    var topRightSticker = document.getElementsByClassName("sticker top right")[0];
    var leftCenterSticker = document.getElementsByClassName("sticker y-center left")[0];
    var rightCenterSticker = document.getElementsByClassName("sticker y-center right")[0];
    var rightBottomSticker = document.getElementsByClassName("sticker bottom right")[0];
    var leftBottomSticker = document.getElementsByClassName("sticker bottom left")[0];
    var bottomCenterSticker = document.getElementsByClassName("sticker bottom-center x-center")[0];

    // var leftTopSticker = $(".sticker.top.left")[0];
    // var topSticker = $(".sticker.top.x-center")[0];
    // var topRightSticker = $(".sticker.top.right")[0];
    // var leftCenterSticker = $(".sticker.y-center.left")[0];
    // var rightCenterSticker = $(".sticker.y-center.right")[0];
    // var rightBottomSticker = $(".sticker.bottom.right")[0];
    // var leftBottomSticker = $(".sticker.bottom.left")[0];
    // var bottomCenterSticker = $(".sticker.bottom-center.x-center")[0];

    console.log(leftTopSticker)

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

    // async function showLabel(delayTime) {
    //     new Promise(resolve => setTimeout(resolve, delayTime)).finally(() => {
    //         label?.classList.remove("wrapper-hidden");
    //     })
    // }
    //
    // await showLabel(400)

    function showAd() {
        label.classList.add("wrapper-hidden")
        label.addEventListener("transitionend", ()=>{
            label.style.display="none"
        });
    }

    const label = document.getElementsByClassName('label-wrapper')[0];
    label?.addEventListener('click', showAd);


    stickers?.forEach( sticker => {
        sticker.el.addEventListener("touchstart", (event) => {
            console.log(event)
            sticker.x = sticker.el.offsetLeft - event.clientX
            sticker.y = sticker.el.offsetTop - event.clientY
            sticker.isDragging = true
        }, false)



        // sticker.el?.addEventListener('touchstart', (event) => {
        //     console.log(event)
        //     sticker.x = sticker.el.offsetLeft - event.clientX
        //     sticker.y = sticker.el.offsetTop - event.clientY
        //     sticker.isDragging = true
        // }, false)
    })

    document.addEventListener("touchmove", (event) => {

        event.preventDefault();

        const sticker = stickers?.filter(sticker => { return sticker.isDragging } )[0]

        if (sticker) {
            sticker.el.style.left = (event.clientX + sticker.x) + 'px';
            sticker.el.style.top  = (event.clientY + sticker.y) + 'px';
        }
    },false)

    document.addEventListener('touchend', function() {
        stickers.forEach( (sticker) => {
            sticker.isDragging = false
        })
    }, false);
// })