// scripts.js

const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

const getDaysInMonth = (date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()

// Only edit below 

const createArray = (length) => {
    const result = []

    for (let i = 0; i <= length - 1; i++) {
        result.push(null);
    };

    return result;
};

const createData = () => {

    //Create a new date today then go to the first of that date.
    const current = new Date;
    current.setDate(1); //Why set the date to the 1st of currrent date?

    let startDay = current.getDay(); // Shows the day of the week Mon-Fri as 0-6.
    let daysInMonth = getDaysInMonth(current); // No. of days in the current month.

    const weeks = createArray(6); // There are a maximum of 5 weeks in each month. 30/7 is 4 with a remainder.
    const days = createArray(7);
    let value = null;
    let storage = [];

    let day = 0 - startDay;

    for (let weekIndex = 0; weekIndex <= weeks.length - 1; weekIndex++) {
        value = {
            week: weekIndex + 1,
            days: [],
        };

        for (let dayIndex = 0; dayIndex <= days.length - 1; dayIndex++) {
            day++;
            const isValid = (day > 0) && (day <= daysInMonth);

            /* Adds the day to the end of the array
             * so that days are added from right to Left. */

            value.days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });
        };
        storage.push(value); // Save contents of value inside storage because value changes after every cycle.
    };
    return storage;
    /* Must have return to use for later functions. Return is a nested array of six inner arrays. Each inner
     * array represents a week and it's days.*/
};

const addCell = (existing, classString, value) => {
    const result = /* html */ 
    `
        <td ${classString}>
            ${value}
        </td>

        ${existing}
    `
    return result;
};

const createHtml = (data) => {
    let result = '';

    for (let x = 0; x < data.length; x++) {
        
        let inner = "";

        /* data[x].days is NOT an array but an object. So I can only access it using Object.keys.
         * Also changed the order in which days appear to go from left to right. 
         */
        
        for (let y = (Object.keys(data[x].days).length - 1); y >= 0; y--) { 

            // Check current date in calender.
            let isToday = new Date().getDate() === data[x].days[y].value; 
            
            let isWeekend = data[x].days[y].dayOfWeek === 0 || data[x].days[y].dayOfWeek === 6; 

            let isAlternate = (data[x].week % 2) === 0; 

            // These will be used as selectors inside the CSS.
            let classString = 'class="table__cell'; 

            if (isToday) {
                classString += ' table__cell_today';
            };

            if (isWeekend) {
                classString += ' table__cell_weekend';
            };
            
            if (isAlternate) {
                classString += ' table__cell_alternate';
            };
            classString += `"`;
           
            inner = addCell(inner, classString, data[x].days[y].value);
        };

        inner = addCell(inner, 'class="table__cell table__cell_sidebar"', `Week ${data[x].week}`);

        result = result + `<tr>${inner}</tr>`
    };
    return result;
};

// Only edit above

const current = new Date();
document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`;

const data = createData();
document.querySelector('[data-content]').innerHTML = createHtml(data);