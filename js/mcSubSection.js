function mcSubSection( first, second ){
	var lengthno,
		i, similar,
		firstLastIndex, secondLastIndex,
		firstnohold, secondnohold,
		decimalfirst, decimalsecond, decimalthirdno,
		firstpos, secondpos,
		firstslice, secondslice,
		firsthalf, secondhalf,
		third, thirdhalf, thirdslice;
	third = [];
	decimalfirst = false;
	decimalsecond = false;
	similar = false;
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
		third = mcSubSection( second, first );
		third = third.split( "" );
		third = third.join( "" );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcAddSection( first, second );
		third = third.split( "" );
		third = third.join( "" );
		return third;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		first = first.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcAddSection( second, first );
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
		if( first.length > second.length ) {
			return mcSubSolve( first.join( "" ), second.join( "" ) );
		}
		else if ( second.length > first.length ) {
			third = mcSubSolve( second.join( "" ), first.join( "" ) );
			third = third.split( "" );
			third.unshift( "-" );
			third = third.join( "" );
			return third;
		}
		else if ( first.length == second.length ) {
			for ( i = 0, lengthno = first.length; i < lengthno; i++) {
				if ( first[ i ] == second[ i ] ) {
					similar = true;
				}
				else if ( first[ i ] > second[ i ] ) {
					return mcSubSolve( first.join( "" ), second.join( "" ) );
				}
				else if ( first[ i ] < second[ i ] ) {
					third =	mcSubSolve( second.join( "" ), first.join( "" ) );
					third = third.split( "" );
					third.unshift( "-" );
					third = third.join( "" );
					return third;
				}
			 }
			if ( similar == true ) {
				return 0;
			}
		}
	}
	else if( decimalfirst == true || decimalsecond == true ){
		if( decimalfirst == false ){
			first = first.join( "" );
			firstpos = first.length;
			first = first.concat( ".0" );
			first = first.split( "" );
		}
		else if( decimalsecond == false ){
			second = second.join( "" );
			secondpos = second.length;
			second = second.concat( ".0" );
			second = second.split( "" );
		}
		firstslice = (firstpos < 0)? 0 : first.slice( firstpos + 1 );
		secondslice = (secondpos < 0)? 0 : second.slice( secondpos + 1 );
		while( firstslice.length > secondslice.length )
			secondslice.push( "0" );
		while( secondslice.length > firstslice.length )
			firstslice.push( "0" );

		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );

		first = firsthalf.concat( firstslice );
		second = secondhalf.concat( secondslice );

		third = mcSubSection( first.join( "" ), second.join( "" ) );
		third = third.split( "" );
		decimalthirdno = firstslice.length;
		third.splice( third.length - decimalthirdno, 0, "." );

		while ( third[ third.length - 1 ] == 0 ) {
			third.pop();
		}
		if ( third[ third.length - 1 ] == "." ) {
			third.pop();
		}
		third = third.join( "" );
		return third;

	}
	return "Something went wrong";
}
