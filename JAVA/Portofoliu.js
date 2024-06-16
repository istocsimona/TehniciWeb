document.getElementById("selectFilter").addEventListener("change", function() {
    var option = this.value;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/filter?option=" + option, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var response = JSON.parse(xhr.responseText);
            updateImages(response.images);
        }
    };
    xhr.send();
});

function updateImages(images) {
    var pozeContainer = document.getElementById("poze");

    images.forEach(function(imageSrc) {
        var img = document.createElement("img");
        img.src = "../Imagini/" + imageSrc;
        img.alt = imageSrc.split(".")[0];
        pozeContainer.appendChild(img);
    });
}
