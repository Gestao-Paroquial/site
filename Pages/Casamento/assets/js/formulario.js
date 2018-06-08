whenElementReady('.casamento__form', form => {
	loadAgendaOnPicker();
	$('.casamento__form').submit(function (event) {
		event.preventDefault();

		let date = $('#casamento__datepicker').val();
		$('#casamento__datepicker').val(date.split('/').reverse().join('-'));
		const data = formValuesToObject(form);
		data.casamento = true;
		data.batismo = false;

		$.ajax({
			type: 'post',
			url: `${backEndUrl}/api/pedidos`,
			data: JSON.stringify(data),
			contentType: "application/json; charset=utf-8",
			traditional: true,
			success: function (res) {
				if (res.success) $('#casamento__success').modal('show');;
				if (res.error) showWeddingErrors(res);
			}
		});
	});
});

function showWeddingErrors(res) {
	$('.casamento__message-error').empty();
	for (let campo in res.error) {
		$('.casamento__message-error').append(
			`<p class="help-block text-danger">*${res.error[campo]}</p>`
		);
	}
}

$(document).ready(function () {
	loadParoquiaComboBox();
	//ToDO: Mudar rotas do ajax
})

function loadParoquiaComboBox() {
	$.ajax({
		type: 'get',
		url: `${backEndUrl}/api/comunidades`,
		contentType: "application/json; charset=utf-8",
		success: (pastorais) => {
			pastorais.forEach((comunidade) => {
				$('#casamento__comunidade').append($('<option>', {
					value: comunidade.id,
					text: comunidade.nome
				}));
			});
		}
	});
}

function loadAgendaOnPicker() {
	var date_to_disable;
	$.ajax({
		type: 'get',
		url: `${backEndUrl}/api/agenda`,
		contentType: "application/json; charset=utf-8",
		success: (eventos) => {
			if (eventos) {
				eventos.forEach((evento) => {
					date_to_disable = evento.data_inicio_evento;
				});
			}
		},
		error: (xhr) => { console.log(xhr) }
	});

	$('#casamento__datepicker').datepicker({
		showOtherMonths: true,
		selectOtherMonths: true,
		dateFormat: "dd/mm/yy",
		minDate: new Date,
		maxDate: "31/12/2050",
		beforeShowDay: function (date) {
			if (date_to_disable) {
				var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
				return [date_to_disable.indexOf(string) == -1]
			}
		}
	});
}