/**
 * Gets the initials from a name
 * @param name - Full name
 * @returns The initials of the name
 */
export function getInitials(name: string): string {
	return name
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase())
		.join("");
}
