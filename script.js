async function checkFeathers() {
    const studentId = document.getElementById('studentId').value.toUpperCase();

    if (!studentId) {
        alert("Please enter your Student ID.");
        return;
    }

    try {
        const response = await fetch(`https://script.google.com/macros/s/1tugYjEARN5dGy_lePuRxSDQiZ6trTqM9xbQk1vQoHXM/exec?id=${encodeURIComponent(studentId)}`);
        const data = await response.text();

        const feathersCountDisplay = document.getElementById('feathers-count');

        if (data === "Not found") {
            feathersCountDisplay.innerText = "Student ID not found.";
        } else {
            feathersCountDisplay.innerText = `Points: ${data}`;
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
        feather.style.left = `${Math.random() * 50 + 50}%`;
        feather.style.animationDuration = `${Math.random() * 5 + 5}s`;
        feather.style.animationDelay = `${index * 1}s`;
    });
});
