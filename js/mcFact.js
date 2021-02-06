function mcFact( number ) {
  number = Number( number );
  if ( number == 0 || number == 1 )
    return 1;
  else
    return mcMul( number, mcFact( number - 1 ) );
}
