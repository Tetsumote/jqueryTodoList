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
	
	//adding element to the list
	$newItemForm.on('submit',function(e){
		e.preventDefault();
		var text = $('input:text').val();
		$list.append('<li class=\"hot\">' + text + '</li>');
		$('input:text').val('');
		updateCount();
	});
	
	//deleting file
	$list.on('click','li',function(){
		var $this = $(this);
		var complete = $this.hasClass('complete');
		
		if(complete === true){
			$this.animate({
				opacity:0.0,
				paddingLeft: '+=180'
			},500,'swing',function(){
				$this.remove();
			});
		}else{
			item = $this.text();
			$this.remove();
			$list
			.append('<li class=\"complete\">' + item + '</li>')
			.hide().fadeIn(1000);
		updateCount();
		}
	});
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});