const navToggleInput = document.getElementById("nav-menu-toggle");
const navToggle = document.getElementById("nav-toggle-label");
const navLinkList = document.querySelector(".nav-links");
const scroller = document.querySelector(".scroller");
const navLinks = document.querySelectorAll(".nav-link");


navToggleInput.addEventListener('click', () => {
    navToggle.classList.toggle("menu-clicked");

    navLinkList.classList.toggle("links-slide");

})

// if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//     addAnimation();
// }

// function addAnimation() {
//     scroller.setAttribute("data-animated", true);
// }

function duplicatedContent() {
    const scrollerInner = document.querySelector(".scroller-track");
    const scrollerContent = Array.from(scrollerInner.children);
    scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        duplicatedItem.setAttribute('aria-hidden', true);
        scrollerInner.appendChild(duplicatedItem);
    })
}

duplicatedContent();
duplicatedContent();

function closeMenu() {
    document.getElementById("nav-toggle-label").classList.remove("menu-clicked");
    navLinkList.classList.toggle("links-slide");
}

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        closeMenu();
    })
})