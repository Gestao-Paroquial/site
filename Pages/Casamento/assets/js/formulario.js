function sendMail(form) {
    if (form) {
        $('.casamento__form').submit(function (event) {
            event.preventDefault();
            
            $.get('http://localhost:3025/casamento', $(this).serialize(), (res) => {
                if (res.success) {
                    alert('Pedindo de casamento enviado com sucesso');
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