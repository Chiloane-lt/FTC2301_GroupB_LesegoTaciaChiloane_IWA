import { company } from '/IWA_03/Challenge_1/scripts/configuration.js';
import { year } from '/IWA_03/Challenge_1/scripts/configuration.js';

const message = '© ' + company + ' (' + year + ')';
document.querySelector('footer').innerText = message;