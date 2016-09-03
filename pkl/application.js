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
$('#permesilo').click(function() {
	BootstrapDialog.show({
        title: 'Permesilo',
        message:<p>Por la teksta enhavo:</p>
			<p>la koncepto de PKL (sen la fotoj kaj videoj de fizikaj personoj) estas sub la permesilo <a href="https://www.gnu.org/licenses/gpl.html">Ĝenerala Publika Permesilo de GNU<p>		<p>Por la videoj kaj fotoj de fizikaj personoj:</p>
			<p>Estas permesita reuzi la videojn kaj fotojn de fizikaj personoj NUR en la konteksto de PKL kaj cxiuj aliaj uzado neprigas la permeson de la persono sur la video aux la foto.</p>
 	});
};