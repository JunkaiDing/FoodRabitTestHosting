const timeZone = 'America/Vancouver';

// get the delivery date, given order date
// assume that the delivery date doesn't fall on a weekend
export function getFirstOrderArrivalDate(orderDate: Date): Date {
	const vancouverDate = new Date(orderDate.toLocaleString('en-US', { timeZone: timeZone }));
	// console.log('orderdate', vancouverDate.toLocaleString('en-US', { timeZone: timeZone }));

	const sixPM = new Date(vancouverDate);

	// 6pm cutoff
	sixPM.setHours(18, 0, 0, 0);
	// console.log('cutoff', sixPM.toLocaleString('en-US', { timeZone: timeZone }));

	let deliveryDate;
	// If the input date is before 6pm, return the next day
	if (vancouverDate <= sixPM) {
		// console.log('getnextday');
		const nextDay = new Date(vancouverDate);
		nextDay.setDate(nextDay.getDate() + 1);
		deliveryDate = nextDay.getDay() !== 6 && nextDay.getDay() !== 0 ? nextDay : nextDay;
	} else {
		// If the input date is after 6pm, return the next next day
		const nextNextDay = new Date(vancouverDate);
		nextNextDay.setDate(nextNextDay.getDate() + 2);
		deliveryDate =
			nextNextDay.getDay() !== 6 && nextNextDay.getDay() !== 0 ? nextNextDay : nextNextDay;
		// console.log(
		// 	'deliverydate',
		// 	deliveryDate ? deliveryDate.toLocaleString('en-US', { timeZone: timeZone }) : 'no delivery'
		// );
	}
	if (deliveryDate) {
		deliveryDate.setHours(17, 0, 0, 0);
	}
	return deliveryDate;
}

export function calculateDayDifference(date: Date, targetDay: number): number {
	// Set the target day of the week (0 = Sunday, 1 = Monday, etc.)
	// console.log('orderdate', date.toLocaleString('en-US', { timeZone: timeZone }));
	const day = targetDay;

	const dayOfWeek = date.getDay();
	//   const dayOfWeek = new Date(date.toLocaleString("en-US", { timeZone: localTimezone })).getDay();
	// console.log('dayofweek', dayOfWeek);

	// Calculate the difference between the target day and the day of the week for the given date
	let difference = day - dayOfWeek;
	// console.log('difference', difference);

	return difference;
}
