/**
 * Checks if a string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backward as forward.
 *
 * @param str - The string to check
 * @returns true if the string is a palindrome, false otherwise
 */
export const isPalindrome = (str: string): boolean => {
	const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
	const reversed = cleanStr.split("").reverse().join("");

	return cleanStr === reversed;
};
