"use strict";
function MakeGame(theImg) {
    // DIV BOX
    var ele = document.createElement("ele");
    ele.classList.add("item")

    // IMG CONTAINER FOR IMAGE INSIDE DIV BOX
    var hdrImage = document.createElement("div");
    hdrImage.classList.add("imageContainer");
    ele.appendChild(hdrImage);

    // THE IMG
    var itemImg = document.createElement("img");
    itemImg.src = theImg;
    hdrImage.appendChild(itemImg);

    // ANSWERS CONTAINER
    var ansContainer = document.createElement("div");
    ansContainer.classList.add("imageContainer");
    ele.appendChild(ansContainer);
    // MODIFY HERE KEEGAN

    return ele;
}