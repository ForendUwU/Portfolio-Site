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
	window.open('mailto:'+'nikita040604@gmail.com'+'?subject='+name+'&body='+message, '_self');
}
	
};