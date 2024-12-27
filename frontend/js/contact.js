document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const sendButton = form.querySelector('.send-message-btn');

    sendButton.addEventListener('click', (e) => {
        e.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const mailtoLink = `mailto:majorosviki13@gmail.com?subject=Message from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

        window.location.href = mailtoLink;
    });
}); 