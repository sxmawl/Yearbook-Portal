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





$(".comment-box").scroll(function() {
  if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight/1.4) {
      $(".c5").addClass("nono");    
      $(".c6").addClass("nono");
    
  } 
  if($(this).scrollTop() + $(this).innerHeight() >= $(this)[0].scrollHeight/1.1) {
      $(".c7").addClass("nono");    
      $(".c8").addClass("nono");
    
  } 
});

