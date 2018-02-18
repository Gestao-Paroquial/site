$(document).ready(() => {
    $.getJSON("/db-spg.json", {}, ({ carousel }) => {

        if (carousel) {
            let carousel_inner = document.querySelector('.carousel-inner');

            carousel.forEach((item) => {
                let carouse_item = carouselItemView(item);
                $(carousel_inner).append(carouse_item);
            });

            carousel_inner.firstChild.nextSibling.className = "carousel-item active";
        }
    });
});

function carouselItemView(item) {
    return `
    <div class="carousel-item">
        <a href="${item.destinoDoSlider}">
            <img class="d-block carousel__img" src="${item.imagem}" alt="${item.descricao}">
        </a>
    </div>`
}