# TypeScript Math Functions Collection

This project contains a collection of TypeScript functions for various mathematical calculations. Each function is separated into its own file with descriptive names for better organization and maintainability.

## Project Structure

- `index.ts` - Main entry point that imports and demonstrates all functions
- `rectangleCalculator.ts` - Rectangle area calculation
- `circleCalculator.ts` - Circle properties calculations
- `triangleCalculator.ts` - Triangle angle calculation
- `dateCalculator.ts` - Date difference calculator
- `stringFormatter.ts` - Name initials generator

## File Descriptions

### rectangleCalculator.ts

Contains `calculateRectangleArea()` function that calculates the area of a rectangle given its length and width.

### circleCalculator.ts

Contains `calculateCircle()` function that calculates the area and circumference of a circle given its radius.

### triangleCalculator.ts

Contains `findAngleOfTriangle()` function that calculates the third angle of a triangle when given the other two angles (based on the fact that angles in a triangle sum to 180 degrees).

### dateCalculator.ts

Contains `getDiffInDays()` function that calculates the difference in days between two Date objects.

### stringFormatter.ts

Contains `getInitials()` function that extracts the first letter from each word in a name to create initials.

## Running the Project

To compile and run the project, execute the following commands:

```bash
# Compile all TypeScript files
tsc

# Run the compiled JavaScript
node 0001-task-01/index.js
```

Alternatively, you can compile and run individual files:

```bash
# Example for compiling and running a specific file
tsc 0001-task-01/rectangleCalculator.ts
node 0001-task-01/rectangleCalculator.js
```

## Previous Structure

The project was previously organized with generic file names:

- `task1.ts` - Rectangle calculations
- `task2.ts` - Circle calculations
- `task3.ts` - Triangle calculations
- `task4.ts` - Date calculations
- `task5.ts` - String formatting

The code has been refactored to use more descriptive file names for improved code readability and maintainability.
