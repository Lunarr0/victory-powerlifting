document.addEventListener('DOMContentLoaded', () => {
    // Get the selected service from localStorage
    const selectedService = localStorage.getItem('selectedService');
    
    if (selectedService) {
        // Find the hidden input and update its value
        const serviceTypeInput = document.querySelector('#service-type-display');
        if (serviceTypeInput) {
            serviceTypeInput.value = selectedService;
            
            // Make the input and its label visible
            serviceTypeInput.hidden = false;
            const formGroup = serviceTypeInput.closest('.form-group');
            if (formGroup) {
                formGroup.style.display = 'block';
            }
        }
    }

    // Handle form submission
    const form = document.querySelector('form[name="coaching-service"]');
    const submitButton = document.querySelector('.submit-btn');

    if (form) {
        form.addEventListener('submit', (e) => {
            // Don't prevent default - let Netlify handle the submission
            
            // Change button text to show loading
            submitButton.textContent = 'Submitting...';
            submitButton.disabled = true;

            // Clear localStorage
            localStorage.removeItem('selectedService');

            // Redirect to home page after submission
            // We'll use the form's action attribute for success redirect
        });
    }
});