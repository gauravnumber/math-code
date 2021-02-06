function mcDiv( dividend, divisor ) {
	var lengthno,
		i, j, initial,
		table,
		counting,
		remainder,
		quotient,
		temp,
		quotientIndex,
		dividendIndex, divisorLastIndex,
		decimaldividend, decimaldivisor, decimalthirdno,
		dividendpos, divisorpos,
		dividendslice, divisorslice,
		dividendhalf, divisorhalf,
		third, thirdhalf, thirdslice;
	third = quotient = [];
	quotientIndex = initial = 0;
	dividendIndex = 1;
	table = divisor;
	decimaldividend = false;
	decimaldivisor = false;
	dividendpos = divisorpos = -1;
	dividend = String( dividend );
	divisor = String( divisor );
	dividend = dividend.split( "" );
	divisor = divisor.split( "" );
	while( Number( dividend[0] )== 0 )
		dividend.shift();
	while( Number( divisor[0] )== 0 )
		divisor.shift();

	if( dividend[0] == "-"  && divisor[0] == "-" ) {
		dividend = dividend.slice( 1 );
		divisor = divisor.slice( 1 );
		dividend = dividend.join( "" );
		divisor = divisor.join( "" );
		third = mcMulSection( dividend, divisor );
		third = third.split( "" );
		third = third.join( "" );
		return third;
	} else if ( dividend[0] != "-" && divisor[0] == "-" ) {
		divisor = divisor.slice( 1 );
		dividend = dividend.join( "" );
		divisor = divisor.join( "" );
		third = mcMulSection( dividend, divisor );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	} else if ( dividend[0] == "-" && divisor[0] != "-" ) {
		dividend = dividend.slice( 1 );
		dividend = dividend.join( "" );
		divisor = divisor.join( "" );
		third = mcMulSection( divisor, dividend );
		third = third.split( "" );
		third.unshift( "-" );
		third = third.join( "" );
		return third;
	}

	for( i = 0; i < dividend.length; i++ )
		if( dividend[i] == "." ){
			decimaldividend = true;
			dividendpos = i;
			break;
		}
	for( i = 0; i < divisor.length; i++ )
		if( divisor[i] == "." ){
			decimaldivisor = true;
			divisorpos = i;
			break;
		}
	if( decimaldividend == false && decimaldivisor == false ){
		lengthno = dividend.length;
		for( i = 0; i < lengthno; i++, dividendIndex++ ) {
			dividendhold = dividend.slice( initial, dividendIndex );
			if ( isGte( dividendhold.join(""), divisor.join("") ) ) {
				if ( isGte( dividendhold.join(""), table ) ) {
						for ( counting = 1; isGte( dividendhold.join(""), table ); counting++ ) {
							table = mcMul( divisor.join(""), counting );
							if ( isEq( table, dividendhold.join("") ) ) {
								remainder = 0;
								quotient[quotientIndex] = counting;
								quotientIndex++;
								initial = i + 1;
								table = divisor.join("");
/*								$( "#oi" ).append("<li>dividendhold=" + dividendhold + "</li>");
								$( "#oi" ).append("<li>quotient=" + quotient + "</li>");
								$( "#oi" ).append("<li>i=" + i + "</li>");
*/								break;
							}
						}
				} else if ( !isGt(table, dividendhold.join("")) ) {
					for ( counting = 1; !isGte( table, dividendhold.join("") ); counting++ ) {
						table = mcMul( divisor.join(""), counting );
						if (isGt( table, dividendhold.join("") )) {
							table = mcMul( divisor.join(""), counting - 1 );
							quotient[ quotientIndex++ ] = counting;
							temp = mcSub( dividendhold.join(""), table );
							temp += dividend.slice( i + 1 ).join("");
							i = 0;
							lengthno = temp.length;
							dividendhold =temp.split("");
							table = divisor.join("");
							break;
						}
					}
				}
			} else {
				quotient[ quotientIndex++ ] = 0;
			}
		}
		while ( quotient[0] == 0 ) {
			quotient.shift();
		}
		return quotient.join("");
	} else if( decimaldividend == true || decimaldivisor == true ){

		dividendslice = dividend.slice( dividendpos + 1 );
		divisorslice = divisor.slice( divisorpos + 1 );

		dividendhalf = dividend.slice( 0, dividendpos );
		divisorhalf = divisor.slice( 0, divisorpos );
		dividend = dividendhalf.concat( dividendslice );
		divisor = divisorhalf.concat( divisorslice );

		dividend = dividend.join( "" );
		divisor = divisor.join( "" );

		third = mcMulSection( dividend, divisor );

		third = third.split( "" );
		decimalthirdno = dividendslice.length + divisorslice.length;
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
