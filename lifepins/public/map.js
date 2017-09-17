window.onload = function() {

  L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

  var map = L.mapquest.map('map', {
    center: [40.7392, -104.9903],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  var addressPoints = [
  [40.7392, -104.9903],
  [41.7392, -104.9903],
  [42.7392, -104.9903],
  [43.7392, -104.9903],
  [44.7392, -104.9903]
  ]

  for (var i = 0; i < addressPoints.length; i++) {
    L.marker(addressPoints[i], {
      icon: L.mapquest.icons.marker({
        primaryColor: '#474747',
        secondaryColor: '#228B22',
        shadow: true,
        size: 'md'
      }),
      draggable: true
    }).bindPopup(`sdfa <br/> sdf`).addTo(map);
  }

  map.addControl(L.mapquest.control());
}