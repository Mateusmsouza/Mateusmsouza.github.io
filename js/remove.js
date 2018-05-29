tabela = document.querySelector("#tabela_to_do");



tabela.addEventListener('dblclick',function(event){
	if (event.target.textContent != "To Do!" && event.target.textContent != "Limite"){ 
		if (confirm("Exclui Task?")){
			event.target.parentNode.remove();
		};

	};
});