function buildCarousel(carousel_inner) {
  if (carousel_inner) {
    $.get(`${backEndUrl}/api/eventosHome`, {}, carousel => {
      if (carousel && carousel.length > 0) {
        carousel.forEach(item => {
          let carouse_item = carouselItemView(item);
          $(carousel_inner).append(carouse_item);
        });
      } else {
        insertSubImage(carousel_inner);
      }
    })
      .fail(function () {
        insertSubImage(carousel_inner);
      })
      .always(function () {
        carousel_inner.firstChild.nextSibling.className = "carousel-item active";
      });
  } else {
    setTimeout(function () {
      buildCarousel(document.querySelector(".carousel-inner"));
    }, 0);
  }
}
buildCarousel(document.querySelector(".carousel-inner"));

function carouselItemView(item) {
  const imagem = !item.error
    ? `${backEndUrl}${item.imagem}`
    : "https://www.altoastral.com.br/wp-content/uploads/2016/11/igreja-catolica.jpg";

  return `
        <div class="carousel-item">
            <a href="${item.destino}" target="_blank">
                <img class="d-block carousel__img" src="${imagem}" alt="${item.descricao}">
            </a>
        </div>`;
}

function insertSubImage(carousel_inner) {
  $(carousel_inner).append(
    carouselItemView({
      error: true,
      destino: "/index.html",
      descricao: "igreja são lucas"
    })
  );
}