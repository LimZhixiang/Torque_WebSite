document.addEventListener('DOMContentLoaded', function (){
    const boxes = document.querySelectorAll('.upcoming_box');

        function checkBoxes(){
            const triggerBottom = window.innerHeight / 5 * 4;
            boxes.forEach((box) => {
                const boxTop = box.getBoundingClientRect().top;
                if(boxTop < triggerBottom){
                    box.classList.add('show');
                } else{
                    box.classList.remove('show');
                }
            });
        }
        window.addEventListener('scroll', checkBoxes);
        checkBoxes(); // Call the function once to check on page load
    });