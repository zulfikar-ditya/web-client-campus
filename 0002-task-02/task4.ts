/**
 * Removes the first occurrence of a search string from the target string.
 * @param targetString The string to search within
 * @param searchString The substring to remove
 * @returns A new string with the first occurrence of searchString removed
 */
export const removeFirstOccurrence = (
	targetString: string,
	searchString: string,
): string => {
	if (!targetString || !searchString) {
		return targetString;
	}

	const index = targetString.indexOf(searchString);

	if (index === -1) {
		return targetString;
	}

	return (
		targetString.substring(0, index) +
		targetString.substring(index + searchString.length)
	);
};
