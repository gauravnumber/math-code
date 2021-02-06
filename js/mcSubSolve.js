function mcSubSolve( first, second ){
	var lengthno,
		i,
		firstLastIndex, secondLastIndex,
		firstnohold, secondnohold,
		third;
	third = [];
	first = String( first );
	second = String( second );
	first = first.split( "" );
	second = second.split( "" );
	while( Number( first[0] )== 0 )
		first.shift();
	while( Number( second[0] )== 0 )
		second.shift();
	firstLastIndex = first.length - 1;
	secondLastIndex = second.length - 1;
	for( i = 0, lengthno = first.length; i < lengthno; i++, firstLastIndex--, secondLastIndex--){
		firstnohold = (firstLastIndex < 0)? 0 : Number( first[ firstLastIndex ] );
		secondnohold = (secondLastIndex < 0)? 0 : Number( second[ secondLastIndex ] );

		if ( firstnohold < 0 ) {
			first[ firstLastIndex - 1 ] =  Number( first[ firstLastIndex - 1 ] ) - 1;
			firstnohold = 9;
		}
		if ( secondnohold > firstnohold ) {
			firstnohold = String( firstnohold );
			firstnohold = firstnohold.split( "" );
			firstnohold.unshift( "1" );
			firstnohold = firstnohold.join( "" );
			third[ i ] = Number( firstnohold ) - secondnohold;
			first[ firstLastIndex - 1 ] = Number( first[ firstLastIndex - 1 ] ) - 1;
		}
		else {
			third[i] = firstnohold - secondnohold;
		}
	}
	third = third.reverse();
	while ( third[0] == "0" ) {
		third.shift();
	}
	third = third.join( "" );
	return third;
}
