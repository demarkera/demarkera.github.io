$('#tabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$("#button_houses").click(function (e) {
  $("#div_houses").toggle();
})

$(document).ready(function(){
   $("#div_houses").hide(); 
})
