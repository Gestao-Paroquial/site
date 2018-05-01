$(document).ready(() => {
  $(document).on("submit", "#batismo-form", function(event) {
    event.preventDefault();

    const data = formValuesToObject(this);
    data.casamento = false;
    data.batismo = true;

    $.ajax({
      type: "post",
      url: `${backEndUrl}/api/pedidos`,
      data: JSON.stringify(data),
      contentType: "application/json; charset=utf-8",
      traditional: true,
      success: function(res) {
        if (res.success) alert("sucesso");
        if (res.error) showErrors(res.error);
      }
    });
  });
});
