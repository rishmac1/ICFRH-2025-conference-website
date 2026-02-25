const sections = document.querySelectorAll("main section");
const navItems = document.querySelectorAll("nav ul li a");
const burger = document.getElementById("burger");
const popup = document.getElementById("popup");



document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll("nav ul li a");
    navLinks.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // Highlight active navigation link on scroll

    window.addEventListener("scroll", () => {
        let currentSectionId = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSectionId = section.getAttribute("id");
            }
        });

        navItems.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSectionId) {
                link.classList.add("active");
            }
        });
    });

    // Burger menu toggle

    let isPopupOpen = false;

    burger.addEventListener("click", () => {
        isPopupOpen = !isPopupOpen;
        popup.classList.toggle("active", isPopupOpen);
    });

    // Close popup on scroll
    let lastScrollTop = 0;
    window.addEventListener("scroll", () => {
        const scrollTop = window.scrollY || document.documentElement.scrollTop;
        if (scrollTop > lastScrollTop) {
            popup.classList.remove("active");
            isPopupOpen = false;
        }
        lastScrollTop = scrollTop;
    });

    // Dynamic year in footer
    const footer = document.querySelector("footer p");
    if (footer) {
        const currentYear = new Date().getFullYear();
        footer.textContent = `© ${currentYear} NCAMP. All rights reserved.`;
    }
});
