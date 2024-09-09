document.addEventListener('DOMContentLoaded', () => {
    const lightBulb = document.getElementById('Light');
    const toggleBtn = document.getElementById('toggle');

    toggleBtn.addEventListener('click', () => {
        console.log('Button clicked');
        
        fetch('/toggle-light', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(response => {
            console.log('Response received');
            return response.json();
        })
        .then(data => {
            console.log('Data received:', data);

            if (data.on) {
                // Add 'on' class and remove 'off' class
                lightBulb.classList.add('on');
                lightBulb.classList.remove('off');
                toggleBtn.textContent = 'Turn Off';
            } else {
                // Add 'off' class and remove 'on' class
                lightBulb.classList.add('off');
                lightBulb.classList.remove('on');
                toggleBtn.textContent = 'Turn On';
            }

            // Log the current class list
            console.log('Current classes:', lightBulb.classList);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});