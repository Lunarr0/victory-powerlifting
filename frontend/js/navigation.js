// Contact form handling
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        try {
            const response = await fetch('/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(Object.fromEntries(formData))
            });
            
            if (response.ok) {
                alert('Message sent successfully!');
                contactForm.reset();
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Failed to send message. Please try again.');
        }
    });
} 

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let isOpen = false;

    // Language switcher buttons
    const langButtons = document.querySelectorAll('.language-btn');
    
    hamburger.addEventListener('click', (e) => {
        e.stopPropagation();
        isOpen = !isOpen;
        navLinks.style.display = isOpen ? 'flex' : 'none';
        
        const icon = hamburger.querySelector('i');
        if (isOpen) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking language buttons
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  // Only on mobile
                isOpen = false;
                navLinks.style.display = 'none';
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // Existing click outside handler
    document.addEventListener('click', (e) => {
        if (isOpen && !navLinks.contains(e.target)) {
            isOpen = false;
            navLinks.style.display = 'none';
            const icon = hamburger.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Close menu when clicking nav links
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {  // Only on mobile
                isOpen = false;
                navLinks.style.display = 'none';
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}); 