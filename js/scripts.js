$(document) .ready(function () {

$('#navi .burger-nav') .click(function(){
  $('#navi nav ul') .addClass('open');
});

$('#navi .burger-nav') .dblclick(function(){
  $('#navi nav ul') .removeClass('open')
});


$('#navi3 .burger-nav') .click(function(){
  $('#navi3 nav ul') .addClass('open');
});

$('#navi3 .burger-nav') .dblclick(function(){
  $('#navi3 nav ul') .removeClass('open')
});


$('#navi4 .burger-nav') .click(function(){
  $('#navi4 nav ul') .addClass('open');
});

$('#navi4 .burger-nav') .dblclick(function(){
  $('#navi4 nav ul') .removeClass('open')
});

function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(51.5, -0.12),
        zoom: 10,
        mapTypeId: google.maps.MapTypeId.HYBRID
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
};

});
