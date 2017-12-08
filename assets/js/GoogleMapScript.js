
        function initMap() {
		
        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(-0.515129, 110.597476),
		  
          zoom: 5,
		  styles:[
			{
				"featureType": "administrative",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#6195a0"
					}
				]
			},
			{
				"featureType": "administrative.locality",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ff6200"
					}
				]
			},
			
			{
				"featureType": "administrative.neighborhood",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ff0000"
					}
			]
			},
			
			{
				"featureType": "landscape",
				"elementType": "all",
				"stylers": [
					{
					"color": "#f2f2f2"
					}
				]
			},
			
			{
				"featureType": "landscape",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ff6200"
					}
				]
			},
			
			{
				"featureType": "landscape",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#f3f1e7"
					}
				]
			},
			
			{
				"featureType": "poi",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}	
				]
			},
			
			{
				"featureType": "poi.government",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "poi.park",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#e6f3d6"
					},
					{
						"visibility": "on"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "all",
				"stylers": [
					{
						"saturation": -100
					},
					{
						"lightness": 45
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ff0000"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#8f8f8f"
					}
				]
			},
			{
				"featureType": "road",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					},
					{
						"visibility": "simplified"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text",
				"stylers": [
					{
						"color": "#4e4e4e"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#8f8f8f"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.text.stroke",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.highway",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.highway.controlled_access",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ff0000"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.text.fill",
				"stylers": [
					{
						"color": "#787878"
					}
				]
			},
			{
				"featureType": "road.arterial",
				"elementType": "labels.icon",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "road.local",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#ffffff"
					}
				]
			},
			{
				"featureType": "transit",
				"elementType": "all",
				"stylers": [
					{
						"visibility": "off"
					}
				]
			},
			{
				"featureType": "water",
				"elementType": "all",
				"stylers": [
					{
						"color": "#95d2d9"
					},
					{
						"visibility": "on"
					}
				]
			},
			{	
				"featureType": "water",
				"elementType": "geometry.fill",
				"stylers": [
					{
						"color": "#95d2d9"
					}
				]
			}
		]
        });
        var infoWindow = new google.maps.InfoWindow;
		var markerImage = "http://localhost/wintorWeb/assets/img/Wintor-Marker.png";
		// Change this depending on the name of your PHP or XML file
		
          downloadUrl("assets/php/locator.php", function(data) {
            var xml = data.responseXML;
            var markers = xml.documentElement.getElementsByTagName('marker');
			
			var txt = "";
			var i = 0;
			for (i = 0; i < 3; i++)
			{
				var x = document.getElementById("table"+i).rows[1].cells;
				txt = markers[i].getAttribute('Fuel');
				x[0].innerHTML = txt + (" %");
				txt = markers[i].getAttribute('Production_per_Day');
				x[1].innerHTML = txt + (" items");
				txt = markers[i].getAttribute('Operation_Time');
				x[2].innerHTML = txt + (" hours");
				txt = markers[i].getAttribute('Last_Maintenance');
				x[3].innerHTML = txt;
			}
			
			
            Array.prototype.forEach.call(markers, function(markerElem) {
              var id = markerElem.getAttribute('id');
              var name = markerElem.getAttribute('name');
              var info = markerElem.getAttribute('info');
              var number = markerElem.getAttribute('number');
			  var lat = parseFloat(markerElem.getAttribute('lat'));
			  var lng = parseFloat(markerElem.getAttribute('lng'));
              var point = new google.maps.LatLng(lat,lng);
			  var Last_Update = markerElem.getAttribute('Last_Update');

			  
              var infowincontent = document.createElement('div');
              var strong = document.createElement('strong');
              strong.textContent = name
              infowincontent.appendChild(strong);
              infowincontent.appendChild(document.createElement('br'));
			  
			  var infoText = document.createElement('text');
			  infoText.textContent = info;
			  infowincontent.appendChild(infoText);
              infowincontent.appendChild(document.createElement('br'));
			  
			  var pointText = document.createElement('text');
			  pointText.textContent = "Lat,Lng : "+lat+ ", " +lng;
			  infowincontent.appendChild(pointText);
			  infowincontent.appendChild(document.createElement('br'));
			  
			  var updateText = document.createElement('text');
			  updateText.textContent = "Last Update : "+ Last_Update;
			  infowincontent.appendChild(updateText);
			  infowincontent.appendChild(document.createElement('br'));
			  
			  
			  
              var marker = new google.maps.Marker({
                map: map,
				animation: google.maps.Animation.DROP,
                position: point,
				icon: markerImage
              });
              marker.addListener('click', function() {
				
                infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
				
              });
            });
          });
        }
	
	


      function downloadUrl(url, callback) {
        var request = window.ActiveXObject ?
            new ActiveXObject('Microsoft.XMLHTTP') :
            new XMLHttpRequest;

        request.onreadystatechange = function() {
          if (request.readyState == 4) {
            request.onreadystatechange = doNothing;
            callback(request, request.status);
          }
        };

        request.open('GET', url, true);
        request.send(null);
      }

      function doNothing() {}
