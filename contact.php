<?php
  if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $body = htmlspecialchars($_POST['body']);
    
    if(!empty($name) && !empty($email) && !empty($body)) {
        $toEmail = 'papukengland@gmail.com';
        $subject = 'Contact Request From ' . $name;
        $body = '<h2>Contact Request<h2>';
        $body .= '<h4>Name : ' . $name . '</h4>';
        $body .= '<h4>Email : ' . $email . '</h4>';
        $body .= '<h4>Body : ' . $body . '</h4>';

        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-Type:text/html;charset=UTF-8" . "\r\n";

        // Additional headers

        $headers .= "From: " . $name . "<" . $email . ">" . "\r\n";

        if(mail($toEmail, $subject, $body, $headers)){
          echo 'Thank you for contact! I will respond as soon I can.';
        } else {
          echo 'There was a problem with your email, try to contact me on Facebook or use my email: papukengland@gmail.com';
        }
      } else { 
        echo 'Fill all fields.';
      }
  } else {
    echo 'Something went wrong, send me an email papukengland@gmail.com';
  }
?>