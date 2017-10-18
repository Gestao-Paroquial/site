$(document).ready(function () {
    $.ajax({
        url: "http://localhost:3000/carrousel",
        success: function (data) {
            var mainCarousel = document.getElementById('main-carousel');

            data.forEach(function (carouselItem) {
                var div = document.createElement('div');
                div.className = 'item';

                var a = document.createElement('a');
                var href = document.createAttribute('href');
                href.value = carouselItem.destinoDoSlider;
                a.setAttributeNode(href);

                var img = document.createElement('img');
                var src = document.createAttribute('src');
                var alt = document.createAttribute('alt');
                src.value = carouselItem.imagem;
                alt.value = carouselItem.descricao;
                img.setAttributeNode(src);
                img.setAttributeNode(alt);
                img.className = 'carousel-img img-responsive';

                a.appendChild(img);
                div.appendChild(a);

                mainCarousel.appendChild(div);

                // carouselImg.setAttributeNode(style);
            });

            /* css */
            // var style = document.createElement('style');
            // style.innerHTML = '.carousel-img {' +
            // 'cursor: pointer;' +
            // 'height: 450px; !important' +
            // 'width: 100%;' +
            // '}';
            //
            // var head = document.getElementsByTagName('head')[0];
            // head.appendChild(style);
            // console.log(head);

            // var carouselImg = div.getElementsByClassName('carousel-img')[0];
            // var style = document.createAttribute('style');
            // style.value = 'cursor: pointer;';
            //     // 'height: 450px;' +
            //     // 'width: 100%;';

            var firstDiv = mainCarousel.firstElementChild;
            firstDiv.className = 'item active';
        }
    });
});