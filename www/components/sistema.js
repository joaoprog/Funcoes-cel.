// This is a JavaScript file
$(document).on("click","#map",function(){
  L.mapquest.key = 'gmUcJLS0B3lH5UioEZp28fGWkeFyyOGa';

// 'map' refers to a <div> element with the ID map
L.mapquest.map('map', {
  center: [-24.1226656, -46.6784699],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});
});

