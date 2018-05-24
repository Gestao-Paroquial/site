$(document).ready(() => {
  $(window).bind("load", function () {
    $('#cpf').mask('000.000.000-00', { reverse: true });
    $('#phone').mask('(00) 0000-00009');

    $('#phone').blur(function (event) {
      if ($(this).val().length == 15) { // Celular com 9 dígitos + 2 dígitos DDD e 4 da máscara
        $('#phone').mask('(00) 00000-0009');
      } else {
        $('#phone').mask('(00) 0000-00009');
      }
    });
    
  });
  $(document).on("submit", "#batismo-form", function (event) {
    event.preventDefault();

    $("#batismo-form input").each(function () {
      $(this).removeClass("is-invalid");
      $(this).next().text("");
    });

    const data = formValuesToObject(this);
    data.casamento = false;
    data.batismo = true;

    $.ajax({
      type: "post",
      url: `${backEndUrl}/api/pedidos`,
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function (res) {
        if (res.success) sucesso(data);
        if (res.error) showErrors(res.error);
      }
    });
  });

  function sucesso({ nome, email }) {
    $('.batismo-info').hide();
    $('.subheading').hide();

    $('header h1')
      .css('font-size', '36px')
      .css('font-weight', 'normal')
      .html(`Obrigado <strong>${nome}</strong>, o Padre recebeu sua solicitação, assim que ele responder você receberá a notificação no email: <em>${email}</em>`);

    $("html, body").animate({ scrollTop: "0px" });
  }
});
