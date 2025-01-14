document.addEventListener('DOMContentLoaded', () => {
    // Get the selected service from localStorage
    const selectedService = localStorage.getItem('selectedService');
    
    if (selectedService) {
        // Create a form group div for display
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        
        // Create the visible input element
        const serviceInput = document.createElement('input');
        serviceInput.type = 'text';
        serviceInput.value = selectedService;
        serviceInput.readOnly = true;
        serviceInput.id = 'service-type-display';
        
        // Create hidden input for form submission
        const hiddenInput = document.createElement('input');
        hiddenInput.type = 'hidden';
        hiddenInput.name = 'service-type';
        hiddenInput.value = selectedService;
        
        // Create the label
        const label = document.createElement('label');
        label.htmlFor = 'service-type-display';
        label.textContent = 'SERVICE TYPE';
        
        // Add elements to form group
        formGroup.appendChild(serviceInput);
        formGroup.appendChild(hiddenInput);
        formGroup.appendChild(label);
        
        // Insert after the form heading
        const form = document.querySelector('form');
        form.insertBefore(formGroup, form.firstChild);
    }
});