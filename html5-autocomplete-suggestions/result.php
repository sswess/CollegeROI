 <!doctype html>
<html lang="en-US">
<head>
  <meta http-equiv="Content-Type" content="text/html;charset=utf-8">
  <title>Input Autocomplete Suggestions Demo</title>
  <link rel="shortcut icon" href="http://designshack.net/favicon.ico">
  <link rel="icon" href="http://designshack.net/favicon.ico">
  <link rel="stylesheet" type="text/css" media="all" href="style.css">
  <script type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
  <script type="text/javascript" src="js/jquery.autocomplete.min.js"></script>
  <script type="text/javascript" src="js/addinput.js"></script>

</head>

 <?php
          $servername = "127.0.0.1:3306";
          $username = "testuser";
          $password = "password";
          //$dbname = "myDB";

          // Create connection
          $conn = new mysqli($servername, $username, $password);
          // Check connection
          if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
          }
          else{
            echo "Worked";
          }
          if (!$conn->set_charset("utf8")) {
              printf("Error loading character set utf8: %s\n", $conn->error);
              exit();
          } else {
              printf("Current character set: %s\n", $conn->character_set_name());
          }
          if (isset($_GET["sqlQuery"])) {
              $sql = $_GET["sqlQuery"];
              echo $sql;
              //echo '5';
          }else{
              echo 'no variable received';
          }
          
          $result = $conn->query($sql);
          if (!$result) {
            //echo "Could not successfully run query ($sql) from DB: " . mysql_error();
            echo 'ended up here';
            exit;
            }
            if ($result->num_rows > 0) {
    // output data of each row
          while($row = $result->fetch_assoc()) {
                echo "id: " . $row["INSTNM"]."<br>";
    }
} else {
    echo "0 results";
}
           //echo $result;

           echo 'Made it here';
           $conn->close();
?> 
</html>