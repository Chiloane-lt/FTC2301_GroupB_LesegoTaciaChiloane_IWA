const leoName = 'Leo'
const leoSurname = 'Musvaire     '
const leoBalance = '-9394'

const sarahName = 'Sarah    '
const sarahSurname = 'Kleinhans'
const sarahBalance = '-4582.21000111'

const divider = '----------------------------------';

// Only change below this line

const calc = parseFloat(((parseFloat(leoBalance) + parseFloat(sarahBalance)) * -1).toFixed(2));
const addSeparator = calc.toLocaleString("fi-FI", { minimumFractionDigits: 2});

// toLocaleString only works on numbers not strings. Therefore I separated the calculation to maintain the final amount as a number BEFORE passing to to toLocaleString


const owed = `R ${addSeparator}`;
const leo = `${leoName} ${leoSurname.trimEnd()} (Owed: R ${((leoBalance * -1).toFixed(2))})`;
const sarah = `${sarahName.trimEnd()} ${sarahSurname} (Owed: R ${((sarahBalance * -1).toFixed(2))})`;
const total = "Total amount owed: ";
const result = `${leo}\n${sarah}\n\n${divider}\n  ${total}${owed}\n${divider}`;

console.log(result);