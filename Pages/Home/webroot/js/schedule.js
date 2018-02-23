let noChurchEvent = {
    descricao: "Nenhuma",
    horario: "Nenhum",
    data: "Nenhuma",
    evento: "Nenhum"
}

window.onload = () => {
    let schedule_tbody = document.querySelector('.schedule__table tbody');
    
    let schedule_itens = $.getJSON("db.json", {}, (res) => {
        res = res.agenda;
        res.forEach(item => {
            $(schedule_tbody).append(getScheduleTBody(item));
        });
        initModal();
    });
}

function getScheduleTBody(item) {
    let segunda = item.segunda ? item.segunda : noChurchEvent;
    let terca = item.terca ? item.terca : noChurchEvent;
    let quarta = item.quarta ? item.quarta : noChurchEvent;
    let quinta = item.quinta ? item.quinta : noChurchEvent;
    let sexta = item.sexta ? item.sexta : noChurchEvent;
    let sabado = item.sabado ? item.sabado : noChurchEvent;
    let domingo = item.domingo ? item.domingo : noChurchEvent;

    return `
    <tr>
    <td data-descricao="${segunda.descricao}" data-horario="${segunda.horario}" data-data="${segunda.data}">${segunda.evento}</td>
    <td data-descricao="${terca.descricao}" data-horario="${terca.horario}" data-data="${terca.data}">${terca.evento}</td>
        <td data-descricao="${quarta.descricao}" data-horario="${quarta.horario}" data-data="${quarta.data}">${quarta.evento}</td>
        <td data-descricao="${quinta.descricao}" data-horario="${quinta.horario}" data-data="${quinta.data}">${quinta.evento}</td>
        <td data-descricao="${sexta.descricao}" data-horario="${sexta.horario}" data-data="${sexta.data}">${sexta.evento}</td>
        <td data-descricao="${sabado.descricao}" data-horario="${sabado.horario}" data-data="${sabado.data}">${sabado.evento}</td>
        <td data-descricao="${domingo.descricao}" data-horario="${domingo.horario}" data-data="${domingo.data}">${domingo.evento}</td>
    </tr>`;
}

function initModal() {
    $('.schedule__table td').on("click", (data) => {
        $('.schedule__modal-title').html(data.currentTarget.textContent);
        $('.schedule__description').html($(data.currentTarget).data('descricao'));
        $('.schedule__date').html($(data.currentTarget).data('data'));
        $('.schedule__timestamp').html($(data.currentTarget).data('horario'));

        $("#schedule__modal").modal('show');
    });
}