/**
 * Calculates the third angle of a triangle given two angles
 * @param angle1 - First angle in degrees
 * @param angle2 - Second angle in degrees
 * @returns The third angle in degrees
 */
export function findAngleOfTriangle(angle1: number, angle2: number): number {
	return 180 - angle1 - angle2;
}
