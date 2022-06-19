<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require "PHPMailer/src/PHPMailer.php";
	require "PHPMailer/src/Exception.php";

	$mail = new PHPMailer(true);
	$mail->CharSet = "UTF-8";

	$name = $_POST["name"];
	$email = $_POST["email"];
	$message = $_POST["message"];

	$body = $name . ' ' . $email . ' ' . $message;
	$theme = "[Contact From Site]";

	$mail->addAdress("nikitaperepelov040604@gmail.com");

	$mail->Subject() = $theme;
	$mail->Body = $body;

	$mail->send();
?>
