
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () =>
{
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// CLOSE MENU AFTER CLICKING A LINK
document.querySelectorAll(".nav-links a").forEach(link =>
{
    link.addEventListener("click", () =>
    {
        navLinks.classList.remove("active");
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

// TYPING ANIMATION
const typingElement = document.getElementById("typing");

const words = [
    "Web Developer",
    "Programmer",
    "Technology Enthusiast",
    "Future Developer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect()
{
    const currentWord = words[wordIndex];

    if (deleting)
    {
        charIndex--;
    } else
    {
        charIndex++;
    }

    typingElement.textContent =
        currentWord.substring(0, charIndex);

    let delay = deleting ? 55 : 100;

    if (!deleting && charIndex === currentWord.length)
    {
        deleting = true;
        delay = 1500;
    } else if (deleting && charIndex === 0)
    {
        deleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 400;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
    ".section-heading, .about-card, .skill-card, .contact-card"
);

revealElements.forEach(element =>
{
    element.classList.add("reveal");
});

const observer = new IntersectionObserver((entries) =>
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

revealElements.forEach(element =>
{
    observer.observe(element);
});

// SKILL BAR ANIMATION
const skillBars = document.querySelectorAll(".progress-fill");

const skillObserver = new IntersectionObserver((entries) =>
{
    entries.forEach(entry =>
    {
        if (entry.isIntersecting)
        {
            entry.target.style.width =
                entry.target.dataset.width;

            skillObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

skillBars.forEach(bar =>
{
    skillObserver.observe(bar);
});

// AUTOMATIC COPYRIGHT YEAR
document.getElementById("year").textContent =
    new Date().getFullYear();
