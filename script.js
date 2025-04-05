// a reminder for this.  https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
// load images
function loadImages(category) {
    var xhr = new XMLHttpRequest();  // XMLHttpRequest object
    var url = "resource/" + category + ".json";  // Sets JSON file

    xhr.open("GET", url, true);  // Open request

    xhr.onload = function() {
        if (xhr.status == 200) {  // checks requests
            var response = JSON.parse(xhr.responseText);  

            // Set the image source for each image
            var img1 = document.getElementById("image1");
            img1.src = response[0].url;

            var img2 = document.getElementById("image2");
            img2.src = response[1].url;

            var img3 = document.getElementById("image3");
            img3.src = response[2].url;

            var img4 = document.getElementById("image4");
            img4.src = response[3].url;

            var img5 = document.getElementById("image5");
            img5.src = response[4].url;

            var img6 = document.getElementById("image6");
            img6.src = response[5].url;
        }
    };

    xhr.send();  // Sends request
}

// load car images
document.getElementById("carBtn").addEventListener("click", function() {
    loadImages("cars");  
});

// load train images
document.getElementById("trainBtn").addEventListener("click", function() {
    loadImages("trains");  
});

// When the "Planes" button is clicked, load plane images
document.getElementById("planeBtn").addEventListener("click", function() {
    loadImages("planes");  
});
