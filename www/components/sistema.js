// This is a JavaScript file
$(document).on("click","#map",function(){
  L.mapquest.key = 'gmUcJLS0B3lH5UioEZp28fGWkeFyyOGa';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
});

