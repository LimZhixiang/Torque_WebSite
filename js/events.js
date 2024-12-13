const highlights = document.querySelectorAll('.highlights-img');
let currentIndex = 0;

function showNextSlide() {
    // Fade out the current image by setting opacity to 0
    highlights[currentIndex].style.opacity = 0;

    setTimeout(() => {
        // Hide the current image by setting display to 'none'
        highlights[currentIndex].style.display = 'none';

        // Increment the currentIndex or loop back to the first image if necessary
        currentIndex = (currentIndex + 1) % highlights.length;

        // Display the next image and set opacity to 0 to prepare for fade-in
        highlights[currentIndex].style.display = 'block';
        highlights[currentIndex].style.opacity = 0;

        setTimeout(() => {
            // Set opacity to 1 for the next image to fade it in
            highlights[currentIndex].style.opacity = 1;
        }, 500); // Delay to ensure the display property change takes effect
    }, 500); // 500ms is the fade-out duration
}

// Call showNextSlide every 5 seconds (5000 milliseconds)
setInterval(showNextSlide, 5000);
// Get a reference to all the register buttons
const registerButtons = document.querySelectorAll('.register_button');

// Get a reference to the .form-container
const formContainer = document.querySelector('.form-container');

const successfulRegister = document.querySelector('#successful_register');


// Add a click event listener to each register button
registerButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Show the form-container when a register button is clicked
        formContainer.classList.add('show');
    });
});

// Add a click event listener to the "Close" button inside the form-container
const closeButton = document.querySelector('#close_registration');
closeButton.addEventListener('click', () => {
    // Hide the form-container when the "Close" button is clicked
    formContainer.classList.remove('show');
});

const submitButton = document.querySelector('#submit_registration');
submitButton.addEventListener('click', () => {
    // Hide the form-container when the "Close" button is clicked
    formContainer.classList.remove('show');
    // Show the successful_register div
    successfulRegister.style.display = 'block';
    setTimeout(() => {
        successfulRegister.style.opacity = 1; // Fade in
    }, 500);
    // Set a timer to hide the successful_register div after 5 seconds
    setTimeout(() => {
        successfulRegister.style.opacity = 0; // Fade out
        setTimeout(() => {
            successfulRegister.style.display = 'none'; // Hide
        }, 500); // 500ms is the fade-out duration
    }, 5000); // 5000ms (5 seconds) delay before hiding
});

const eventHeaders = document.querySelectorAll('.events_header');
const eventOptions = document.querySelectorAll('.event_option');

// Loop through the headers and options and set the text content
for (let i = 0; i < eventHeaders.length; i++) {
    eventOptions[i].textContent = eventHeaders[i].textContent;
}