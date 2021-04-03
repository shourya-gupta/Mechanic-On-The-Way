<?php
   include 'connection.php';
      $descrip=$_POST['descrip'];
      $date=$_POST['date'];
      $time=$_POST['time'];

      $sql="INSERT INTO general(descrip, date1, time1) VALUES ('$descrip','$date', '$time')";

      if(mysqli_query($conn,$sql))
      {
      	header('location:general-after.html');
      }
      else
      {
      	echo "Error" . mysqli_error($conn);
      }
      mysqli_close($conn);
?>
