$(document).ready(function() {
	$("#login").click(function(e) {
		// prevent click action
		e.preventDefault();
		//declare local variables
		var id = $("#id").val();
		var password = $("#password").val();
		var regex = new RegExp('^[A-Za-z]{3}[0-9]{3}'); //set regexp for checking id format
		// Checking for blank ID field.
		if (id == '') {
			$('input[type="text"]').css("border", "2px solid red");
			$('input[type="text"]').css("box-shadow", "0 0 3px red");
			alert("Please Enter Your ID");
			// Checking for invalid id format.
		} else if (regex.test(id) == false) {
			$('input[type="text"]').css("border", "2px solid red");
			$('input[type="text"]').css("box-shadow", "0 0 3px red");
			alert("Enter Valid ID");
			// Checking for blank password field.
		} else if (password == '') {
			$('input[type="password"]').css("border", "2px solid red");
			$('input[type="password"]').css("box-shadow", "0 0 3px red");
			alert("Enter Your Password");
			// Successfully log in
		} else {
			$(location).attr('href', '../tiffany_final_project/setup_index.html');
			console.log("success");
			/*  $.post("login.php",{ id1: id, password1:password},
			    function(data) {
			      if(data=='Invalid ID.') {
			        $('input[type="text"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
			        $('input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
			        alert(data);
			      }else if(data=='ID or Password is invalid!'){
			        $('input[type="text"],input[type="password"]').css({"border":"2px solid red","box-shadow":"0 0 3px red"});
			        alert(data);
			      } else if(data=='Successfully Logged in.'){
			        $("form")[0].reset();
			        $('input[type="text"],input[type="password"]').css({"border":"2px solid #00F5FF","box-shadow":"0 0 5px #00F5FF"});
			        alert(data);
			      } else{
			        alert(data);
			      }
			  });*/
		};
	});
});
