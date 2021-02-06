function mcMulOne( number, one ){
	var lengthno,
		i,
		numberLastIndex,
		third;
	third = [];
	number = String( number );
	one = Number( one );
	lengthno = number.length;
	number = number.split( "" );
	numberLastIndex = lengthno - 1;
	for( i = 0; i < lengthno; i++, numberLastIndex-- ) {
		third[i] = isNaN( third[i] ) ? 0 : third[i];
		third[i] = Number( third[i] ) + Number( number[ numberLastIndex ] ) * one;
		third[i] = String( third[i] );
		if( third[i].length == 2 ) {
			third[ i + 1 ] = third[i].charAt( 0 );
			third[ i ] = third[i].charAt( 1 );
		}
	}
	third = third.reverse();
	third = third.join( "" );
	return third;
}
