<?php
	include '../credentials.php';

	if ($_GET['key'] != FeedbackSubmissionKey())
	{
		echo 'ha, nice try';
		return;
	}