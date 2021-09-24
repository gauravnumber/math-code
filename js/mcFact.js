// import { mcMulSection } from './mcMulSection.js';
import { mcMul } from './mcMul.js';

export function mcFact(number) {
  number = Number(number);

  if (number === 0 || number === 1)
    return "1";
  else
    // return mcMulSection(number, mcFact(number - 1));
    return mcMul(number, mcFact(number - 1));
}
