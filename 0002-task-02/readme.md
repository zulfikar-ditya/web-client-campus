# TypeScript Utility Functions

This project contains a collection of utility functions implemented in TypeScript.

## File Structure

- **index.ts** - Main file that imports and demonstrates all utility functions
- **task1.ts** - Contains the Fahrenheit to Celsius conversion function
- **task2.ts** - Contains the Centimeters to Kilometers conversion function
- **task3.ts** - Contains the function to check if a number is odd
- **task4.ts** - Contains the function to remove the first occurrence of a substring
- **task5.ts** - Contains the function to check if a string is a palindrome

## Function Descriptions

### Task 1: Fahrenheit to Celsius

File: `task1.ts`

```typescript
fahrenheitToCelsius(fahrenheit: number): number
```

Converts a temperature from Fahrenheit to Celsius using the formula: (fahrenheit - 32) \* 5/9.

### Task 2: Centimeters to Kilometers

File: `task2.ts`

```typescript
centiToKm(centimeters: number): number
```

Converts a distance from centimeters to kilometers by dividing the centimeters by 100,000.

### Task 3: Check if a Number is Odd

File: `task3.ts`

```typescript
isOdd(n: number): boolean
```

Determines if a given number is odd by checking if the remainder when divided by 2 is not 0.

### Task 4: Remove First Occurrence

File: `task4.ts`

```typescript
removeFirstOccurrence(targetString: string, searchString: string): string
```

Removes the first occurrence of a specified substring from a given string. Returns the original string if the substring is not found.

### Task 5: Check if a String is a Palindrome

File: `task5.ts`

```typescript
isPalindrome(str: string): boolean
```

Checks if a given string is a palindrome by comparing it with its reverse. Non-alphanumeric characters are ignored and case is not considered.

## Running the Project

To run this project:

1. Make sure you have Node.js and TypeScript installed
2. Run `npm install` to install dependencies
3. Run `npx ts-node index.ts` to execute the examples
