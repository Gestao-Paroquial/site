function sendMail(form) {
    if (form) {
        $('.casamento__form').submit(function (event) {
            event.preventDefault(); 

            const data = formValuesToObject(form);

            $.ajax({
                type: 'post',
                url: `${backEndUrl}/api/registrarPedidoDeCasamento`,
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
