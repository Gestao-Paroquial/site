function sendMail(form) {
	if (form) {
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
				url: `http://laravel.paroquiasle.org.br/api/pedidos`,
				data: JSON.stringify(data),
				contentType: "application/json; charset=utf-8",
				traditional: true,
				success: function (res) {
					if (res.success) $('#casamento__success').modal('show');;
					if (res.error) showWeddingErrors(res);
				}
			});
		});
	} else {
		setTimeout(function () {
			sendMail(document.querySelector('.casamento__form'));
		}, 0);
	}
}

function showWeddingErrors(res) {
	$('.casamento__message-error').empty();
	for (let campo in res.error) {
		$('.casamento__message-error').append(
			`<p class="help-block text-danger">*${res.error[campo]}</p>`
		);
	}
}

sendMail(document.querySelector('.casamento__form'));

$(document).ready(function () {
	loadParoquiaComboBox();
	//ToDO: Mudar rotas do ajax
})

function loadParoquiaComboBox() {
	$.ajax({
		type: 'get',
		url: 'http://laravel.paroquiasle.org.br/api/comunidades',
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
		beforeShowDay: function (date) {
			if (date_to_disable) {
				var string = jQuery.datepicker.formatDate('yy-mm-dd', date);
				return [date_to_disable.indexOf(string) == -1]
			}
		}
	});
}