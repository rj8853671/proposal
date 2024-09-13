const buttons = document.querySelectorAll('.buttons button');

function updateButtonsOnHover(hoveredButton) {
    buttons.forEach(button => {
        if (button === hoveredButton) {
            button.innerText = 'Yes';
            button.style.backgroundColor = '#4CAF50'; // Yes button color
        } else {
            button.innerText = 'No';
            button.style.backgroundColor = '#f44336'; // No button color
        }
    });
}

// Event listeners for hover effect
buttons.forEach(button => {
    button.addEventListener('mouseover', function() {
        updateButtonsOnHover(this);
    });

    button.addEventListener('mouseleave', function() {
        // Revert buttons to their original states
        buttons.forEach(button => {
            if (button.id === 'yes-btn') {
                button.innerText = 'Yes';
                button.style.backgroundColor = '#4CAF50'; // Yes button color
            } else if (button.id === 'no-btn') {
                button.innerText = 'No';
                button.style.backgroundColor = '#f44336'; // No button color
            }
        });
    });
});
