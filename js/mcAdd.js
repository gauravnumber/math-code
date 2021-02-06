function mcAdd() {
	var third = 0;
	for( var i = 0, j = arguments.length; i < j; i++ ) {
		third = mcAddSection( arguments[i], third );
	}
	return third;
}
