window.onload = function() {

L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

var map = L.mapquest.map('map', {
  center: [37.7749, -122.4194],
  layers: L.mapquest.tileLayer('map'),
  zoom: 12
});

map.addControl(L.mapquest.control());
}
