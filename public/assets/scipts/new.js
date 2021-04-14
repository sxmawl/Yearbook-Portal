var modal = document.getElementById('modal-main');
var mask = document.getElementById('modal-mask');
// Get the <span> element that closes the modal
var span = document.getElementById('close-modal');
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
	modal.style.display = 'none';
	mask.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == mask) {
		modal.style.display = 'none';
		mask.style.display = 'none';
	}
};

function uploadModal() {
	modal.style.display = 'flex';
	mask.style.display = 'flex';
}
