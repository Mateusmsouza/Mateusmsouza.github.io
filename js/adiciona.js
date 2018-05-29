botao = document.querySelector("#adicionando_task");

botao.addEventListener('click',function(event){
	event.preventDefault();


	formulario = document.querySelector("#nova_tarefa");
	tarefa = formulario.task.value;
	data_max = formulario.data.value;
<<<<<<< HEAD
	adiciona_task(tarefa, data_max, "#tabela_to_do");

});


// Função responsável por gerenciar as tasks
function adiciona_task(task, date_max, kind){
	tabela = document.querySelector(kind);

	new_tr = document.createElement('tr');
=======
	adiciona_task(tarefa, data_max);

});

function adiciona_task(task, date_max){
	tabela = document.querySelector("#tabela_to_do");
	console.log(tabela)
	new_tr = document.createElement('tr');
	console.log(new_tr);
>>>>>>> 533d0e7d965186bd57a74a20f517692fc6b5ddad
	new_td1 = document.createElement('td');
	new_td2 = document.createElement('td');
	new_td1.textContent = task;
	new_td2.textContent = date_max;


	new_tr.appendChild(new_td1);
	new_tr.appendChild(new_td2);
	tabela.appendChild(new_tr);
	return ;
<<<<<<< HEAD
}

function remove_task(task, date_max, kind){
	tabela = document.querySelector(kind);
	tabela.childNodes.forEach(function(value,i){
		if(i > 1){
			if (tabela.childNodes[i].textContent == task+date_max){
				tabela.childNodes[i].remove()
			}
		};
	})
=======
>>>>>>> 533d0e7d965186bd57a74a20f517692fc6b5ddad
}