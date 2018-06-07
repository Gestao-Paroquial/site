let noChurchEvent = {
	descricao: "Nenhuma",
	horario: "Nenhum",
	data: "Nenhuma",
	titulo: "Nenhum"
}

window.onload = () => {
	let schedule_tbody = document.querySelector('.schedule__table tbody');

	// let schedule_itens = $.getJSON(`http://laravel.paroquiasle.org.br/api/agenda`, {},
	let schedule_itens = $.getJSON(`${backEndUrl}/api/agenda`, {},
		(res) => {
			schedule_itens = insertDayOfWeek(res);
			
			schedule_itens.forEach(item => {
				$(schedule_tbody).append(getScheduleTBody(item));
			});
			if (schedule_itens.length == 0) {
				$(schedule_tbody).append(noSchedule());
			}
			initModal();
		});
}

function formatDate(item) {
	let date_evento = item.data_inicio_evento;

	item.data = date_evento.slice(0, 10).split('-').reverse().join('/');
	item.horario = date_evento.slice(11, 20);

	return item;
}

function insertDayOfWeek(schedule) {
	let current_date = new Date().toISOString().slice(0, 10);
	let itens = [];
	schedule.forEach(item => {
		item = formatDate(item);

		let data_evento = item.data_inicio_evento.slice(0, 10);
		obj_data_evento = new Date(data_evento);
		let new_item = {};

		let this_week = new Date();
		this_week.setDate(this_week.getDate() + 7);
		let day_limit = this_week.toISOString().slice(0, 10);

		if (data_evento > current_date && data_evento < day_limit) {
			let week_day = obj_data_evento.getDay();
			switch (week_day) {
				case 0:
					new_item.domingo = item;
					itens.push(new_item);					
					break;
				case 1:
					new_item.segunda = item;
					itens.push(new_item);					
					break;
				case 2:
					new_item.terca = item;
					itens.push(new_item);					
					break;
				case 3:
					new_item.quarta = item;
					itens.push(new_item);					
					break;
				case 4:
					new_item.quinta = item;
					itens.push(new_item);					
					break;
				case 5:
					new_item.quinta = item;
					itens.push(new_item);					
					break;
				case 6:
					new_item.quinta = item;
					itens.push(new_item);					
					break;
			}
		}
	});
	return itens;
}

function getScheduleTBody(item) {
	let segunda = item.segunda ? item.segunda : noChurchEvent;
	let terca = item.terca ? item.terca : noChurchEvent;
	let quarta = item.quarta ? item.quarta : noChurchEvent;
	let quinta = item.quinta ? item.quinta : noChurchEvent;
	let sexta = item.sexta ? item.sexta : noChurchEvent;
	let sabado = item.sabado ? item.sabado : noChurchEvent;
	let domingo = item.domingo ? item.domingo : noChurchEvent;

	return `
    <tr>
        <td data-descricao="${segunda.descricao}" data-horario="${segunda.horario}" data-data="${segunda.data}">${segunda.titulo}</td>
        <td data-descricao="${terca.descricao}" data-horario="${terca.horario}" data-data="${terca.data}">${terca.titulo}</td>
        <td data-descricao="${quarta.descricao}" data-horario="${quarta.horario}" data-data="${quarta.data}">${quarta.titulo}</td>
        <td data-descricao="${quinta.descricao}" data-horario="${quinta.horario}" data-data="${quinta.data}">${quinta.titulo}</td>
        <td data-descricao="${sexta.descricao}" data-horario="${sexta.horario}" data-data="${sexta.data}">${sexta.titulo}</td>
        <td data-descricao="${sabado.descricao}" data-horario="${sabado.horario}" data-data="${sabado.data}">${sabado.titulo}</td>
        <td data-descricao="${domingo.descricao}" data-horario="${domingo.horario}" data-data="${domingo.data}">${domingo.titulo}</td>
    </tr>`;
}

function initModal() {
	$('.schedule__table td').on("click", (data) => {
		$('.schedule__modal-title').html(data.currentTarget.textContent);
		$('.schedule__description').html($(data.currentTarget).data('descricao'));
		$('.schedule__date').html($(data.currentTarget).data('data'));
		$('.schedule__timestamp').html($(data.currentTarget).data('horario'));

		$("#schedule__modal").modal('show');
	});
}

function noSchedule() {
	return `
	<tr style="text-align: center">
		<td colspan="7">Não há eventos agendados</td>
	</tr>`
}