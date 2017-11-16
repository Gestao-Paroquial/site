window.onload =  function () {
    const xmlhttp = new XMLHttpRequest();
    const url = "http://localhost:3000/messages";

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let data = JSON.parse(this.responseText);
            createMessages(data);
        }
    }

    xmlhttp.open('GET', url, true);
    xmlhttp.send();

    function createMessages(data) {
        var message = document.getElementById('message');

        for (let i = 0; i < data.length; i++) {
            message.innerHTML += 
                '<div class="post-preview">' +
                    '<a href="post.php">' +
                    '<h2 class="post-title">' +
                        data[i]['header'] +
                    '</h2>' +
                    '<h3 class="post-subtitle">' +
                        data[i]['content'] + 
                    '</h3>' +
                    '</a>' +
                '</div>' +
                '<div class="post-preview">' +
                    '<p class="post-meta">' + data[i].footer + '</p>' +
                '</div>' +
                '<hr/>';
        }
    }
}