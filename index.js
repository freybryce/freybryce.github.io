function setup() {
  /*$('#summary').on('click',function() {
    $('#openSum').hide();
  });
  $('#hometown').on('click',function() {
    $('#openHome').show();
  });
  $('#university').on('click',function() {
    $('#openUni').show();
  });
  $('#social').on('click',function() {
    $('#openSoc').show();
  });*/
  $('#button').on('click', function() {
    $('openHome').toggleClass('hideHome');
  });
  /*$(function() {
    $()
  });*/
}

$(document).ready(setup);
