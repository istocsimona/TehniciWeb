const images = ["../Imagini/Family.jpg", "../Imagini/Amigurumi.jpg", "../Imagini/Alin.jpg", "../Imagini/AllTheProjectAndTheTitle.jpg", "../Imagini/PictureWithMe.jpg"];

let autoChangeEnabled = true;

let autoChangeInterval;

document.addEventListener("keydown", function(event) {
    if (event.key === "n") {
        if (autoChangeEnabled) {
            changeImages();
        }
    } else if (event.key === "p") { 
        event.preventDefault(); 
        autoChangeEnabled = !autoChangeEnabled; 
        
        if (!autoChangeEnabled && autoChangeInterval) {
            clearInterval(autoChangeInterval);
        }
    }
});

if (autoChangeEnabled) {
    autoChangeInterval = setInterval(changeImages, 30000);
}

function changeImages() {
    const img1 = document.getElementById("img1");
    const img2 = document.getElementById("img2");

    let randomIndex1, randomIndex2;
    do {
        randomIndex1 = Math.floor(Math.random() * images.length);
        randomIndex2 = Math.floor(Math.random() * images.length);
    } while (randomIndex1 === randomIndex2);

    img1.src = images[randomIndex1];
    img2.src = images[randomIndex2];
}
