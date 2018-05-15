function sendMail(form) {
    if (form) {
        $('.casamento__form').submit(function(event) {
            event.preventDefault();

            let date = $('#casamento__datepicker').val();
            $('#casamento__datepicker').val(date.split('/').reverse().join('-'));
            const data = formValuesToObject(form);

            $.ajax({
                type: 'post',
                url: 'http://localhost:8000/api/registrarPedidoDeCasamento',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                traditional: true,
                success: function(res) {
                    if (res.success) {
                        alert('sucesso')
                    }
                    if (res.error) showErrors(res.error);
                }
            });
        });
    } else {
        setTimeout(function() {
            sendMail(document.querySelector('.casamento__form'));
        }, 0);
    }
}

sendMail(document.querySelector('.casamento__form'));

window.onload = function() {

    loadAgendaOnPicker();
    loadParoquiaComboBox();

    //ToDO: Mudar rotas do ajax
}

function loadParoquiaComboBox() {
    $.ajax({
        type: 'get',
        url: 'http://paroquiasle.org.br/api/pastorais',
        contentType: "application/json; charset=utf-8",
        success: (pastorais) => {
            pastorais.forEach((pastoral) => {
                $('#casamento__pastoral').append($('<option>', {
                    value: pastoral.id,
                    text: pastoral.comunidade.nome
                }));
            });
        }
    });
}

function loadAgendaOnPicker() {
    var date_to_disable;
    $.ajax({
        type: 'get',
        // url: `${backEndUrl}/api/agendas`,
        url: 'http://laravel.paroquiasle.org.br/api/agenda',
        contentType: "application/json; charset=utf-8",
        success: (eventos) => {
            if (eventos) {
                eventos.forEach((evento) => {
                    date_to_disable = evento.data_inicio_evento;
                });
            }
        },
        error: (error) => {
            console.log(error);
        }
    });

    $('#casamento__datepicker').datepicker({
        showOtherMonths: true,
        selectOtherMonths: true,
        dateFormat: "dd/mm/yy",
        minDate: new Date,
        maxDate: "31/12/2050",
        beforeShowDay: function(date) {
            if (date_to_disable) {
                var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
                return [date_to_disable.indexOf(string) == -1]
            }
        }
    });
}