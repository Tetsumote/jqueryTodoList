$(function(){
	var $list, $newItemForm, $newItemButton;
	var item = '';
	$list = $('ul');
	$newItemForm = $('#newItemForm');
	$newItemButton = $('#newItemButton');
	//fade in animation
	$('li').hide().each(function(index){
		$(this).delay(450 * index).fadeIn(1600);
	});
	//add counter
	function updateCount(){
		var items = $('li').length;
		$('#counter').text(items);
	}
	updateCount();
	
	//showing input
	$newItemButton.show();
	$newItemForm.hide();
	$('button').on('click',function(){
		$newItemButton.hide();
		$newItemForm.fadeIn(1000);
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});