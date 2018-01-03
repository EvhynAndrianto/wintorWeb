


var xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        getXML(this);
    }
};
xhttp.open("GET", "assets/php/locator.php", true);
xhttp.send();



	


function getXML(xml) {
    var xmlDoc, markers;
    xmlDoc = xml.responseXML;
	markers = xmlDoc.documentElement.getElementsByTagName('marker'); //global
	updateTable(markers); //insert xml file to table
	//updateGraph(markers);
	initMap(markers); //insert xml file to google map
	Updatechart();

}



 function glyphiconLogic(state){
	 var glyphiconName;
	 if(state=='1')
	 {
		 glyphiconName='glyphicon glyphicon-ok';
	 }
	 else
	 {
		glyphiconName='glyphicon glyphicon-remove'; 
	 }
	 return glyphiconName;
 }


function updateTable(markers)
{
	var txt = "";
	var i;
	
	for (i = 0; i < markers.length; i++)
	{
		var x = document.getElementById("table"+i).rows[1].cells;
		
		txt = markers[i].getAttribute('Fuel');
		document.getElementById('battery-meter'+i).value = txt; 		
		document.getElementById('battery'+i).innerHTML = txt+ (" %"); 
		//x[0].innerHTML = txt + (" %");
		
		txt = markers[i].getAttribute('Production_per_Day');
		x[1].innerHTML = txt + (" items");
		
		txt = markers[i].getAttribute('Operation_Time');
		x[2].innerHTML = txt + (" hours");
		
		txt = markers[i].getAttribute('Last_Maintenance');
		x[3].innerHTML = txt;
		
		txt = markers[i].getAttribute('Oil_Level');
		document.getElementById("oil"+i).className = glyphiconLogic(txt);
		
		txt = markers[i].getAttribute('Accu');
		document.getElementById("accu"+i).className = glyphiconLogic(txt);
		
		txt = markers[i].getAttribute('Bearing');
		document.getElementById("bearing"+i).className = glyphiconLogic(txt);
		
		
		txt = markers[i].getAttribute('Schedule');
		x[5].innerHTML = txt;

		
	}
}


 
 


function initMap(markers){
	var map = new google.maps.Map(document.getElementById('map'), {
		center: new google.maps.LatLng(-0.515129, 110.597476),
		zoom: 4
	});
	var infoWindow = new google.maps.InfoWindow;
	var markerImage = "http://localhost/wintorWeb/assets/img/Wintor-Marker.png";
	
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
			position: point
			//icon: markerImage
			});
			marker.addListener('click', function() {
				infoWindow.setContent(infowincontent);
                infoWindow.open(map, marker);
	
              });
            });
			
}


