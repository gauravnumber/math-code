// import { isLt } from './js/isLt.js'
// import { mcAddSection } from './js/mcAddSection.js'
// import { mcMulSection } from './js/mcMulSection.js'
import { mul } from './js/mul.js'
// import { fact } from './js/fact.js'
// import { pow } from './js/pow.js'
// import doubleDigitDividend  from './js/doubleDigitDividend.js'
// import div  from './js/div.js'
import { div } from './js/div.js'
// import singleDigitDiv from './js/singleDigitDiv.js'
// import divisibleFor from './js/divisibleFor.js'
// import removeZeroFromLeft from './js/.internal/removeZeroFromLeft.js'
import decimalPosition from './js/.internal/decimalPosition.js'
import decimalShift from './js/.internal/decimalShift.js'
// import isDecimal from './js/.internal/isDecimal.js'
import removeZeroFromRight from './js/.internal/removeZeroFromRight.js'
// import isZero from './js/.internal/isZero.js'

const temp = div("1", "1000000000000")
console.log(mul("23.232", temp)) 

// console.log(mul("2342.2323", "0.0000001"));
// console.log(mul("2342.2323", "44768.343"));
// console.log(div("0.00123432323", "12343.2323"));
// console.log(decimalPosition("0.000034"));

// console.log(mul("12343.2323", "123465.12445"));
// console.log(removeZeroFromRight("233.000"));
// console.log(mul("25675", "234245.21323"));
// console.log(mul("12345", "12343.2323"));
// console.log(mul("12343.2323", "12345"));
// console.log(isDecimal("0.0001"));
// console.log(isDecimal("2342.2323"));

// console.log(mul("212", "2"));
console.log(mul("2342.2323", "0.0000000000000000000001"));

// console.time()
// console.log(singleDigitDiv("1667", "1222", "1000")) // 102 digit fit my desktop screen including "."
// console.timeEnd()

// console.time()
// console.log(singleDigitDiv("355", "113", "200"))
// console.timeEnd()

// console.log(doubleDigitDividend("120", "13"));

// console.log(divisibleFor("120", "13"));
// console.log(divisibleFor("12", "8"));
// console.timeLog()
// for (let i = 0; i < 1000; i++) {
//   console.log("*");
// }

// console.log(singleDigitDiv("35", "13", "20"))
// console.log(singleDigitDiv("4", "2"))
// console.log(singleDigitDiv("1667", "1222", "90"))
// console.log(singleDigitDiv("9", "7"))
// console.log(singleDigitDiv("40", "13", "40"))
// console.log(singleDigitDiv("22", "7", "40"))
// console.log(singleDigitDiv("2", "6"))
// console.log(singleDigitDiv("5", "2"))
// console.log(singleDigitDiv("12", "8"))


// console.log(mul("3", "-0"));
// console.log(mul("-0", "2"));

// console.log(isZero("-0"));
// console.log(isZero("-."));
// console.log(isZero("4"));
// console.log(isZero("--7"));

// console.log(fact(4));

// console.log(removeZeroFromLeft("-000000"));
// console.log(removeZeroFromLeft("00233"));
// console.log(removeZeroFromLeft("0"));

// console.log(mcMulSection("0", "2"))
// console.log(mcAddSection(['2', '4'], "2"))
// console.log(mcMulSection(['2', '4'], "2"))
// console.log(mcMulSection("-1224342.3", "-736527.3"))
// console.log(typeof divisibleFor("4", "3"));
