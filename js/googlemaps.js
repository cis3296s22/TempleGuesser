function initMap() {
	var temple = {lat: 39.9817156290296, lng: -75.15483348376424};
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 18,
      center: temple
    });

    var marker = new google.maps.Marker({
      position: temple,
      map: map
    });
}