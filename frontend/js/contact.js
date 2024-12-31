document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const submitButton = document.querySelector('.send-message-btn');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Change button text to show loading
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        try {
            const formData = new FormData(form);
            const response = await fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: new URLSearchParams(formData).toString()
            });

            if (response.ok) {
                // Success message
                submitButton.textContent = 'Message Sent!';
                form.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = 'SEND MESSAGE';
                    submitButton.disabled = false;
                }, 3000);
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);
            submitButton.textContent = 'Error! Try Again';
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitButton.textContent = 'SEND MESSAGE';
                submitButton.disabled = false;
            }, 3000);
        }
    });
}); 