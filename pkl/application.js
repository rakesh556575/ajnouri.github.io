$(document).ready(function() {
	var sources = new Array()

	sources[0] = 'https://h5p.org/h5p/embed/19684'
	sources[1] = 'https://h5p.org/h5p/embed/21468'
	sources[2] = 'https://h5p.org/h5p/embed/21469'
	sources[3] = 'https://h5p.org/h5p/embed/21470'

	var p = sources.length;

	$('#randomize').click(function() {
	    var randomSource = Math.round(Math.random()*(p-1));
	    console.log(sources[randomSource]);
	    $('#question').attr('src', sources[randomSource]);
	 	$("#question").text("URL value is now: " + sources[randomSource]);    
    });
});
