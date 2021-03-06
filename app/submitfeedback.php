<?php
	include '../credentials.php';

	if ($_POST['key'] != FeedbackSubmissionKey())
	{
		echo 'ha, nice try';
		return;
	}

	$text = $_POST["text"];

	if (strlen($text) == 0)
	{
		echo "empty";
		return;
	}

	$dbhost = MySQLHost(); // this will ususally be 'localhost', but can sometimes differ  
	$dbname = MySQLDB(); // the name of the database that you are going to use for this project  
	$dbuser = MySQLUsername(); // the username that you created, or were given, to access your database  
	$dbpass = MySQLPassword(); // the password that you created, or were given, to access your database

	$db = new PDO('mysql:host=' . $dbhost . ';dbname=' . $dbname . ';charset=utf8', $dbuser, $dbpass);
	$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

	$stmt = $db->prepare("INSERT INTO feedback(text) VALUES(:text)");
	$stmt->execute(array(':text' => $text));
	$affected_rows = $stmt->rowCount();

	echo $affected_rows . " added";