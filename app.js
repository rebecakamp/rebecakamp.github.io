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

// let _portraits = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 17, 18, 19, 20, 21,
//     22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37,
//     38, 41, 42, 43, 44, 45, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56,
//     57, 60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 73, 74, 75, 76,
//     77, 79, 80, 81
// ]
    
// let _landscapes = [
//     14, 15, 16, 39, 40, 45, 46, 58, 59, 61, 72, 78, 82, 83, 84, 85, 86
// ]

// let portraits = [..._portraits];
// let landscapes = [..._landscapes];

// const getAssortedPortraits = () => {

//     if (portraits.length === 0)
//         portraits = [..._portraits];

//     let index = Math.floor(Math.random() * portraits.length);
//     let returnVal = portraits[index];
//     portraits.splice(index, 1);

//     return returnVal;
// }

// const getAssortedLandscapes = () => {

//     if (landscapes.length === 0)
//         landscapes = [..._landscapes];

//     let index = Math.floor(Math.random() * landscapes.length);
//     let returnVal = landscapes[index];
//     landscapes.splice(index, 1);

//     return returnVal;
// }

// let landscapeTimer = setInterval(() => {
//     document.getElementById("section_one").style.backgroundImage =
//         `url(assets/LoveLettersCo${getAssortedLandscapes()}.jpg)`
// }, 4000);

// let portraitTimer = setInterval(() => {
//     document.getElementById("portrait").src =
//         `assets/LoveLettersCo${getAssortedPortraits()}.jpg`
// }, 5000);