<?php
	include 'credentials.php';

	if ($_GET['key'] != CommentRetreivalKey())
	{
		echo 'ha, nice try';
		return;
	}
	echo 'success';