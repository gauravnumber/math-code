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
