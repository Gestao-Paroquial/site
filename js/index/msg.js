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
    for (let i = 0; i < data.length; i++) {
        let message = document.getElementById('message');
        message.innerHTML(
            '<div class="post-preview">' +
                '<a href="post.php">' +
                    '<h2 class="post-title">' + 
                        'Man must explore, and this is exploration at its greatest' +
                    '</h2>' +
                    '<h3 class="post-subtitle">' +
                        'Problems look mighty small from 150 miles up' +
                    '</h3>' +
                '</a>' +
            '</div>'
        );
    }
}