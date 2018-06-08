whenElementReady('#cpf', function () {
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