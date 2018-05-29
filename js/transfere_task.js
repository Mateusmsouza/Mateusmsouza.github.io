botao2 = document.querySelector("#botao_transfere_doing");


botao2.addEventListener('click',function(){
	console.log(botao2)
	adiciona_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_doing" );
	remove_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_to_do" );

});