// @ts-check

/**
 * The maximum that the tally counter can count to.
 * @type {number} MAX_NUMBER
 */
const MAX_NUMBER = 15

/**
 * The minimum that the tally counter can count to.
 * @type {number} MIN_NUMBER
 */
const MIN_NUMBER = -5

/**
 * Selector for the DOM element where the tally total is displayed.
 * @type {HTMLInputElement} currentNumber
 */
const currentNumber = document.querySelector('[data-key="currentNumber"]');

/**
 * Selector for the DOM elemnt with the subtract button.
 * @type {HTMLButtonElement} subtract
 */
const subtract= document.querySelector('[data-key="subtract"]');

/**
 * Selector for the DOM elemnt with the add button.
 * @type {HTMLButtonElement} add
 */
const add = document.querySelector('[data-key="add"]');

/**
 * Event handler to check whether the subtact button is disabled, and if not, it will subtrac
 * 1 to the tally amount.
 * @event subtractHandler
 */
const subtractHandler = () => {

    /**
     * Stores tally count valu after subtraction.
     * @type {number} newValue
     */
    const newValue = parseInt(currentNumber.value) - 1;
    currentNumber.value = newValue;

    if (add.disabled === true)
    {
        add.disabled = false;
    };

    if (newValue <= MIN_currentNumber)
    {
        subtract.disabled = true;
    };

};


/**
 * Event handler to check whether the add button is disabled, and if not, it will add
 * 1 to the tally amount.
 * @event addHandler
 */
const addHandler = () => {

    /**
     * Stores tally count valu after subtraction.
     * @type {number} newValue
     */
    const newValue = parseInt(currentNumber.value) + 1;
    currentNumber.value = newValue

    if (subtract.disabled === true)
    {
        subtract.disabled = false;
    };

    if (newValue >= MAX_NUMBER)
    {
        add.disabled = true;
    };
};

/**
 * Decreases tally by 1.
 * @fires subtractHandler
 */
subtract.addEventListener('click', subtractHandler);

/**
 * Increments tally by 1.
 * @fires addtHandler
 */
add.addEventListener('click', addHandler)