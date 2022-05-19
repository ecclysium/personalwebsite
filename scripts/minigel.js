

let gImage = document.querySelector('[data-label="ghello"]');

gImage.onclick = function() {
	let mySrc = gImage.getAttribute('src');
	if (mySrc === 'images/gelhello.png'){
		gImage.setAttribute('src','images/gelboop.png');
	}
	
}