document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.forEach(l => l.classList.remove('clicked', 'active'));
            this.classList.add('clicked', 'active');
        });
    });

    // Initialize EmailJS
    emailjs.init('TVbR4I3I_RCFX6f57');

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validate fields
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }

            // Validate email format
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }

            const templateParams = {
                from_name: name,
                from_email: email,
                message: `Email: ${email}\n\nMessage:\n${message}`,
                to_email: 'kommidruthendra2005@gmail.com',
                subject: `Portfolio Contact from ${name}`,
                reply_to: email
            };

            // Show sending status
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;

            emailjs.send('service_5lo62da', 'template_xxpsekp', templateParams)
                .then(function(response) {
                    alert('Thank you! Your message has been sent successfully.');
                    contactForm.reset();
                })
                .catch(function(error) {
                    alert('Failed to send message. Please try again later.');
                    console.error('EmailJS error:', error);
                })
                .finally(function() {
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});
