
//Funcionalidade no gelo *criar um contextmenu personalizado*


if (document.addEventListener){ // IE >= 9 and other
	document.addEventListener('contextmenu',function(event){
		event.preventDefault();
		//menu = 
 		document.querySelector("#contextMenuContainer").fadeIn(500);
	}, false);
}else{ // IE < 9
		document.attachEvent('oncontextmenu', function(){
			// DO SOMETHIN HERE
			window.event.returnValue = false;
		});
}
