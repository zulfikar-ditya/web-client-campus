export const getDiffInDays = (date1: Date, date2: Date): number => {
	const diffInTime = date2.getTime() - date1.getTime();
	const diffInDays = diffInTime / (1000 * 3600 * 24);
	return diffInDays;
};
