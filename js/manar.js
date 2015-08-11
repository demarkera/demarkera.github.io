function switcher(divId) {
    $("div#" + divId).toggle();
}

$(".marker").click(function() {
    switcher(this.id);
});

$('#tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$("#button_houses").click(function (e) {
  $("#div_houses").toggle();
})

$("#butTab_rules").click(function(){
	$("#tab_rules").load("html/rules.htm");

})

$(document).ready(function(){
   $("#div_houses").hide(); 
})
