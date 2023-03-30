// Add assignment operator to declarations
const date = 2050;
const status = 'student';

// Made count not a constant variable
let count = 0;

// Replace assignment operator with comparison operator
if (date === 2050) {
	console.log("January", 'New Year’s Day');
	console.log("March", 'Human Rights Day');

    // Removed April as a date variable to maintain consistency across logs
	console.log('April', 'Family Day'); 
	console.log('April', 'Freedom Day');


	// Remove re-declaration of count
    count += 4;

	// Replace assignment operator with comparison operator
    if (status === "student") {
	  console.log('June', 'Youth Day');
      count += 1;
  };

	console.log('August', 'Women’s Day');
	console.log('September', 'Heritage Day');

    // Removed December as a date variable to maintain consistency across logs
	console.log('December', 'Day of Reconciliation');

	count += 3;

	if (status === "parent") {
	  console.log('December', 'Christmas Day');
		count += 1;
  };

	console.log('December', 'Day of Goodwill');
	count += 1;
}

console.log('Your status is: ', status);
console.log('The year is: ', date);
console.log('The total holidays is: ', count);