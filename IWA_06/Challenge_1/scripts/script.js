// Method 1

const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const primaryValid = isNaN(primaryPhone) === false; 
const secondaryValid = isNaN(secondaryPhone) === false;

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );

/**Method 2

const primaryPhone = 'O748105141';
const secondaryPhone = '0219131568';

// Only change below this line

const test = 1235;

const primaryValid = typeof test === typeof  primaryPhone; 
const secondaryValid = typeof test === typeof secondaryPhone;

console.log('Primary phone is valid numerical string:', primaryValid);
console.log('Secondary phone is valid numerical string:', secondaryValid );
*/