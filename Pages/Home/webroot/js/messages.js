class MessagesComponent extends HTMLElement {
  constructor() {
    super();

    ajaxMessagemParoco();
  }
}

function ajaxMessagemParoco(href) {
  const xmlhttp = new XMLHttpRequest();
  const url = href ? href : `${backEndUrl}/api/mensagensParocoPaginacao`;

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      let data = JSON.parse(this.responseText);
      createMessages(data);
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function createMessages(res) {
  createPaginationButtons(res);

  var message = document.querySelector("#message");

  for (let i = 0; i < res.data.length; i++) {
    let post_preview = document.createElement("div");
    post_preview.className = "post-preview";

    let post_ancher = document.createElement("a");
    let post_ancher_href = document.createAttribute("href");
    post_ancher_href.value = res.data[i].link;
    post_ancher.target = "_blank";
    post_ancher.setAttributeNode(post_ancher_href);

    let post_title = document.createElement("h2");
    post_title.className = "post-title";
    post_title.appendChild(document.createTextNode(res.data[i]["titulo"]));

    let post_subtitle = document.createElement("h3");
    post_subtitle.className = "post-subtitle";
    post_subtitle.appendChild(document.createTextNode(res.data[i]["subtitulo"]));

    post_ancher.appendChild(post_title);
    post_ancher.appendChild(post_subtitle);

    post_preview.appendChild(post_ancher);

    message.appendChild(post_preview);

    post_preview = document.createElement("div");
    post_preview.className = "post-preview";

    let post_paragraph = document.createElement("p");
    post_paragraph.className = "post-meta";
    console.log(res.data[i])
    post_paragraph.innerHTML = res.data[i].mensagem.replace('\n', '</br>');

    post_preview.appendChild(post_paragraph);

    message.appendChild(post_preview);

    hr = document.createElement("hr");
    message.appendChild(hr);
  }
}

window.customElements.define("home-messages", MessagesComponent);

function createPaginationButtons(res) {
  let rowPagination = document.querySelector('#home-pagination');
  removePaginationButton(rowPagination);

  rowPagination.appendChild(viewButtons(res.prev_page_url, "Anterior"));
  for (let i = 1; i <= res.last_page; i++) {
    let button = viewButtons(`${res.path}?page=${i}`, i);
    if (i == res.current_page) button.firstElementChild.style.backgroundColor = '#ccc';
    rowPagination.appendChild(button);
  }
  rowPagination.appendChild(viewButtons(res.next_page_url, "Proximo"));

  let links = document.querySelectorAll('.page-link');
  links.forEach(link => {
    link.addEventListener("click", function () {
      removePost();
      ajaxMessagemParoco(this.getAttribute('data-href'));
      window.scrollTo(0, 0);
    });
  });
//  }
}

function viewButtons(url, i) {
  let li = document.createElement('li');
  li.className = `page-item`;
  li.innerHTML = `<a class="page-link" data-href="${url}">${i}</a>`;

  return li;
}

function removePost() {
  let messages = document.querySelector('#message');
  while (messages.firstChild) {
    messages.removeChild(messages.firstChild);        
  }
}

function removePaginationButton(rowPagination) {
  while (rowPagination.firstChild) {
    rowPagination.removeChild(rowPagination.firstChild);
  }
}
