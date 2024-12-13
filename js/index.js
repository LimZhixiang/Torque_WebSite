function toggleRow(buttonId, containerId) {
    var specsContainer = document.getElementById(containerId);
    var button = document.getElementById(buttonId);
    if (specsContainer.style.display === 'none' || specsContainer.style.display === ''){
        specsContainer.style.display = 'block';
        button.innerHTML = 'Close';
    }
    else {
        specsContainer.style.display = 'none';
        button.innerHTML = 'View Specs';
    }
}

// Attach event listeners to the buttons
document.getElementById('toggleButton1').addEventListener('click', function () {
    toggleRow('toggleButton1', 'specs-container-1');
});

document.getElementById('toggleButton2').addEventListener('click', function () {
    toggleRow('toggleButton2', 'specs-container-2');
});

document.getElementById('toggleButton3').addEventListener('click', function () {
    toggleRow('toggleButton3', 'specs-container-3');
});