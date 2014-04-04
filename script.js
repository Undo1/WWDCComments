$(document).ready(function() {
	$(".submit-comment-button").click(function() {

		$(this).html("working...");
		var button = $(this);
		
		var argString = "text=" + $(".comment-text-area").val() + "&name=" + $("#nameInput").val() + "&occ=" + $("#occupationInput").val();

		$.ajax({
		    type: "POST",
		 	url: "submit.php",
		 	data: argString,
		 	success: function(data) {
		 		console.log("success");
		 		console.log(data);
		 		button.html("Success! Thank you!")
			}
		});
	});
});
