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

let inputState = true

document.querySelector("input").addEventListener("click", ()=>{

		if(inputState){
			document.querySelector('.search-bar').style.width = "35%";
		}else {
			document.querySelector('.search-bar').style.width = "20%"
		}

		inputState = inputState ? false : true ;
	
})