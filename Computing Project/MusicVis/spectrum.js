function Spectrum() {
	this.name = "spectrum";

	this.draw = function() {
		push();
		var spectrum = fourier.analyze();
		noStroke();

		
		for (var i = 0; i< spectrum.length; i++){
            fill(spectrum[i],255 - spectrum[i],0);
			var y = map(i, 0, spectrum.length, 0, width);
		    var w = map(spectrum[i], 0, 255, 0, width);
		    rect(0, y, w, width / spectrum.length);
            
  		}
        
        
	
		pop();
	};
}
