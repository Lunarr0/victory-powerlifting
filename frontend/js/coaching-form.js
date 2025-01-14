document.addEventListener('DOMContentLoaded', () => {
    // Get the selected service from localStorage
    const selectedService = localStorage.getItem('selectedService');
    
    if (selectedService) {
        // Create a form group div
        const formGroup = document.createElement('div');
        formGroup.classList.add('form-group');
        
        // Create the input element
        const serviceInput = document.createElement('input');
        serviceInput.type = 'text';
        serviceInput.value = selectedService;
        serviceInput.readOnly = true;
        serviceInput.id = 'service-type';
        serviceInput.name = 'service-type';
        
        // Create the label
        const label = document.createElement('label');
        label.htmlFor = 'service-type';
        label.textContent = 'SERVICE TYPE';
        
        // Add elements to form group
        formGroup.appendChild(serviceInput);
        formGroup.appendChild(label);
        
        // Insert after the form heading
        const form = document.querySelector('form');
        form.insertBefore(formGroup, form.firstChild);
    }
});