// Function to handle file input change
function handleFileInputChange() {
    const inputImg = document.getElementById('InputImg');
    const showUploadImg = document.getElementById('show_upload_img');

    // Check if a file was selected
    if (inputImg.files.length > 0) {
        const selectedFile = inputImg.files[0];
        const objectURL = URL.createObjectURL(selectedFile);

        // Set the source of the show_upload_img element to the selected image
        showUploadImg.src = objectURL;
    }
}

// Function to handle "Post Now" button click
function handlePostNowClick() {
    const inputCaption = document.getElementById('InputCaption').value;
    const showUploadImg = document.getElementById('show_upload_img');

    // Create a new post container div
    const postContainer = document.createElement('div');
    postContainer.className = 'post_container';

    // Create an image element inside the post container
    const imgElement = document.createElement('img');
    imgElement.className = 'img-fluid';
    imgElement.src = showUploadImg.src;

    // Create a paragraph element inside the post container for caption text
    const captionElement = document.createElement('h4');
    captionElement.textContent = inputCaption;

    // Append the image and caption to the post container
    postContainer.appendChild(imgElement);
    postContainer.appendChild(captionElement);

    // Append the post container to the share_container
    const shareContainer = document.querySelector('.share_container');
    shareContainer.insertBefore(postContainer, shareContainer.firstChild);
}

// Add event listeners for file input change and "Post Now" button click
document.getElementById('InputImg').addEventListener('change', handleFileInputChange);
document.querySelector('.upload_button').addEventListener('click', handlePostNowClick);