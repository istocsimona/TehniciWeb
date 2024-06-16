const sentences = [
    "Arta nu este un meșteșug, este transmiterea simțământului trăit de artist. ",
    "Nici arta nu a încheiat războiul cu morile de vânt",
    "Să nu te bizui niciodată, într-o operă nouă, pe avântul dobândit din cea precedentă. Și să-ți cucerești pentru fiecare operă un public nou.",
    "În casa bântuită a vieții, arta este singura scară care nu scârțâie.",
    "Un artist trebuie să fie liber să aleagă ceea ce face, desigur, dar el trebuie de asemeni să nu îi fie frică niciodată să facă ceea ce a ales.",
    "Arta este impunerea unui tipar asupra experienței și plăcerea noastră estetică este recunoașterea acestui tipar.",
    "Tratează o operă de artă ca pe un prinț. Las-o pe ea să vorbească mai întâi."
];

function getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
}

function displayRandomSentence() {
    const randomIndex = getRandomIndex(sentences.length);
    const randomSentence = sentences[randomIndex];
    
    const footer = document.getElementById("footer");
    const h3 = document.createElement("h3");
    h3.innerText = randomSentence;
    footer.appendChild(h3);
}

window.onload = displayRandomSentence;
