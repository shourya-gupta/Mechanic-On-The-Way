<?php
   include 'connection.php';
      $fname=$_POST['fullname'];
      $mno=$_POST['mobileno'];
      $add=$_POST['address'];
      $email=$_POST['email'];
      $pass=$_POST['password'];


      $sql="INSERT INTO signup(full_name, mob_no, address, email,pass)
      VALUES('$fname','$mno','$add', '$email','$pass')";

      if(mysqli_query($conn,$sql)){
      	echo "<h1 align='center'>REGISTERED SUCCESSFULLY!!!</h1>";
      	header("Refresh:3; url=login_check.html",  true, 303);
      }
      else{
      	echo "Error" . mysqli_error($conn);
      }
      mysqli_close($conn);
?>
