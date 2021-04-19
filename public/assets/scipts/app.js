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

cmnt = document.getElementsByClassName("comment-box")[0];

    window.onscroll = function() {myFunction()};
    function myFunction() {
      if (document.cmnt.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementsByClassName("c5")[0].className = "nono";
      } 
    
    //   if (document.body.scrollTop > 320|| document.documentElement.scrollTop > 320) {
    //     document.getElementById("pic5").className = "picx";
    //   } 
      
    //   if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    //     document.getElementById("pic6").className = "p2b";
    //   } 
      
    //   if (document.body.scrollTop > 880|| document.documentElement.scrollTop > 880) {
    //     document.getElementById("pic7").className = "picx";
    //   } 
      
    //   if (document.body.scrollTop > 1000|| document.documentElement.scrollTop > 1000) {
    //     document.getElementById("pic8").className = "p2b";
    //   } 
    
    //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    //     document.getElementById("pic1").className = "picx";
    //   } 
    //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    //     document.getElementById("pic2").className = "p2b";
    //   } 
    //   if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    //     document.getElementById("pic3").className = "picx";
    //   } 
  }
    
