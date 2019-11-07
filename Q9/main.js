$('#create').on('click',function(){
	if ($("#one").prop('checked') && $("#two").prop('checked') && $("#three").prop('checked')){
		$('ol').append('<li>black</li>')
	}else if ($("#one").prop('checked') && $("#three").prop('checked') || $("#one").prop('checked') && $("#two").prop('checked')
		|| $("#two").prop('checked') && $("#three").prop('checked')){
		$('ol').append('<li>purple = blue + red</li>')
	} else if ($("#one").prop('checked') || $("#two").prop('checked') || $("#three").prop('checked')){
		$('ol').append('<li>yellow, blue or red</li>')
	}
})

$('#Remove').on('click',function(){
	$('ol').html('')
})