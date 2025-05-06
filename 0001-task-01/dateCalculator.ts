/**
 * Calculates the difference in days between two dates
 * @param date1 - First date
 * @param date2 - Second date
 * @returns The difference in days
 */
export function getDiffInDays(date1: Date, date2: Date): number {
	const diffTime = Math.abs(date2.getTime() - date1.getTime());
	return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
