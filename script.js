$(document).ready(function() {
	$(".submit-comment-button").click(function() {
		
		var argString = "text=" + $(".comment-text-area").val() + "&name=" + $("#nameInput").val() + "&occ=" + $("#occupationInput").val();

		$.ajax({
		    type: "GET",
		 	url: "submit.php",
		 	data: argString,
		 	success: function(data) {
		 		console.log("success");
		 		console.log(data);
			}
		});
	});
});
