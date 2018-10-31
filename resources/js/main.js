// JavaScript Document


$(document).ready(function(){
	$(".open").on("click", function(){
$(".modal-overlay, .modal-content").addClass("active");
});
	
	$(".close, .popup").on("click", function(){
$(".modal-overlay, .modal-content").removeClass("active");
});

});