const currentYear = new Date().getFullYear();

const holidays = {
    0: {
        id: 0,
        name: 'Day of Reconciliation',
        date: `16 December ${currentYear}`,
    },
    1: {
        id: 1,
        name: 'Workers Day',
        date: new Date(`1 April ${currentYear}`),
    },
    2: {
        id: 2,
        name: 'Day of Goodwill',
        date: new Date(`26 December ${currentYear}`),
    },
    3: {
        id: 3,
        name: 'New Year Day',
        date: new Date(`1 January ${currentYear}`),
    },
    4: {
        id: 4,
        name: 'Womens Day',
        date: new Date(`9 August ${currentYear}`),
    },
    5: {
        id: 5,
        name: 'Heritage Day',
        date: new Date(`24 September ${currentYear}`),
    },
    6: {
        id: 6,
        name: 'Christmas Day',
        date: new Date(`25 December ${currentYear} 13:25`),
    },
    7: {
        id: 7,
        name: 'Youth Day',
        date: new Date(`16 June ${currentYear}`),
    },
    8: {
        id: 8,
        name: 'Human Rights Day',
        date: new Date(`21 March ${currentYear}`)
    },
};

const christmas = 6;
const futureId = 9;

// Do not change code above this comment

console.log(holidays && holidays[futureId] && holidays[futureId].name || `ID ${futureId} not created yet`);

/**
 * @copied: "deep" copy of holidays[6]
 */
let copied = structuredClone(holidays[christmas]);


/**
 * Change name of christmas holiday to X-mas Day
 */
copied.name = 'X-mas Day';


/**Deep copy of copied.date. Time will be edited to midnight. */
let correctDate = structuredClone(copied.date); 

correctDate.setHours(0);                //Set hour to midnight
correctDate.setMinutes(0);              //Set time to 00 minutes

/**
 * Check whether the new date is earlier than the current date.
 */
let isEarlier = correctDate.getTime() < holidays[6].date.getTime();

console.log(`New date is earlier: ${isEarlier}`);

//Apply changes to copied if check is true.

if (isEarlier){
    copied.date = correctDate;
};

console.log('ID change:', holidays[christmas].id != copied.id && copied.id);

console.log('Name change:', holidays[christmas].name != copied.name && copied.name);

console.log('Date change:', holidays[christmas].date != copied.date && `${copied.date.getDate()}/${copied.date.getMonth() + 1}/${copied.date.getFullYear()}`);      //Starts counting from 0, therefore, it's a good idea to add 1 to each return value.

//Complete the changes on the original holidays object.
holidays[6] = copied;


console.log(holidays[0].date)

const firstHolidayTimestamp = Math.min(
    new Date(holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const lastHolidayTimestamp = Math.max(
    new Date(holidays[0].date).getTime(),
    holidays[1].date.getTime(),
    holidays[2].date.getTime(),
    holidays[3].date.getTime(),
    holidays[4].date.getTime(),
    holidays[5].date.getTime(),
    holidays[6].date.getTime(),
    holidays[7].date.getTime(),
    holidays[8].date.getTime(),
)

const firstDay = new Date(firstHolidayTimestamp).getDate();
const firstMonth = new Date(firstHolidayTimestamp).getMonth() + 1;

const lastDay = new Date(lastHolidayTimestamp).getDate();
const lastMonth = new Date(lastHolidayTimestamp).getMonth();

console.log(`${(firstDay.toString()).padStart(2,"0")}/${(firstMonth.toString()).padStart(2,"0")}/${currentYear}`);

console.log(`${(lastDay.toString()).padStart(2,"0")}/${(lastMonth.toString()).padStart(2,"0")}/${currentYear}`);

const randomHoliday = holidays[Math.floor(Math.random()*10)];
console.log(randomHoliday.date)