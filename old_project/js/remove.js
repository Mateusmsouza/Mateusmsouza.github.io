tabelas = []
tabelas.push(document.querySelector("#tabela_to_do"));
tabelas.push(document.querySelector("#tabela_doing"));
tabelas.push(document.querySelector("#tabela_done"));

for (tabela of tabelas){
	tabela.addEventListener('dblclick',function(event){
		if (event.target.textContent != "To Do!" && event.target.textContent != "Limite"){ 
			if (confirm("Exclui Task?")){
				event.target.parentNode.remove();
			};

		};
	});
};