$(document).ready(() => {
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
