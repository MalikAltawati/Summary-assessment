
function addlist(){
	if ($('#class').val() === "red" || $('#class').val() === "yello" || $('#class').val() === "blue"){
$('ol').append("<li>"+ $('#text').val()+"</li>").addClass($('#class').val())
}
}


