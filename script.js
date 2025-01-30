async function checkFeathers() {
    const studentId = document.getElementById('studentId').value.toUpperCase();

    if (!studentId) {
        alert("Please enter your Student ID.");
        return;
    }

    try {
        // Use backticks for proper template string formatting
        const response = await fetch(`https://script.google.com/macros/s/AKfycbzR7tY037YMIx-rxZVF1DEfxAJnAHYbVOoy3PwwHtLkpaBYPrNnM6yXIaYovcNGztNETw/exec?id=${encodeURIComponent(studentId)}`);
        const data = await response.text();

        const feathersCountDisplay = document.getElementById('feathers-count');

        if (data === "Not found") {
            feathersCountDisplay.innerText = "Student ID not found.";
        } else {
            feathersCountDisplay.innerText = `Points: ${data}`; // Corrected string interpolation
        }

        feathersCountDisplay.style.display = 'block'; // Show the display box
    } catch (error) {
        console.error('Error:', error);

        const feathersCountDisplay = document.getElementById('feathers-count');
        feathersCountDisplay.innerText = 'Error retrieving data.';
        feathersCountDisplay.style.display = 'block';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const feathers = document.querySelectorAll('#feathers i');

    feathers.forEach((feather, index) => {
        // Fixed the template literal syntax and added random values for feather positioning and animation duration
        feather.style.left = `${Math.random() * 50 + 50}%`;  // Random left position
        feather.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random animation duration
        feather.style.animationDelay = `${index * 1}s`;  // Animation delay based on index
    });
});
