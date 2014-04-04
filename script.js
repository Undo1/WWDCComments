$(document).ready(function() {
	$(".submit-comment-button").click(function() {

		$(this).html("working...");
		var button = $(this);


		
		var argString = "text=" + encodeURIComponent($(".comment-text-area").val()) + "&name=" + encodeURIComponent($("#nameInput").val()) + "&occ=" + encodeURIComponent($("#occupationInput").val());

		$.ajax({
		    type: "POST",
		 	url: "submit.php",
		 	data: argString,
		 	success: function(data) {
		 		console.log("success");
		 		console.log(data);
		 		button.html("Success! Thank you!")
		 		$(".comment-text-area").val('');
		 		$("#nameInput").val('');
		 		$("#occupationInput").val('');
			}
		});
	});
});
