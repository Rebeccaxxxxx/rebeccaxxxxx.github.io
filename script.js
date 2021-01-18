//Change Image Opacity

let images = document.querySelectorAll('main > #container > #countries > img');

var i;

function changeOpacity() {
	for (i = 0; i < images.length; i++) {
  		images[i].style.opacity = '0.5';
	}
  	this.style.opacity = '1';
}

function resetOpacity() {
	for (i = 0; i < images.length; i++) {
  		images[i].style.opacity = '0.9';
	}
}

for (i = 0; i < images.length; i++) {
  	images[i].addEventListener('mouseover', changeOpacity);
  	images[i].addEventListener('mouseout', resetOpacity);
}
