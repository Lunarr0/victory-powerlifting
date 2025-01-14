document.addEventListener('DOMContentLoaded', () => {
    const showMoreButtons = document.querySelectorAll('.show-more');
    
    showMoreButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            
            // Get only this specific service card
            const clickedCard = button.closest('.service-card');
            
            // Close all other cards first
            document.querySelectorAll('.service-card').forEach(card => {
                if (card !== clickedCard) {
                    card.classList.remove('expanded');
                    const otherButton = card.querySelector('.show-more');
                    if (otherButton) {
                        const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
                        otherButton.textContent = currentLang === 'en' ? 'Show more' : 'Mutass többet';
                    }
                }
            });
            
            // Toggle only the clicked card
            clickedCard.classList.toggle('expanded');
            
            // Update button text for the clicked card
            const currentLang = document.querySelector('.lang-btn.active')?.dataset.lang || 'en';
            const isExpanded = clickedCard.classList.contains('expanded');
            
            const translations = {
                en: { more: 'Show more', less: 'Show less' },
                hu: { more: 'Mutass többet', less: 'Mutass kevesebbet' }
            };
            
            button.textContent = isExpanded 
                ? translations[currentLang].less 
                : translations[currentLang].more;
        });
    });

    // Add click handlers for contact buttons
    // document.querySelectorAll('.contact-btn').forEach(button => {
    //     button.addEventListener('click', () => {
    //         // You can replace this URL with any link you want
    //         window.open('https://docs.google.com/forms/d/e/1FAIpQLSdpnxbBNM8ZaAJZg3beTR-q0uzQKLsTCXoHiWrjYJ4CAuBcTg/viewform', '_blank');
    //     });
    // });

    // Add click handlers for contact buttons
    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', () => {
            // Get the title from the closest service-card
            const serviceCard = button.closest('.service-card');
            const serviceTitle = serviceCard.querySelector('h2').textContent;
            
            // Store the title in localStorage
            localStorage.setItem('selectedService', serviceTitle);
            
            // Navigate to the coaching form in the same window
            window.location.href = 'coaching-form.html';
        });
    });
}); 