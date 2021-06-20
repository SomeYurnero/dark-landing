const headerSocialsIconImg = document.querySelector(".header__socials-icon-img");
const headerSocialsContainer = document.querySelector(".header__socials-container");
if (headerSocialsIconImg) {
    headerSocialsIconImg.addEventListener("click", function(e) {
        headerSocialsIconImg.classList.toggle("header__socials-icon-img_active");
        headerSocialsContainer.classList.toggle("header__socials-container_active");
        document.body.classList.toggle("body_lock");
    });
}

headerSocialsIconImg.addEventListener("click", function(e) {
    e.stopPropagation();
    headerSocialsIconImg.classList.toggle("header__socials-icon-img_active");
});

document.addEventListener('click', function(e) {
    const target = e.target;
    const its_headerSocialsContainer = target == headerSocialsContainer || headerSocialsContainer.contains(target);
    const its_headerSocialsIconImg = target == headerSocialsIconImg;
    const headerSocialsContainer_is_active = headerSocialsContainer.classList.contains("header__socials-container_active");

    if (!its_headerSocialsContainer && !its_headerSocialsIconImg && headerSocialsContainer_is_active) {
        headerSocialsContainer.classList.toggle("header__socials-container_active");
        document.body.classList.toggle("body_lock");
    }
});