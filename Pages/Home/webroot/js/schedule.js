window.onload = () => {
    let schedule_tbody = document.querySelector('.schedule__table tbody');
    
    let schedule_itens = $.getJSON("http://localhost:3000/agenda", {}, (res) => {
        res.forEach(item => {
            $(schedule_tbody).append(getScheduleTBody(item));
            initModal();
        });
    });
}

function getScheduleTBody(item) {
    return `
    <tr>
        <td>${item.segunda.evento}</td>
        <td>${item.terca.evento}</td>
        <td>${item.quarta.evento}</td>
        <td>${item.quinta.evento}</td>
        <td>${item.sexta.evento}</td>
        <td>${item.sabado.evento}</td>
        <td>${item.domingo.evento}</td>
    </tr>`;
}

function initModal() {
    $('.schedule__table td').on("click", (event) => {
        

        $("#schedule__modal").modal('show');
    });
}