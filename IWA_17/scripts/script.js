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

    const weeks = createArray(5); // There are a maximum of 5 weeks in each month. 30/7 is 4 with a remainder.
    const days = createArray(7); 
    let value = null;
    let day = 0 - startDay;

    for (let weekIndex = 0; weekIndex <= weeks.length - 1; weekIndex++) {
        value = {
            week: weekIndex + 1,
            days: [],
        };

        for (let dayIndex = 0; dayIndex <= days.length - 1; dayIndex++) {
            day++;
            const isValid = (day > 0) && (day <= daysInMonth);

            /* dds the day to the end of the array and unshifts
             * so that days are added from right to screenLeft. */

            value.days.push({
                dayOfWeek: dayIndex,
                value: isValid ? day : '',
            });

            value.days.unshift();
        };
        console.log(value)
    }
    
}

// const addCell = (existing, classString, value) => {
//     const result = /* html */ `
//         <td ${classString}>
//             ${value}
//         </td>

//         ${existing}
//     `
// }

// const createHtml = (data) => {
//     let result = ''

//     for (week, days in data) {
//         let inner = ""
//         addCell(inner, 'table__cell table__cell_sidebar', 'Week {week}')
    
//         for (dayOfWeek, value in days) {
//             classString = table__cell
// 						isToday = new Date === value
//             isWeekend = dayOfWeek = 1 && dayOfWeek == 7
//             isAlternate = week / 2

//             let classString = 'table__cell'

// 						if (isToday) classString = `${classString} table__cell_today`
//             if (isWeekend) classString === '{classString} table__cell_weekend'
//             if (isAlternate) classString === '{classString} table__cell_alternate'
//             addCell(inner, classString, value)
//         }

//         result = `<tr>${inner}</tr>`
//     }
// }

// // Only edit above

// const current = new Date()
// document.querySelector('[data-title]').innerText = `${MONTHS[current.getMonth()]} ${current.getFullYear()}`

// const data = createData()
// document.querySelector('[data-content]').innerHTML = createHtml(data)


createData();