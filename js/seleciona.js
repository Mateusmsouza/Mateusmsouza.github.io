tabela = document.querySelector("#tabela_to_do")

//falta completar funcionalidade
var currently 
tabela.addEventListener('click', function(event){
	tabela.childNodes.forEach(function(tag,i){ // primeiro tag depois index
		if (i > 0){
			if(tag.classList==null){
				void(0);
			}else{
				console.log(tag.children[0].textContent)
				if (tag.children[0].textContent){
					tag.classList.remove("tr_selected");
				};
			};	
		};
		
	});
	event.target.parentNode.classList.add("tr_selected");
	currently = event.target.parentNode;
});
