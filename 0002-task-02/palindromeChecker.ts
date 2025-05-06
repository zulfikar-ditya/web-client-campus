/**
 * Checks if a string is a palindrome (reads the same backward as forward)
 * @param str String to check
 * @returns True if the string is a palindrome, false otherwise
 */
export function isPalindrome(str: string): boolean {
	const reversed = str.split("").reverse().join("");
	return str === reversed;
}
