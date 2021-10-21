const accordionElements = document.querySelectorAll(".c-faqs_accordion_element");

accordionElements.forEach(element => {
    element.addEventListener("click", () => {
        element.classList.toggle("active");
    })
})