$('#random').on('click', function () {
var theImages = new Array() // do not change this
// To add more image files, continue with the
// pattern below, adding to the array.

theImages[0] = 'https://h5p.org/h5p/embed/19684'
theImages[1] = 'https://h5p.org/h5p/embed/21468'
theImages[2] = 'https://h5p.org/h5p/embed/21469'
theImages[3] = 'https://h5p.org/h5p/embed/21470'


// do not edit anything below this line

var j = 0
var p = theImages.length;
var preBuffer = new Array()

for (i = 0; i < p; i++){
	   preBuffer[i] = new Image()
	   preBuffer[i].src = theImages[i]
		}
	var whichImage = Math.round(Math.random()*(p-1));
	  $('#question').attr('src', 'theImages[whichImage]');
    window.alert(theImages[whichImage]);
	  }

