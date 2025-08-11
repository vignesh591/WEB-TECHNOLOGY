<?php 
// Get data from form


$first_name = $_POST['first_name']; 
$last_name = $_POST['last_name']; 
$city_name = $_POST['city_name']; 
$email = $_POST['email']; 
// Connect to MySQL using mysqli
$con = mysqli_connect("localhost", "root", "", "registration");
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
// Insert query with column names
$insert = "INSERT INTO student (first_name, last_name, city_name, email) 
VALUES ('$first_name', '$last_name', '$city_name', '$email')";
// Execute query
if (mysqli_query($con, $insert)) {
 echo "✅ Values added Successfully!<br><br>"; 
 echo "First Name: " . htmlspecialchars($first_name) . "<br>"; 
 echo "Last Name: " . htmlspecialchars($last_name) . "<br>"; 
 echo "City: " . htmlspecialchars($city_name) . "<br>"; 
 echo "Email: " . htmlspecialchars($email) . "<br>"; 
} else {
 echo "❌ Error: " . mysqli_error($con);
}
// Close connection
mysqli_close($con); 
?>