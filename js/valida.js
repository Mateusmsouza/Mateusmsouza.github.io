// Função que valida se uma task com uma data já consta em uma determinada tabela.
// Ela itera a tabela comparando se task e data já se encontram na tabela, obrigatoriamente, só retona true
// se esta task com esta data, já estiver na tabela.

function validaTask(task, date_max, tabela){
	var contem = null
	for (var i=1; i < tabela.children.length ; i++){
		if (task == tabela.children[i].cells[0].textContent && date_max == tabela.children[i].cells[1].textContent){
			contem = 1
			
		}else{
			void(0);
		};
	};
	if (contem == 1){
			return true;
	}else{
		return false;
	};
};