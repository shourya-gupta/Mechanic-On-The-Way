<!DOCTYPE html>
<html lang="en" >
<head>
  <meta charset="UTF-8">
  <title>Mechanic On The Way</title>
  <link rel="stylesheet" href="./style-emergency.css">
  <script>
   
  function isNumberKey(evt)
    {
        var charCode = (evt.which) ? evt.which : event.keyCode;
        if (charCode != 46 && charCode > 31 && (charCode < 48 || charCode > 57))
        {
          alert("Enter Number");
          return false;
        }
        return true;
    }function validate()
    {
      var valid = true;
      var phone = document.getElementById('phone').value;
      if(phone!='')
      {
        valid = phoneNumberValidation(phone);
      }
      if(valid==false)
      {
        return false;
      }
      else
      {
        return true;
      }
    }
</script>
</head>
<body>


<div class="contact container shadow" id="contact_form">
  <div class="contact row header">
    <h2>EMERGENCY</h2>
    <h3>Fill up this small form, to get service delivered to you in minutes!</h3>
    <h3>Kindly turn on your device's location for better performance.</h3>
    <div id="contact_results"></div>
  </div>
  <form name="myForm" action="submit1.php" method="post" onsubmit="return validate();">
    <div class="contact row body" id="contact_body">
    <div class="contact-elements">
      <ul>
        <li>
          <p class="left">
            <label for="name">NAME</label>
            <input type="text" name="name" id="name" class="input-field" placeholder="XYX" />
          </p>
          <p class="pull-right">
            <label for="phone2">PHONE NUMBER<span class="req">*</span></label>
            <input type="text" name="phone" id="phone" maxlength="15" required="true" class="tel-number-field long"  onkeypress="return isNumberKey(event)" placeholder="123 456 7890" />
          </p>
        </li>
        <div class="center-btn" style="position:relevant; height:5vh;">
          <li>
            <label for="email">ANY LANDMARK?</label>
            <input type="text" name="landmark" id="landmark" class="input-field" placeholder="Behind ABC school" />
          </li>
        </div>

        <li>
          <div class="contact divider"></div>
        </li>
        <li>
          <label for="message">DESCRIPTION OF THE PROBLEM</label>
          <textarea cols="46" rows="8" name="message" id="message" class="textarea-field" placeholder="I have a flat car tire, please bring a tire with you and also a jack and other things required"></textarea>
        </li>
      </ul>
    </div>
    <div class="center-btn" style="position:relevant; height:5vh;">
      <li style = "list-style-type: none;">
        <input id="submit_btn" class="btn btn-submit" type="submit" value="Submit"/>
      </li>
    </div>
  </div>
</form>
</div>

</!---contact-form--->

  <script src='https://cdnjscloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script><script  src="./emergency.js"></script>

</body>
</html>
