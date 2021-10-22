const _landscapeImageIds = [
        86, 72, 78, 58, 14, 40, 46, 84, 15, 83, 59, 16, 82, 85, 45, 61, 39,
    ],
    _portraitImageIds = [
        38, 32, 26, 27, 13, 76, 17, 5, 53, 10, 28, 4, 69, 57, 48, 2, 81,
        31, 60, 23, 77, 6, 41, 21, 20, 35, 50, 37, 79, 80, 54, 42, 52,
        67, 1, 30, 68, 71, 33, 55, 8, 22, 11, 73, 70, 45, 3, 56, 12, 19,
        65, 36, 29, 51, 34, 9, 66, 74, 49, 7, 25, 47, 62, 64, 24, 18, 44,
        75, 43, 63
    ]


const navTargetRegistry = () => {
    window.open(
        "https://www.target.com/gift-registry/giftgiver?registryId=152e7cfdeada41aebb14d2a5d44a2b20&type=WEDDING",
        '_blank'
    )
}

const navBBBRegistry = () => {
    window.open(
        "https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/550311334",
        '_blank'
    )
}

const navCBRegistry = () => {
    window.open(
        "https://www.crateandbarrel.com/gift-registry/rebeca-muniz-and-kamp-duong/r6331796",
        '_blank'
    )
}

function makeImageCarousel(imageCarouselId, imageIds) {
    let imageCarousel = document.getElementById(imageCarouselId),
        DOMString = "",
        firstImage = true;

    imageIds.forEach(imageId => {
        DOMString += `<div class="carousel-item ${firstImage ? "active" : ''}">
            <img class="d-block w-100" src="/assets/LoveLettersCo${imageId}.jpg" alt="Some Cute Image Of Us">
        </div>`;
        if (firstImage)
            firstImage = false;
    })
    imageCarousel.innerHTML = DOMString;
}

function createCountDown() {
    let countDownDate = new Date("Jan 15, 2022").getTime(),
        now = new Date().getTime(),
        distance = countDownDate - now,
        days = Math.floor(distance / (1000 * 60 * 60 * 24)),
        daysTerm = Math.abs(days) > 1 ? "days" : "day",
        DOMString;

    if (days > 0) {
        DOMString = `${days} ${daysTerm} until the wedding!`;
    }
    else if (days === 0) {
        DOMString = "The wedding is TODAY!";
    }
    else {
        DOMString = `The wedding was ${Math.abs(days)} ${daysTerm} ago.`
    }

    document.getElementById("count-down").innerHTML = DOMString;
}

function init() {
    makeImageCarousel('image-carousel', _landscapeImageIds);
    makeImageCarousel('image-carousel-vert', _portraitImageIds);
    createCountDown();
}

init();