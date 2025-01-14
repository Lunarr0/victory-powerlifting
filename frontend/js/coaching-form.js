document.addEventListener('DOMContentLoaded', () => {
    // Get the selected service from localStorage
    const selectedService = localStorage.getItem('selectedService');
    
    if (selectedService) {
        // Find the hidden input
        const serviceTypeInput = document.querySelector('#service-type-display');
        if (serviceTypeInput) {
            serviceTypeInput.value = selectedService;
        }
        
        // Create visible display of service type
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        
        // Create the display input element
        const serviceDisplay = document.createElement('input');
        serviceDisplay.type = 'text';
        serviceDisplay.value = selectedService;
        serviceDisplay.readOnly = true;
        serviceDisplay.id = 'service-type-visible';
        
        // Create the label
        const label = document.createElement('label');
        label.htmlFor = 'service-type-visible';
        label.textContent = 'SERVICE TYPE';
        
        // Add elements to form group
        formGroup.appendChild(serviceDisplay);
        formGroup.appendChild(label);
        
        // Insert after the form heading
        const form = document.querySelector('form');
        form.insertBefore(formGroup, form.firstChild);
    }
});