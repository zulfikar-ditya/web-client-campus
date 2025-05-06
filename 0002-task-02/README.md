# Utility Functions Collection

This project contains a collection of utility functions for various common programming tasks.

## File Structure

The project is organized into function-specific files:

- **temperatureConverter.ts**: Contains functions for temperature conversions
- **distanceConverter.ts**: Contains functions for distance conversions
- **numberUtils.ts**: Contains utility functions for working with numbers
- **stringManipulator.ts**: Contains utility functions for string manipulation
- **palindromeChecker.ts**: Contains functions to check for palindromes
- **index.ts**: Demo file that showcases the usage of all utility functions

## Functions

### Temperature Conversion

- `fahrenheitToCelsius(fahrenheit: number): number` - Converts temperature from Fahrenheit to Celsius

### Distance Conversion

- `centiToKm(centimeters: number): number` - Converts distance from centimeters to kilometers

### Number Utilities

- `isOdd(num: number): boolean` - Determines if a number is odd

### String Manipulation

- `removeFirstOccurrence(str: string, substr: string): string` - Removes the first occurrence of a substring from a string

### Text Analysis

- `isPalindrome(str: string): boolean` - Checks if a string is a palindrome (reads the same backward as forward)

## How to Run

1. Make sure you have Node.js and TypeScript installed
2. Compile the TypeScript files:
   ```
   tsc
   ```
3. Run the demo file:
   ```
   node index.js
   ```

## Examples

```typescript
// Temperature conversion
fahrenheitToCelsius(100); // Result: 37.77778

// Distance conversion
centiToKm(100000); // Result: 1 km

// Number check
isOdd(100); // Result: false
isOdd(101); // Result: true

// String manipulation
removeFirstOccurrence("Hello World Hello", "Hello"); // Result: " World Hello"
removeFirstOccurrence("Test Test", "Test"); // Result: " Test"

// Palindrome check
isPalindrome("abcba"); // Result: true
isPalindrome("12321"); // Result: true
```

## Development

To add more utility functions, create a new file with a descriptive name and implement your function. Then import and use it in the index.ts file for demonstration.
