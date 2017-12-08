<?php

require("phpsqlajax_dbinfo.php");

// Start XML file, create parent node

$dom = new DOMDocument("1.0");
$node = $dom->createElement("markers");
$parnode = $dom->appendChild($node);

// Opens a connection to a MySQL server

$connection=mysqli_connect ('localhost', $username, $password);
if (!$connection) {  die('Not connected : ' . mysqli_error());}

// Set the active MySQL database

$db_selected = mysqli_select_db($connection, $database);
if (!$db_selected) {
  die ('Can\'t use db : ' . mysqli_error());
}

// Select all the rows in the markers table

$query = "SELECT * FROM markers WHERE 1";
$result = mysqli_query($connection, $query);
if (!$result) {
  die('Invalid query: ' . mysqli_error());
}

header("Content-type: text/xml");

// Iterate through the rows, adding XML nodes for each

while ($row = @mysqli_fetch_assoc($result)){
  // Add to XML document node
  $node = $dom->createElement("marker");
  $newnode = $parnode->appendChild($node);
  $newnode->setAttribute("id",$row['id']);
  $newnode->setAttribute("name",$row['name']);
  $newnode->setAttribute("info", $row['info']);
  $newnode->setAttribute("lat", $row['lat']);
  $newnode->setAttribute("lng", $row['lng']);
  $newnode->setAttribute("number", $row['number']);
  $newnode->setAttribute("Fuel", $row['Fuel']);
  $newnode->setAttribute("Production_per_Day", $row['Production_per_Day']);
  $newnode->setAttribute("Last_Maintenance", $row['Last_Maintenance']);
  $newnode->setAttribute("Operation_Time", $row['Operation_Time']);
  $newnode->setAttribute("Last_Update", $row['Last_Update']);
  $newnode->setAttribute("Schedule", $row['Schedule']);
  $newnode->setAttribute("Bearing", $row['Bearing']);
  $newnode->setAttribute("Accu", $row['Accu']);
  $newnode->setAttribute("Oil_Level", $row['Oil_Level']);
}

echo $dom->saveXML();

?>
