botao = document.querySelector("#adicionando_task2");

botao.addEventListener('click',function(event){

	event.preventDefault();


	formulario = document.querySelector("#nova_tarefa");
	tarefa = formulario.task.value;
	data_max = formulario.data.value;

	adiciona_task(tarefa, data_max, "#tabela_to_do");
});



function adiciona_task(task, date_max, kind){

// fazer o código que retorna a data atual


	tabela = document.querySelector(kind);
	if (validaTask(task, date_max, tabela)){
		alert("Esta tarefa nesta data já está na tabela!");
		return ;
	}

	new_tr = document.createElement('tr');
	new_td1 = document.createElement('td');
	new_td2 = document.createElement('td');
	new_td1.textContent = task;
	new_td2.textContent = date_max;


	new_tr.appendChild(new_td1);
	new_tr.appendChild(new_td2);

	if (kind == "#tabela_done"){
		var today = new Date();
		data = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate() 
		console.log(data)
		new_td3 = document.querySelector('td')
		new_td3.textContent = data
		new_tr.appendChild(new_td3)
	}

	tabela.appendChild(new_tr);
	return ;
};

function remove_task(task, date_max, kind){
	tabela_temp = document.querySelector(kind);
	tabela_temp.childNodes.forEach(function(value,i){

		if(i > 1){
			if (tabela_temp.childNodes[i].textContent == task+date_max){
				tabela_temp.childNodes[i].remove()
				currently = null
			};
		};
	})
};