document.addEventListener('DOMContentLoaded', function() {
    // Initialize skill bars
    const skillBars = document.querySelectorAll('.skill-percent');
    if (skillBars.length > 0) {
        setTimeout(() => {
            skillBars.forEach(bar => {
                const percent = bar.getAttribute('data-percent');
                bar.style.width = percent + '%';
            });
        }, 500);
    }
    
    // Dark/Light mode toggle
    const modeToggle = document.getElementById('modeToggle');
    if (modeToggle) {
        modeToggle.addEventListener('click', () => {
            document.body.classList.toggle('light-mode');
            if (document.body.classList.contains('light-mode')) {
                modeToggle.textContent = '☀️';
                localStorage.setItem('mode', 'light');
            } else {
                modeToggle.textContent = '🌙';
                localStorage.setItem('mode', 'dark');
            }
        });
        
        // Check for saved user preference
        const savedMode = localStorage.getItem('mode');
        if (savedMode === 'light') {
            document.body.classList.add('light-mode');
            modeToggle.textContent = '☀️';
        }
    }
    
    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formStatus = document.getElementById('formStatus');
            const submitBtn = document.getElementById('submitBtn');
            
            // Simulate form submission
            submitBtn.disabled = true;
            submitBtn.textContent = 'Sending...';
            formStatus.textContent = '';
            
            setTimeout(() => {
                formStatus.textContent = 'Message sent successfully! I\'ll get back to you soon.';
                formStatus.style.color = '#4CAF50';
                submitBtn.disabled = false;
                submitBtn.textContent = 'Send Message';
                contactForm.reset();
            }, 1500);
        });
    }
    
    // Add a particle effect to the background
    const particleCount = 30;
    const container = document.body;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        // Random position
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        
        // Random size
        const size = Math.random() * 5 + 2;
        
        // Random opacity
        const opacity = Math.random() * 0.5 + 0.3;
        
        // Random animation duration
        const duration = Math.random() * 20 + 10;
        
        // Style the particle
        particle.style.cssText = `
            position: fixed;
            top: ${posY}%;
            left: ${posX}%;
            width: ${size}px;
            height: ${size}px;
            background-color: var(--text-color);
            border-radius: 50%;
            opacity: ${opacity};
            pointer-events: none;
            z-index: -1;
            animation: float ${duration}s infinite ease-in-out;
            animation-delay: ${Math.random() * 5}s;
        `;
        
        container.appendChild(particle);
    }
    
    // Add hover effect for project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.03)';
            this.style.boxShadow = '0 15px 30px rgba(255, 0, 0, 0.4)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = '';
            this.style.boxShadow = '';
        });
    });
    
    // Add a typing animation to the tagline
    const tagline = document.querySelector('.tagline');
    if (tagline) {
        const text = tagline.textContent;
        tagline.textContent = '';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                tagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        // Start typing after a delay
        setTimeout(typeWriter, 1000);
    }
});

// Add keyframe animation for floating particles
const style = document.createElement('style');
style.textContent = `
@keyframes float {
    0%, 100% {
        transform: translateY(0) translateX(0);
    }
    25% {
        transform: translateY(-20px) translateX(10px);
    }
    50% {
        transform: translateY(-10px) translateX(-15px);
    }
    75% {
        transform: translateY(-25px) translateX(15px);
    }
}`;
document.head.appendChild(style);