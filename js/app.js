document.addEventListener('DOMContentLoaded',function() {
	var carousel = document.querySelector('#carousel'); //select the div with `id` of carousel
	var length = carousel.children.length; // total number of slides
	var current = 0; // currently active image for the slideshow
	var prev = length - 1; // previously active image for the slideshow

	function slideShow() {
		carousel.children[prev].style.visibility = 'hidden'; // hide previous slide
		carousel.children[current].style.visibility = 'visible'; // show current slide
		current = (current + 1) % length; // go to the next slide, if it is the last slide then go back to the first slide
		prev = (current - 1 + length) % length; // go to the previous slide if it is the first slide go to the last slide
	}

	slideShow(); // call the function as soon as the page loads

	setInterval(slideShow, 2000); // run the function every 2 seconds
});
