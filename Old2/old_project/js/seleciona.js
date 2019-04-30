tabelas = []
tabelas.push(document.querySelector("#tabela_to_do"))
tabelas.push(document.querySelector("#tabela_doing"))
tabelas.push(document.querySelector("#tabela_done"))


//falta completar funcionalidade
var currently
for (tabela of tabelas){
	tabela.addEventListener('click', function(event){
		for (tabela of tabelas){ // Rodar este loop retira a seleção de todas as linhas de todas as tabelas. De Maneira que apenas uma linha pode ser selecionada
			tabela.childNodes.forEach(function(tag,i){ // primeiro tag depois index
				if (i > 0){
					if(tag.classList==null){ // Caso o elemento não tenha classe, não faz nada
						void(0);
					}else{
						// Caso tenha casse, é verificado se não é o primeiro item da lista
						tag.classList.remove("tr_selected");
					};	
				};
			});
		};

	// Evita que o titulo da tabela seja selecionado
		if (event.target.parentNode.rowIndex != 0){
			event.target.parentNode.classList.add("tr_selected");
			currently = event.target.parentNode;
		};

	});
};