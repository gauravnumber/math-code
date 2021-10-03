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
// import decimalPosition from './js/.internal/decimalPosition.js'
// import decimalShift from './js/.internal/decimalShift.js'
// import isDecimal from './js/.internal/isDecimal.js'
import removeZeroFromRight from './js/.internal/removeZeroFromRight.js'
// import isZero from './js/.internal/isZero.js'

// const temp = singleDigitDiv("1", "1000000000000")
// console.log(mul("23.232", temp)) 

// console.log(removeZeroFromRight("233.000"));
// console.log(mul("25675", "234245.21323"));
// console.log(mul("12343.2323", "100000"));
console.log(mul("2342.2323", "0.00001"));
// console.log(isDecimal("0.0001"));
// console.log(isDecimal("2342.2323"));

// console.log(mul("212", "2"));
// console.log(mul("2342.2323", "0.0000000000000000000001"));
// console.log(mul("12343.2323", "100000"));

// for (let index = -20; index <= 20; index++) {
//   console.log("index:" + index + " " + decimalShift("12345", index));
// }

// console.log(div("355", "113", "100"));

// console.log(decimalShift("123", "-5"));
// console.log(decimalShift("123", "-3"));
// console.log(decimalShift("123", "-1"));

// let dividend = "1237.48956"
// // divisorDecimalPosition = decimalPosition(divisor)
// let dividendDecimalPosition = decimalPosition(dividend)

// let dividendLastDecimalPosition = dividend.length - dividendDecimalPosition

// console.log(dividendLastDecimalPosition);
// console.log(dividendDecimalPosition);

// console.log(singleDigitDiv("155060736", "12345.6"));
// console.log(singleDigitDiv("15506073.6", "1.23456"));
// console.log(singleDigitDiv("1550607.36", "123456"));
// console.log(decimalShift("12133.0", "-3"));

// 10945/12567

// for (let i = 0; i <= 15; i++) {
//   console.log(`${i} : ${singleDigitDiv("126789.1", "1256.7", i)}`)
//   // console.log(`${i} : ${singleDigitDiv("123456789.1", "1223456.7", i)}`)
//   // console.log(singleDigitDiv("126789.1", "1256.7", "2"))
// }
// console.log(singleDigitDiv("10945", "12567"))
// console.log(singleDigitDiv("1234567891", "12567"))
// console.log(singleDigitDiv("1252.32345", "212231.2212345")) // not working as expected

// for (let index = -20; index <= 20; index++) {
//   console.log("index:" + index + " " + decimalShift("12345.6789", index));
// }

// console.log(decimalShift("123456.789", "3"))  // -7 4

// console.log(decimalShift("34", "0")) 

// console.log(singleDigitDiv("1", "1000000")) 

// console.log(pow("10", "3")) 

// console.log(decimalPosition("125989.1")) 
// console.log(decimalPosition("1255.29891")) 
// console.log(singleDigitDiv("1252323.23231", "1.23212", "12")) 
// console.log("2332.23".indexOf("."));
// console.log("2332.23".lastIndexOf("."));


// console.log(singleDigitDiv("-1251", "12")) 
// console.log(singleDigitDiv("-6", "-12"));

// console.log(singleDigitDiv("6", "12"));
// console.log(singleDigitDiv("1251", "12")) 
// console.log(singleDigitDiv("3", "12")) 

// console.log(isLt(["6"], ["1", "2"]));
// console.time()
// console.log(singleDigitDiv("11257", "7", "50")) 
// console.log(singleDigitDiv("11245", "2")) 
// console.log(singleDigitDiv("0", "2"))
// console.log(singleDigitDiv("12", "0")) 
// console.log(singleDigitDiv("12", "12"))
// console.log(singleDigitDiv("37284", "2")) // => 18642
// console.timeEnd()
// console.log(singleDigitDiv("11246", "2")) // => 5623
// console.log(singleDigitDiv("14287", "7")) // => 2041
// console.log(singleDigitDiv("3186", "3"))
// console.log(singleDigitDiv("1242", "2"))
// console.log('abc'.charAt(1));

// console.log(singleDigitDiv("96396", "3"))
// console.log(singleDigitDiv("8642", "2"))
// console.log(divisibleFor("2", "2"));
// console.log(singleDigitDiv("2", "2")); // not working now


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
