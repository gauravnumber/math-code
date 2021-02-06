function mcSub() {
	var third = 0;
	for( var i = 0, j = arguments.length; i < j; i++ ) {
		third = mcSubSection( arguments[i], third );
	}
	return third;
}
