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
function mcAdd() {
	var third = 0;
	for( var i = 0, j = arguments.length; i < j; i++ ) {
		third = mcAddSection( arguments[i], third );
	}
	return third;
}
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
function mcMul(){
	var third = 1;
	for( var i = 0, j = arguments.length; i < j; i++ ){
		third = mcMulSection( arguments[ i ], third );
	}
	return third;
}
function mcPow( number, power ) {
   if ( power == 0 || number == 1 )
      return 1;
  var holdnumber = [], third;
  for (var i = 0; i < power; i++) {
     holdnumber[ i ] = number;
  }
  third = mcMul.apply( null, holdnumber );
  return third;
}
function mcFact( number ) {
  number = Number( number );
  if ( number == 0 || number == 1 )
    return 1;
  else
    return mcMul( number, mcFact( number - 1 ) );
}
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
function mcSub() {
	var third = 0;
	for( var i = 0, j = arguments.length; i < j; i++ ) {
		third = mcSubSection( arguments[i], third );
	}
	return third;
}
function isEq( first, second ){
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
	while( Number( first[0] ) == 0 )
		first.shift();
	while( Number( second[0] ) == 0 )
		second.shift();
	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = isEq( first, second );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return false;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		return false;
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
	while ( first[ first.length - 1 ] == 0 && decimalfirst == true ) {
		first.pop();
	}
	while ( second[ second.length - 1 ] == 0 && decimalsecond == true ) {
		second.pop();
	}
	while ( first[ first.length - 1 ] == "." ) {
		first.pop();
		decimalfirst = false;
	}
	while ( second[ second.length - 1 ] == "." ) {
		second.pop();
		decimalsecond = false;
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
		if ( first.length == second.length ) {
			lengthno = first.length;
			for ( i = 0; i < lengthno; i++ ) {
				if( first[i] != second[i] ) {
					return false;
				}
			}
			return true;
		} else {
			return false;
		}
	} else if ( decimalfirst == true && decimalsecond == false ) {
		return false;
	} else if ( decimalfirst == false && decimalsecond == true ) {
		return false;
	} else if( decimalfirst == true && decimalsecond == true ) {
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		firsthalf = firsthalf.join( "" );
		secondhalf = secondhalf.join( "" );
		firstslice = firstslice.join( "" );
		secondslice = secondslice.join( "" );
		if ( firstslice.length == secondslice.length ) {
			thirdslice = isEq( firstslice, secondslice );
		} else {
			thirdslice = false;
		}
		thirdhalf = isEq( firsthalf, secondhalf );
		if ( thirdhalf == thirdslice ) {
			return true;
		} else {
			return false;
		}
	}
	return "Something went wrong";
}
function isNeq( first, second ) {
   return !isEq( first, second );
}
function isGt( first, second ){
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
	while( Number( first[0] ) == 0 )
		first.shift();
	while( Number( second[0] ) == 0 )
		second.shift();
	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = isGt( second, first );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return true;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		return false;
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
	while ( first[ first.length - 1 ] == 0 && decimalfirst == true ) {
		first.pop();
	}
	while ( second[ second.length - 1 ] == 0 && decimalsecond == true ) {
		second.pop();
	}
	while ( first[ first.length - 1 ] == "." ) {
		first.pop();
		decimalfirst = false;
	}
	while ( second[ second.length - 1 ] == "." ) {
		second.pop();
		decimalsecond = false;
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
		if ( first.length == second.length ) {
			lengthno = first.length;
			for ( i = 0; i < lengthno; i++ ) {
				if ( first[i] > second[i] ) {
					return true;
				} else if ( first[i] < second[i] ) {
					return false;
				}
			}
			return false;
		} else if( first.length > second.length ) {
			return true;
		} else if (  first.length < second.length  ) {
			return false;
		}
	} else if ( decimalfirst == true && decimalsecond == false ) {
		firsthalf = first.slice( 0, firstpos );
		if ( isEq( firsthalf, second ) ) {
			return true;
		} else {
			return isGt( firsthalf, second );
		}
	} else if ( decimalfirst == false && decimalsecond == true ) {
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( first, secondhalf ) ) {
			return false;
		} else {
			return isGt( first, secondhalf );
		}
	} else if( decimalfirst == true && decimalsecond == true ) {
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( firsthalf.join( "" ), secondhalf.join( "" ) ) ) {
			while ( firstslice.length > secondslice.length ) {
				secondslice.push( "0" );
			}
			while ( firstslice.length < secondslice.length ) {
				firstslice.push( "0" );
			}
			return isGt( firstslice.join( "" ), secondslice.join( "" ) );
		} else {
			thirdhalf = isGt( firsthalf.join( "" ), secondhalf.join( "" ) );
			return thirdhalf;
		}
	}
	return "Something went wrong";
}
function isGte( first, second ){
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
	while( Number( first[0] ) == 0 )
		first.shift();
	while( Number( second[0] ) == 0 )
		second.shift();
	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = isGte( second, first );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return true;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		return false;
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
	while ( first[ first.length - 1 ] == 0 && decimalfirst == true ) {
		first.pop();
	}
	while ( second[ second.length - 1 ] == 0 && decimalsecond == true ) {
		second.pop();
	}
	while ( first[ first.length - 1 ] == "." ) {
		first.pop();
		decimalfirst = false;
	}
	while ( second[ second.length - 1 ] == "." ) {
		second.pop();
		decimalsecond = false;
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
		if ( first.length == second.length ) {
			lengthno = first.length;
			for ( i = 0; i < lengthno; i++ ) {
				if ( first[i] > second[i] ) {
					return true;
				} else if ( first[i] < second[i] ) {
					return false;
				}
			}
			return true;
		} else if( first.length > second.length ) {
			return true;
		} else if (  first.length < second.length  ) {
			return false;
		}
	} else if ( decimalfirst == true && decimalsecond == false ) {
		firsthalf = first.slice( 0, firstpos );
		if ( isEq( firsthalf, second ) ) {
			return true;
		} else {
			return isGte( firsthalf, second );
		}
	} else if ( decimalfirst == false && decimalsecond == true ) {
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( first, secondhalf ) ) {
			return false;
		} else {
			return isGte( first, secondhalf );
		}
	} else if( decimalfirst == true && decimalsecond == true ) {
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( firsthalf.join( "" ), secondhalf.join( "" ) ) ) {
			while ( firstslice.length > secondslice.length ) {
				secondslice.push( "0" );
			}
			while ( firstslice.length < secondslice.length ) {
				firstslice.push( "0" );
			}
			return isGte( firstslice.join( "" ), secondslice.join( "" ) );
		} else {
			thirdhalf = isGte( firsthalf.join( "" ), secondhalf.join( "" ) );
			return thirdhalf;
		}
	}
	return "Something went wrong";
}
function isLt( first, second ){
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
	while( Number( first[0] ) == 0 )
		first.shift();
	while( Number( second[0] ) == 0 )
		second.shift();
	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = isLt( second, first );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return false;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		return true;
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
	while ( first[ first.length - 1 ] == 0 && decimalfirst == true ) {
		first.pop();
	}
	while ( second[ second.length - 1 ] == 0 && decimalsecond == true ) {
		second.pop();
	}
	while ( first[ first.length - 1 ] == "." ) {
		first.pop();
		decimalfirst = false;
	}
	while ( second[ second.length - 1 ] == "." ) {
		second.pop();
		decimalsecond = false;
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
		if ( first.length == second.length ) {
			lengthno = first.length;
			for ( i = 0; i < lengthno; i++ ) {
				if ( first[i] < second[i] ) {
					return true;
				} else if ( first[i] > second[i] ) {
					return false;
				}
			}
			return false;
		} else if( first.length < second.length ) {
			return true;
		} else if (  first.length > second.length  ) {
			return false;
		}
	} else if ( decimalfirst == true && decimalsecond == false ) {
		firsthalf = first.slice( 0, firstpos );
		if ( isEq( firsthalf, second ) ) {
			return false;
		} else {
			return isLt( firsthalf, second );
		}
	} else if ( decimalfirst == false && decimalsecond == true ) {
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( first, secondhalf ) ) {
			return true;
		} else {
			return isLt( first, secondhalf );
		}
	} else if( decimalfirst == true && decimalsecond == true ) {
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( firsthalf.join( "" ), secondhalf.join( "" ) ) ) {
			while ( firstslice.length > secondslice.length ) {
				secondslice.push( "0" );
			}
			while ( firstslice.length < secondslice.length ) {
				firstslice.push( "0" );
			}
			return isLt( firstslice.join( "" ), secondslice.join( "" ) );
		} else {
			thirdhalf = isLt( firsthalf.join( "" ), secondhalf.join( "" ) );
			return thirdhalf;
		}
	}
	return "Something went wrong";
}
function isLte( first, second ){
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
	while( Number( first[0] ) == 0 )
		first.shift();
	while( Number( second[0] ) == 0 )
		second.shift();
	if( first[0] == "-"  && second[0] == "-" ) {
		first = first.slice( 1 );
		second = second.slice( 1 );
		first = first.join( "" );
		second = second.join( "" );
		third = isLte( second, first );
		return third;
	} else if ( first[0] != "-" && second[0] == "-" ) {
		return false;
	} else if ( first[0] == "-" && second[0] != "-" ) {
		return true;
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
	while ( first[ first.length - 1 ] == 0 && decimalfirst == true ) {
		first.pop();
	}
	while ( second[ second.length - 1 ] == 0 && decimalsecond == true ) {
		second.pop();
	}
	while ( first[ first.length - 1 ] == "." ) {
		first.pop();
		decimalfirst = false;
	}
	while ( second[ second.length - 1 ] == "." ) {
		second.pop();
		decimalsecond = false;
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
		if ( first.length == second.length ) {
			lengthno = first.length;
			for ( i = 0; i < lengthno; i++ ) {
				if ( first[i] < second[i] ) {
					return true;
				} else if ( first[i] > second[i] ) {
					return false;
				}
			}
			return true;
		} else if( first.length < second.length ) {
			return true;
		} else if (  first.length > second.length  ) {
			return false;
		}
	} else if ( decimalfirst == true && decimalsecond == false ) {
		firsthalf = first.slice( 0, firstpos );
		if ( isEq( firsthalf, second ) ) {
			return false;
		} else {
			return isLte( firsthalf, second );
		}
	} else if ( decimalfirst == false && decimalsecond == true ) {
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( first, secondhalf ) ) {
			return true;
		} else {
			return isLte( first, secondhalf );
		}
	} else if( decimalfirst == true && decimalsecond == true ) {
		firstslice = first.slice( firstpos + 1 );
		secondslice = second.slice( secondpos + 1 );
		firsthalf = first.slice( 0, firstpos );
		secondhalf = second.slice( 0, secondpos );
		if ( isEq( firsthalf.join( "" ), secondhalf.join( "" ) ) ) {
			while ( firstslice.length > secondslice.length ) {
				secondslice.push( "0" );
			}
			while ( firstslice.length < secondslice.length ) {
				firstslice.push( "0" );
			}
			return isLte( firstslice.join( "" ), secondslice.join( "" ) );
		} else {
			thirdhalf = isLte( firsthalf.join( "" ), secondhalf.join( "" ) );
			return thirdhalf;
		}
	}
	return "Something went wrong";
}
