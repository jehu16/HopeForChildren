function sendMessage() {

	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;

	if ( firstname == "" || lastname == "" || email == "" )

	{
		var message = "Please complete the form.";
		alert(message);
		return false;
	} else {
		var message = "Thank you " + firstname + " " + lastname + ", We received your message.";

		alert(message);
		ev.preventDefault();
		return false;
	}
}

function subscribe() {

	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;

	if ( name == "" || email == "" ) {
		var message = "Please complete the form.";
		alert(message);
		return false;
	}else {
		var message = "Thank you for subscribing, you will now get updates from us.";

		alert(message);
		ev.preventDefault();
		return false;
	}
}

function donorInfo() {

	var firstname = document.getElementById("firstname").value;
	var lastname = document.getElementById("lastname").value;
	var email = document.getElementById("email").value;
	var mobile = document.getElementById("mobile").value;
	var streetaddress = document.getElementById("streetaddress").value;
	var organization = document.getElementById("organization").value;

	if ( firstname == "" || lastname == "" || email == "" || mobile == "" || streetaddress == "" || organization == "" ) {
		
		var message = "Please complete the form.";
		alert(message);
		return false;
	}else {
		var message = "Thank you for donating, We will assure you that this will go to those children in need.";
		
		alert(message);
		ev.preventDefault();
		return false;
	}
}