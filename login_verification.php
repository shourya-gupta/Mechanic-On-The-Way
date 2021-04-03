<?php
   include 'connection.php';

    $email=$_POST['email'];
    $pass=$_POST['pass'];
    $sql="Select * FROM signup WHERE email='$email' AND pass='$pass'";
    $result=mysqli_query($conn,$sql);
	  $flag=0;
    if(mysqli_num_rows($result)==0)
	  {
    	  echo '<script>var r=confirm("Invalid Username or Password!!!");
				if(r==true || r==false)
				{
					window.location.href = "login.html";
				}
				</script>';
		    $flag=1;
    }
  	if($flag==0)
  	{
        header("Location:index_user.html");
    }
    mysqli_close($conn);
?>
