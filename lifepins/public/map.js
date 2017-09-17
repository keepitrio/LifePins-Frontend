window.onload = function() {

  L.mapquest.key = 'lYrP4vF3Uk5zgTiGGuEzQGwGIVDGuy24';

  var sendGetRequest = $.get('http://localhost:3001/info');

  sendGetRequest.done(function(markers) {
    for (var i = 0; i < markers.length; i++) {
      L.marker([markers[i]["latitude"], markers[i]["longitude"]], {
        icon: L.mapquest.icons.marker({
          primaryColor: '#474747',
          secondaryColor: '#228B22',
          shadow: true,
          size: 'md'
        }),
        draggable: false
      }).bindPopup('Name: ' + markers[i]["name"] + '<br/>' +
                  'Can provide: ' + markers[i]["categories"] + '<br/>' +
                  'Can accommodate: ' + markers[i]["number_of_people"])
      .addTo(map);
    }
  });

  sendGetRequest.fail(function(response) {
    alert("error")
  });

  var map = L.mapquest.map('map', {
    center: [37.790862, -122.401093],
    layers: L.mapquest.tileLayer('map'),
    zoom: 12
  });

  map.addControl(L.mapquest.control());
}
