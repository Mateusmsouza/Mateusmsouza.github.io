botao2 = document.querySelector("#botao_transfere_doing");
botao3 = document.querySelector("#botao_transfere_done");


botao2.addEventListener('click',function(){

	adiciona_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_doing" );
	remove_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_to_do" );

});

botao3.addEventListener('click',function(){

	adiciona_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_done" );
	remove_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_doing" );

});