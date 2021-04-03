<?php
   include 'connection.php';
      $name=$_POST['name'];
      $mno=$_POST['phone'];
      $add=$_POST['landmark'];
      $msg=$_POST['message'];


      $sql="INSERT INTO emergency(name, phone, landmark, description)
      VALUES('$name','$mno','$add', '$msg')";

      if(mysqli_query($conn,$sql))
      {
      	header('location:available-mechanic.html');
      }
      else
      {
      	echo "Error" . mysqli_error($conn);
      }
      mysqli_close($conn);
?>
