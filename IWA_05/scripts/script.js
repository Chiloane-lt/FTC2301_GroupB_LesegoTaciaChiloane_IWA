const FREE_WARNING = "Free shipping only applies to single customer orders";
const BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
const NONE_SELECTED = "0";

// Set customer details initially since these are going to be used later in the script
let customers = 1;
let customerLocation = 'RSA';
let currency = null;
let shipping = 0;

if (customerLocation === 'RSA') {
  shipping = 400;
  currency = "R";
} else if (customerLocation === 'NAM') {
  shipping = 600;
  currency = "$";
} else {
  shipping = 800;
  currency = "$";
}

const shoes = 300 * 1;
const toys = 100 * 5;
const shirts = 150 * NONE_SELECTED;
const batteries = 35 * 2;
const pens = 5 * NONE_SELECTED;
const totalNoShip = shoes + toys + shirts + batteries + pens;

// shipping = null
// currency = $

if (customers === 1 && (customerLocation === 'NAM' || customerLocation === 'RSA')) {
  if (shoes + toys + batteries + pens + shirts >= 1000) {
    if (customerLocation === 'NAM' && totalNoShip >= 60) {
      shipping = 0;
    }
    if (customerLocation === 'RSA' && totalNoShip >= 1000) {
      shipping = 0;
    }
  }
} else {
  console.log(FREE_WARNING);
}

if (customerLocation === 'NK') {
  console.log(BANNED_WARNING);
} else {
  console.log("price: ", currency, totalNoShip + shipping);
}
