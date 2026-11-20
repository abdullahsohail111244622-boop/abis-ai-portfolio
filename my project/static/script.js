
/* ==========================================
   M. ABIS SULTAN | AI ENGINEER
   WEBSITE JAVASCRIPT
========================================== */


/* 1. MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks)
{

    menuToggle.addEventListener("click", () =>
    {

        const isOpen = navLinks.classList.toggle("active");

        menuToggle.setAttribute("aria-expanded", String(isOpen));

        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation" : "Open navigation"
        );

    });

    navLinks.querySelectorAll("a").forEach(link =>
    {

        link.addEventListener("click", () =>
        {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

            menuToggle.setAttribute(
                "aria-label",
                "Open navigation"
            );

        });

    });

    document.addEventListener("click", event =>
    {

        if (
            !navLinks.contains(event.target) &&
            !menuToggle.contains(event.target)
        )
        {

            navLinks.classList.remove("active");

            menuToggle.setAttribute("aria-expanded", "false");

        }

    });

}


/* 2. DYNAMIC COPYRIGHT YEAR */

const yearElement = document.getElementById("year");

if (yearElement)
{

    yearElement.textContent = new Date().getFullYear();

}


/* 3. AI ENGINEER TYPING ANIMATION */

const typingElement = document.getElementById("typing");

if (typingElement)
{

    const words = [
        "AI Engineer",
        "Generative AI Developer",
        "AI Automation Enthusiast",
        "AI Solutions Builder",
        "Technology Innovator"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion)
    {

        typingElement.textContent = "AI Engineer";

    } else
    {

        function typeEffect()
        {

            const currentWord = words[wordIndex];

            if (!deleting)
            {

                charIndex++;

                typingElement.textContent =
                    currentWord.substring(0, charIndex);

                if (charIndex === currentWord.length)
                {

                    deleting = true;

                    setTimeout(typeEffect, 1500);

                    return;

                }

                setTimeout(typeEffect, 85);

            } else
            {

                charIndex--;

                typingElement.textContent =
                    currentWord.substring(0, charIndex);

                if (charIndex === 0)
                {

                    deleting = false;

                    wordIndex = (wordIndex + 1) % words.length;

                    setTimeout(typeEffect, 400);

                    return;

                }

                setTimeout(typeEffect, 40);

            }

        }

        typeEffect();

    }

}


/* 4. SCROLL REVEAL ANIMATIONS */

const revealElements = document.querySelectorAll(
    ".section-heading, .about-content, .about-visual, " +
    ".expertise-card, .service-card, .project-card, .contact-wrapper"
);

const motionPreference = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
).matches;

if ("IntersectionObserver" in window && !motionPreference)
{

    revealElements.forEach(element =>
    {

        element.classList.add("reveal");

    });

    const revealObserver = new IntersectionObserver(
        (entries, observer) =>
        {

            entries.forEach(entry =>
            {

                if (entry.isIntersecting)
                {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element =>
    {

        revealObserver.observe(element);

    });

}


/* 5. CLOSE MENU WHEN RESIZING TO DESKTOP */

window.addEventListener("resize", () =>
{

    if (window.innerWidth > 768 && navLinks && menuToggle)
    {

        navLinks.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    }

});


/* 6. UPDATE NAVIGATION ACTIVE STATE */

const pageSections = document.querySelectorAll(
    "main section[id], main header[id]"
);

const navItems = document.querySelectorAll(
    ".nav-links a:not(.nav-cta)"
);

if ("IntersectionObserver" in window)
{

    const sectionObserver = new IntersectionObserver(
        entries =>
        {

            entries.forEach(entry =>
            {

                if (entry.isIntersecting)
                {

                    navItems.forEach(link =>
                    {

                        const isCurrent =
                            link.getAttribute("href") ===
                            "#" + entry.target.id;

                        if (isCurrent)
                        {
                            link.setAttribute("aria-current", "location");
                        } else
                        {
                            link.removeAttribute("aria-current");
                        }

                    });

                }

            });

        },
        {
            rootMargin: "-30% 0px -60% 0px"
        }
    );

    pageSections.forEach(section =>
    {

        sectionObserver.observe(section);

    });

}
