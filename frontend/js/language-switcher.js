let contentData = null;

// Load the content data
async function loadContent() {
    try {
        const response = await fetch('/data/content.json');
        contentData = await response.json();
        // Initialize with default language
        updateContent('en');
    } catch (error) {
        console.error('Error loading content:', error);
    }
}

function updateContent(lang) {
    if (!contentData) {
        console.error('No content data available');
        return;
    }

    // Update all elements with data-content attribute
    document.querySelectorAll('[data-content]').forEach(element => {
        const path = element.dataset.content.split('.');
        let content = contentData[lang];
        try {
            path.forEach(key => {
                content = content[key];
            });
            element.textContent = content;
        } catch (error) {
            console.error(`Error updating content for path ${path.join('.')}:`, error);
        }
    });

    // Update navigation
    const navLinks = document.querySelectorAll('.nav-links a[data-content]');
    navLinks.forEach(link => {
        const path = link.dataset.content.split('.');
        let content = contentData[lang];
        path.forEach(key => {
            content = content[key];
        });
        link.textContent = content;
    });

      // Update services title
      const servicesTitle = document.querySelector('.services-title');
      if (servicesTitle) {
          servicesTitle.innerHTML = `${contentData[lang].services.title}<span class="accent">.</span>`;
      }
    
    // Update services content
    document.querySelectorAll('[data-service]').forEach(card => {
        const serviceType = card.dataset.service;
        const serviceData = contentData[lang].services[serviceType];
        
        // Update basic content
        card.querySelector('[data-content="title"]').textContent = serviceData.title;
        card.querySelector('[data-content="price"]').textContent = serviceData.price;
        card.querySelector('[data-content="subtitle"]').textContent = serviceData.subtitle;
        card.querySelector('[data-content="packageIncludes"]').textContent = contentData[lang].services.packageIncludes;
        
        // Update features
        const featuresList = card.querySelector('.visible-content');
        featuresList.innerHTML = serviceData.features
            .map(feature => `<li>${feature}</li>`)
            .join('');
            
        // Update hidden features if they exist
        if (serviceData.hiddenFeatures) {
            const hiddenList = card.querySelector('.hidden-content');
            if (hiddenList) {
                hiddenList.innerHTML = serviceData.hiddenFeatures
                    .map(feature => `<li>${feature}</li>`)
                    .join('');
            }
        }
        
        // Update buttons
        card.querySelector('.contact-btn').textContent = contentData[lang].buttons.contact;
        const showMoreBtn = card.querySelector('.show-more');
        if (showMoreBtn) {
            showMoreBtn.textContent = card.classList.contains('expanded') 
                ? contentData[lang].buttons.showLess 
                : contentData[lang].buttons.showMore;
        }
    });

    // Update footer copyright
    const copyrightElement = document.querySelector('.copyright');
    if (copyrightElement) {
        copyrightElement.textContent = contentData[lang].footer.copyright;
    }

    // Update lists (like achievements)
    document.querySelectorAll('[data-list]').forEach(element => {
        const listPath = element.dataset.list.split('.');
        let listData = contentData[lang];
        listPath.forEach(key => {
            listData = listData[key];
        });
        
        if (Array.isArray(listData)) {
            element.innerHTML = listData
                .map(item => `<li>${item}</li>`)
                .join('');
        }
    });

    // Update About section content
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.querySelector('[data-content="about.title"]').textContent = contentData[lang].about.title;
        aboutSection.querySelector('[data-content="about.subtitle"]').textContent = contentData[lang].about.subtitle;
        aboutSection.querySelector('[data-content="about.description"]').textContent = contentData[lang].about.description;
        
        // Update achievements
        aboutSection.querySelector('[data-content="about.achievements.title"]').textContent = 
            contentData[lang].about.achievements.title;
        
        // Update achievement items
        const achievementsList = aboutSection.querySelector('.achievements-list');
        if (achievementsList) {
            achievementsList.innerHTML = contentData[lang].about.achievements.items
                .map(item => `<li>${item}</li>`)
                .join('');
        }
    }

    // Update Contact section content
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
        // Update titles and headings
        contactSection.querySelector('[data-content="contact.title"]').textContent = contentData[lang].contact.title;
        contactSection.querySelector('[data-content="contact.contacts.heading"]').textContent = contentData[lang].contact.contacts.heading;
        
        // Update form headings and labels
        contactSection.querySelector('[data-content="contact.form.heading"]').textContent = contentData[lang].contact.form.heading;
        contactSection.querySelector('[data-content="contact.form.name"]').textContent = contentData[lang].contact.form.name;
        contactSection.querySelector('[data-content="contact.form.email"]').textContent = contentData[lang].contact.form.email;
        contactSection.querySelector('[data-content="contact.form.message"]').textContent = contentData[lang].contact.form.message;
        
        // Update button
        contactSection.querySelector('.send-message-btn').textContent = contentData[lang].contact.form.send;
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    loadContent();
    
    // Add language switch event listeners
    document.querySelectorAll('.lang-btn').forEach(button => {
        button.addEventListener('click', function() {
            const lang = this.dataset.lang;
            updateContent(lang);
            
            // Update active state of language buttons
            document.querySelectorAll('.lang-btn').forEach(btn => {
                btn.classList.toggle('active', btn === this);
            });
        });
    });
});