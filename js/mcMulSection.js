function mcMulSection( first, second ){
	var lengthno,
		i, j,
		firstLastIndex, secondLastIndex,
		decimalfirst, decimalsecond, decimalthirdno,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third, thirdhalf, thirdslice;
	third = [];
	decimalfirst = false;
	decimalsecond = false;
	firstpos = secondpos = -1;
	first = String( first );
	second = String( second );
	first = first.split( "" );
	second = second.split( "" );
	while( Number( first[0] )== 0 )
		first.shift();
	while( Number( second[0] )== 0 )
		second.shift();

	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcMulSection( first, second );
		third = third.split( "" );
		third = third.join( "" );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcMulSection( first, second );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		first = first.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcMulSection( second, first );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	}

	for( i = 0; i < first.length; i++ )
		if( first[i] == "." ){
			decimalfirst = true;
			firstpos = i;
			break;
		}
	for( i = 0; i < second.length; i++ )
		if( second[i] == "." ){
			decimalsecond = true;
			secondpos = i;
			break;
		}
	if( decimalfirst == false && decimalsecond == false ){
		lengthno = second.length;
		secondLastIndex = second.length - 1;
		first = first.join( "" );
		for( i = 0; i < lengthno; i++, secondLastIndex--){
			third[ i ] = mcMulOne( first, Number( second[ secondLastIndex ] ) );
			for( j = 0; j < i; j++ )
				third[ i ] = third[ i ].concat( "0" );
		}
		third = mcAdd.apply( null, third );
		return third;
	}
	else if( decimalfirst == true || decimalsecond == true ){
		if( decimalfirst == false ) {
			first = first.join( "" );
			firstpos = first.length;
			first = first.concat( ".0" );
			first = first.split( "" );
		} else if( decimalsecond == false ) {
			second = second.join( "" );
			secondpos = second.length;
			second = second.concat( ".0" );
			second = second.split( "" );
		}
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		first = firsthalf.concat( firstslice );
		second = secondhalf.concat( secondslice );

		first = first.join( "" );
		second = second.join( "" );

		third = mcMulSection( first, second );

		third = third.split( "" );
		decimalthirdno = firstslice.length + secondslice.length;
		third.splice( third.length - decimalthirdno, 0, ".");
		while( third[ third.length - 1 ] == 0 )
			third.pop();
		if( third[ third.length - 1 ] == "." )
			third.pop();
		third = third.join( "" );
		return third;
	}
	return "Something went wrong";
}
