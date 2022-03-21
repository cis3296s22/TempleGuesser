function initMap() {
	var temple = {lat: 39.9806, lng: 75.1557};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 4,
      center: temple
    });

    var marker = new google.maps.Marker({
      position: temple,
      map: map
    });
}