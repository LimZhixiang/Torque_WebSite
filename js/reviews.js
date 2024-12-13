var GLC63_review_button = document.getElementById("GLC63-review-button");
var RS3_review_button = document.getElementById("RS3-review-button");
var M3_review_button = document.getElementById("M3-review-button");
var zx_profile = document.getElementById("zx_profile");
var review_container = document.getElementById("review-container");
var GLC63_review = document.getElementById("GLC63");
var RS3_review = document.getElementById("RS3");
var M3_review = document.getElementById("M3");
var element_close = document.getElementById("close");

element_close.addEventListener("click", function(){
    zx_profile.classList.remove("collapse"); // Hide the element tohide
    review_container.classList.remove("collapse");
    GLC63_review.classList.add("collapse");
    RS3_review.classList.add("collapse");
    M3_review.classList.add("collapse"); // Show the element toshow
    element_close.classList.add("collapse");
})

GLC63_review_button.addEventListener("click", function(){
    zx_profile.classList.add("collapse"); // Hide the element tohide
    review_container.classList.add("collapse");
    GLC63_review.classList.remove("collapse"); // Show the element toshow
    element_close.classList.remove("collapse");
})

RS3_review_button.addEventListener("click", function(){
    zx_profile.classList.add("collapse"); // Hide the element tohide
    review_container.classList.add("collapse");
    RS3_review.classList.remove("collapse"); // Show the element toshow
    element_close.classList.remove("collapse");
})

M3_review_button.addEventListener("click", function(){
    zx_profile.classList.add("collapse"); // Hide the element tohide
    review_container.classList.add("collapse");
    M3_review.classList.remove("collapse"); // Show the element toshow
    element_close.classList.remove("collapse");
})

function selectInitialImage() {
// Get the select1 image element
var GLC63_carousel1 = document.querySelector('[data-image="GLC63_select1.webp"]');
var RS3_carousel1 = document.querySelector('[data-image="RS3_select1.webp"]');
var M3_carousel1 = document.querySelector('[data-image="m3_select1.webp"]');

// Add the 'selected-image' class to select1
GLC63_carousel1.classList.add('selected-image');
RS3_carousel1.classList.add('selected-image');
M3_carousel1.classList.add('selected-image');
}

function displayImage(imageElement, imageSrc, targetImageId,current_row) {
    // Get the displayed image element specified by targetImageId
    var displayPic = document.getElementById(targetImageId);

    // Remove the 'selected-image' class from all images (for the specified set)
    var images = document.querySelectorAll('#' + current_row + ' img');
    images.forEach(function(img) {
        img.classList.remove('selected-image');
    });

    // Add the 'selected-image' class to the clicked image (for the specified set)
    imageElement.classList.add('selected-image');

    // Fade out the current image (for the specified set)
    displayPic.style.opacity = 0;

    // Wait for a short delay to allow the fade-out effect to complete
    setTimeout(function() {
        // Set the new image source (for the specified set)
        displayPic.src = "./" + imageSrc;

        // Fade in the new image (for the specified set)
        displayPic.style.opacity = 1;
    }, 500); // Adjust the delay time to match the transition duration
}

// Function to handle the scrolling and animation of the close button
function handleCloseButtonAnimation() {
    var navbar = document.querySelector('.navbar');

    // Add an event listener to the window's scroll event
    window.addEventListener('scroll', function () {
        var closeButton = document.getElementById('close');

        // Calculate the position of the navbar relative to the viewport
        var navbarRect = navbar.getBoundingClientRect();

        if (navbarRect.bottom <= 10) {
            // If the navbar is out of the viewport by 10px or less, slide the close button up
            closeButton.style.top = '15px';
        } else {
            // Otherwise, keep the close button in its default position
            closeButton.style.top = '100px'; // You can adjust this value as needed
        }
    });
}

// Call the function to initialize the behavior
handleCloseButtonAnimation();
