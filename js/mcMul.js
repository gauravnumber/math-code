function mcMul(){
	var third = 1;
	for( var i = 0, j = arguments.length; i < j; i++ ){
		third = mcMulSection( arguments[ i ], third );
	}
	return third;
}
