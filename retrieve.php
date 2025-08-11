<?php 
// Connect to MySQL using mysqli
$con = mysqli_connect("localhost", "root", "", "registration");
// Check connection
if (!$con) {
 die("Connection failed: " . mysqli_connect_error());
}
// Retrieve data
$retrieve = "SELECT * FROM student"; 
$result = mysqli_query($con, $retrieve);
?> 
<!DOCTYPE html> 
<html> 
<head> 
 <title>Retrieve Data</title> 
 <style>
 table {
 border-collapse: collapse;
 width: 70%;
 margin: 20px auto;
 }
 td, th {
 border: 1px solid #ccc;
 padding: 10px;
 text-align: center;
 }
 .even {
 background-color: #f2f2f2;
 }
 .odd {
 background-color: #ffffff;
 }
 </style>
</head> 
<body> 
 <h2 style="text-align:center;">Student Records</h2>
 <table> 
 <tr> 
 <th>First Name</th> 
 <th>Last Name</th> 
 <th>City</th> 
 <th>Email ID</th> 
 </tr> 
 <?php 
 $i = 0; 
 while ($row = mysqli_fetch_assoc($result)) {
 $classname = ($i % 2 == 0) ? "even" : "odd";
 ?> 
 <tr class="<?php echo $classname; ?>"> 
 <td><?php echo htmlspecialchars($row["first_name"]); ?></td> 
 <td><?php echo htmlspecialchars($row["last_name"]); ?></td>
 <td><?php echo htmlspecialchars($row["city_name"]); ?></td> 
 <td><?php echo htmlspecialchars($row["email"]); ?></td> 
 </tr> 
 <?php 
 $i++; 
 } 
 mysqli_close($con); // Close the connection
 ?> 
 </table> 
</body> 
</html>