class MessagesComponent extends HTMLElement {
  constructor() {
    super();

    const xmlhttp = new XMLHttpRequest();
    const url = `${backEndUrl}/api/mensagensParoco`;

    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let data = JSON.parse(this.responseText);
        createMessages(data);
      }
    };

    xmlhttp.open("GET", url, true);
    xmlhttp.send();
  }
}

function createMessages(data) {
  var message = document.querySelector("#message");

  for (let i = 0; i < data.length; i++) {
    let post_preview = document.createElement("div");
    post_preview.className = "post-preview";

    let post_ancher = document.createElement("a");
    let post_ancher_href = document.createAttribute("href");
    post_ancher_href.value = data[i].link;
    post_ancher.target = "_blank";
    post_ancher.setAttributeNode(post_ancher_href);

    let post_title = document.createElement("h2");
    post_title.className = "post-title";
    post_title.appendChild(document.createTextNode(data[i]["titulo"]));

    let post_subtitle = document.createElement("h3");
    post_subtitle.className = "post-subtitle";
    post_subtitle.appendChild(document.createTextNode(data[i]["subtitulo"]));

    post_ancher.appendChild(post_title);
    post_ancher.appendChild(post_subtitle);

    post_preview.appendChild(post_ancher);

    message.appendChild(post_preview);

    post_preview = document.createElement("div");
    post_preview.className = "post-preview";

    let post_paragraph = document.createElement("p");
    post_paragraph.className = "post-meta";
    post_paragraph.innerHTML = data[i].mensagem;

    post_preview.appendChild(post_paragraph);

    message.appendChild(post_preview);

    hr = document.createElement("hr");
    message.appendChild(hr);
  }
}

window.customElements.define("home-messages", MessagesComponent);
