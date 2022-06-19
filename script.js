function Send(){	 
var name = document.querySelector('#name').value;
var email = document.querySelector('#email').value;
var message = document.querySelector('#message').value;

if (name == "" || email == "" || message == "") 
{
	alert("Some fields are empty");

	document.querySelector('#name').value = "";	
	document.querySelector('#email').value = "";
	document.querySelector('#message').value = "";

}
else
{
	let response = await fetch('sendmail.php', {
		method: 'POST',
		body: formdata
	});
	if (response.ok) {
		let result = await response.json();
		alert(result.message);
		document.querySelector('#name').value = "";	
		document.querySelector('#email').value = "";
		document.querySelector('#message').value = "";
	}else
	{
		alert("Error");
	}

	
}
	
};