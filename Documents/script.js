document.getElementById("scrollTopBtn").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

document.getElementById("scrollBottomBtn").addEventListener("click", () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
});







document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();
    let status = document.getElementById("formStatus");

    if (!name || !email || !message) {
        status.textContent = "Please fill in all fields.";
        status.style.color = "red";
        return;
    }

    // Basic email validation
    const emailCheck = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailCheck.test(email)) {
        status.textContent = "Please enter a valid email address.";
        status.style.color = "red";
        return;
    }

    status.textContent = "Message successfully sent!";
    status.style.color = "green";

    // Clear form 
    document.getElementById("contactForm").reset();
});






// YouTube embed enhancements
document.addEventListener('DOMContentLoaded', function() {
    const videoIframe = document.querySelector('.video-container iframe');
    
    if (videoIframe) {
        // loading state
        videoIframe.addEventListener('load', function() {
            videoIframe.style.opacity = '1';
            console.log('YouTube video loaded successfully');
        });
        
        // Smooth appearance
        videoIframe.style.opacity = '0';
        videoIframe.style.transition = 'opacity 0.5s ease-in-out';
        
        
        videoIframe.addEventListener('click', function() {
            // Track video engagement if you have analytics
            console.log('User interacted with YouTube video');
        });
    }
    
    // loading for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const iframe = entry.target;
                iframe.src = iframe.dataset.src;
                observer.unobserve(iframe);
            }
        });
    });
    
    // Initialize loading
    const lazyIframes = document.querySelectorAll('iframe[data-src]');
    lazyIframes.forEach(iframe => {
        observer.observe(iframe);
    });
});


