$(document).ready(function(){

	$("#txtNumber").on("keydown", function(e){
		if ((e.keyCode >= 48 && e.keyCode <= 57) || (e.keyCode >= 96 && e.keyCode <= 105) || e.keyCode==8) {

		}else{
			e.preventDefault();
		}
	});

	$("button").on("click", function(e){
		var num = $("#txtNumber").val();

		if(num < 1 || num > 100){
			alert('Please enter number between 1 to 100');
			
		}else{
			$(".output").html("");
			for(var i=1; i <= num ; i++){
				var value = "";

				if(i % 3 == 0){
					value = "Fizz";

					if(i % 5 == 0){
						value += "Buzz";
					}
				} 
				else if (i % 5 == 0) {
					value = "Buzz";
				}
				else{
					value = i;
				}

				$(".output").append("<br>"+value+"<br>");

			}
		}
	})
	


});

