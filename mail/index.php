<?php
$to      = 'siteartstudio@gmail.com';
$subject = 'Cat`s Code School';

$message = 'NEW USER: '.$_POST["full_name"].' '.$_POST["course"].' '.$_POST["age"].' '.$_POST["region"].' '.$_POST["phone"].' '.$_POST["text"];

if(mail($to, $subject, $message)){
	$success = true;
	echo json_encode($success);
}
else {
	$success = false;
	echo json_encode($success);
}
?> 

