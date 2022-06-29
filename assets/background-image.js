

// https://cdn.shopify.com/s/files/1/0573/4111/6468/files/image-36.png

var imageArr = ['image-1', 'image-2', 'image-3', 'image-4','image-5','image-6','image-7','image-8', 'image-9','image-10', 'image-11', 'image-12','image-13', 'image-14', 'image-15','image-16','image-17','image-18', 'image-19', 'image-20', 'image-21'];
let arrLength = imageArr.length;

let imageIndex = randomIndex(arrLength);

console.log(imageIndex);

function randomIndex(arrLength) {

    return (Math.floor(Math.random()*arrLength));
}


function loadBackground(image) {

///images/image-1.jpg
document.body.style.backgroundImage = `url(https://cdn.shopify.com/s/files/1/0573/4111/6468/files/${image}.png)`; 
document.body.style.backgroundSize = "cover";

}

document.addEventListener("DOMContentLoaded", () => {
    loadBackground(imageArr[imageIndex]);
});



