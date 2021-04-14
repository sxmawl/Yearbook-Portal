over = document.getElementById('nav-links');
tog = document.getElementById('toggle');
function toggle() {
	tog.classList.toggle('active');
	over.classList.toggle('open');
}

function signOut() {
	var auth2 = gapi.auth2.getAuthInstance();
	auth2.signOut().then(function () {
		console.log('User signed out.');
	});
}