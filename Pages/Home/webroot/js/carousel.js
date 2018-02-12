$(document).ready(() => {
    $.getJSON("http://localhost:3000/carousel", {}, (res) => {
        if (res) {
            let carousel_inner = document.querySelector('.carousel-inner');

            res.forEach((item) => {
                $(carousel_inner).append(
                    `<div class="carousel-item">
                        <img class="d-block carousel__img" src="${item.imagem}">
                    </div>`
                );
            });

            carousel_inner.firstChild.nextSibling.className = "carousel-item active";
        }
    });
});