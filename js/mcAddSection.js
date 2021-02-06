function mcAddSection( first, second ){
	var lengthno,
		i,
		firstLastIndex, secondLastIndex,
		firstnohold, secondnohold,
		decimalfirst, decimalsecond,
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
		third = mcAddSection( first, second );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcSubSection( first, second );
		third = third.split( "" );
		third = third.join( "" );
		return third;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		first = first.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = mcSubSection( second, first );
		third = third.split( "" );
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
	if( decimalfirst == false && decimalsecond == false ) {
		if( first.length > second.length )
			lengthno = first.length;
		else
			lengthno = second.length;
		firstLastIndex = first.length - 1;
		secondLastIndex = second.length - 1;
		for( i = 0; i < lengthno; i++, firstLastIndex--, secondLastIndex-- ) {
			firstnohold = (firstLastIndex < 0)? 0 : Number( first[ firstLastIndex ] );
			secondnohold = (secondLastIndex < 0)? 0 : Number( second[ secondLastIndex ] );
			third[i] = (isNaN( third[i] ))? 0 : third[i];
			third[i] = Number( third[i] ) + firstnohold + secondnohold;
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
	else if( decimalfirst == true || decimalsecond == true ) {

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
		firstslice = (firstpos < 0)? 0 : first.slice( firstpos + 1 );
		secondslice = (secondpos < 0)? 0 : second.slice( secondpos + 1 );
		while( firstslice.length > secondslice.length )
			secondslice.push( "0" );
		while( secondslice.length > firstslice.length )
			firstslice.push( "0" );

		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );

		firsthalf = firsthalf.join( "" );
		secondhalf = secondhalf.join( "" );
		firstslice = firstslice.join( "" );
		secondslice = secondslice.join( "" );

		thirdhalf = mcAddSection( firsthalf, secondhalf );
		thirdslice = mcAddSection( firstslice, secondslice );

		if( firstslice.length == secondslice.length &&
			thirdslice.length == firstslice.length ) {

			thirdslice = thirdslice.split( "" );
			while( thirdslice[thirdslice.length - 1] == 0 )
				thirdslice.pop();
			thirdslice = thirdslice.join( "" );
			third = thirdhalf.concat( ".", thirdslice );
			return third;
		}
		else if( firstslice.length == secondslice.length &&
			thirdslice.length == firstslice.length + 1 ){

			thirdhalf = mcAddSection( thirdhalf, thirdslice.charAt( 0 ) );
			thirdslice = thirdslice.split( "" );
			thirdslice.shift();
			while( thirdslice[thirdslice.length - 1] == 0 )
				thirdslice.pop();
			thirdslice = thirdslice.join( "" );

			third = thirdhalf.concat( ".", thirdslice );
			return third;
		}
	}
	return "Something went wrong";
}
