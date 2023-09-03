window.addEventListener("scroll", () => {
    const nav = document.querySelector("nav");
    const logo = document.querySelector(".logo img");
    const scrollY = window.scrollY;
    const maxLogoSize = 90; 
    const logoSize = 100 - Math.min(scrollY * 0.6, maxLogoSize);
    
    nav.style.height = `${logoSize}%`;
    logo.style.width = `${logoSize}%`;
    logo.style.height = "auto";
});

const contactBoxes = document.querySelectorAll(".contact-box");

contactBoxes.forEach((box) => {
    const link = box.getAttribute("data-link");

    box.addEventListener("click", () => {
        if (link) {
            window.location.href = link;
        }
    });
});
