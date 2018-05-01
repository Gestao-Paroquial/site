const showErrors = (error) => Object.values(error).forEach(alert);

const formValuesToObject = (form) => $(form).serializeArray().reduce((prev, curr)=>{
    prev[curr.name] = curr.value;
    return prev
},{});

function sendMail(form) {
    if (form) {
        $('.casamento__form').submit(function (event) {
            event.preventDefault(); 

            const data = formValuesToObject(form);

            $.ajax({
                type: 'post',
                url: 'http://laravel.paroquiasle.org.br/api/registrarPedidoDeCasamento',
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8",
                traditional: true,
                success: function (res) {
                    if (res.success) alert('sucesso')
                    if(res.error) showErrors(res.error);
                }
            });
        });
    } else {
        setTimeout(function () {
            sendMail(document.querySelector('.casamento__form'));
        }, 0);
    }
}

sendMail(document.querySelector('.casamento__form'));
