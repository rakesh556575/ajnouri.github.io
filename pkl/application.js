$('#randomize').click(function() {

var sources = new Array()

sources[0] = 'https://h5p.org/h5p/embed/19684'
sources[1] = 'https://h5p.org/h5p/embed/21468'
sources[2] = 'https://h5p.org/h5p/embed/21469'
sources[3] = 'https://h5p.org/h5p/embed/21470'

var j = 0
var p = sources.length;
var preBuffer = new Array()

for (i = 0; i < p; i++){
	   preBuffer[i] = new Image()
	   preBuffer[i].src = sources[i]
		}
	var randomSource = Math.round(Math.random()*(p-1));
	  $('#question').attr('src', 'sources[randomSource]');
	  }