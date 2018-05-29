botao = document.querySelector("#botao_transfere_doing");
console.log(botao)
botao.addEventListener('click',function(){
	adiciona_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_doing" );
	remove_task(currently.childNodes[0].textContent,currently.childNodes[1].textContent, "#tabela_to_do" );

});