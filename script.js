function openMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('open');
}

const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});