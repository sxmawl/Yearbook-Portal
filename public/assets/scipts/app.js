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

document.querySelector("input").addEventListener("click", ()=>{
	for (let i = 20; i <= 32; i=i+0.1) {

		if(i < 32){
			document.querySelector('.search-bar').style.width = `${i}%`;
		}
		else{
			return;
		}
		console.log("loops");

	}
	
})