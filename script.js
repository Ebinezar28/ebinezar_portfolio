// Intro section display
window.addEventListener('load', () => {
    const introSection = document.getElementById('intro');
    introSection.classList.add('show');
});

// View Profile button functionality
document.getElementById('view-profile-btn').addEventListener('click', () => {
    const introSection = document.getElementById('intro');
    introSection.classList.remove('show');

    // Smooth scroll to about section after intro fades
    setTimeout(() => {
        document.getElementById('about').scrollIntoView({
            behavior: 'smooth'
        });
    }, 500);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form handling
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your email! I will get back to you soon.');
    this.reset();
});

// Add scroll animation for sections
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(section);
});

// Certificate modal functionality
const modal = document.getElementById('certificate-modal');
const closeBtn = document.querySelector('.close-btn');

document.querySelectorAll('.certifications-list li').forEach(item => {
    item.addEventListener('click', () => {
        modal.style.display = 'block';
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

const modal = document.getElementById("certificateModal");
const modalFrame = document.getElementById("certificateFrame");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".certifications-list li").forEach(item => {
    item.addEventListener("click", () => {
       const file = item.getAttribute("data-file");
        modalFrame.src = file;  // load certificate (image or PDF)
        modal.style.display = "flex";
    });
});

    // Close the modal
closeBtn.onclick = () => {
modal.style.display = "none";
modalFrame.src = "";
};

    // Close when clicking outside modal content
window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
           modalFrame.src = "";
       }
};

