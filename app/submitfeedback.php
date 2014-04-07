<?php
	include '../credentials.php';

	if ($_POST['key'] != FeedbackSubmissionKey())
	{
		echo 'ha, nice try';
		return;
	}