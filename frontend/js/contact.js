document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', (e) => {
        // Netlify will handle the form submission
        // You can add success message handling here if you want
        console.log('Form submitted');
    });
}); 