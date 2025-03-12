# TypeScript Math Functions Collection

This project contains a collection of TypeScript functions for various mathematical calculations. Each function is separated into its own file for better organization and maintainability.

## Project Structure

- `index.ts` - Main entry point that imports and demonstrates all functions
- `task1.ts` - Rectangle area calculation
- `task2.ts` - Circle properties calculations
- `task3.ts` - Triangle angle calculation
- `task4.ts` - Date difference calculator
- `task5.ts` - Name initials generator

## File Descriptions

### task1.ts

Contains `calculateRectangleArea()` function that calculates the area of a rectangle given its width and height.

### task2.ts

Contains `calculateCircle()` function that calculates the area, diameter, and circumference of a circle given its radius. Also defines the `calculateCircleResponse` type used for the return value.

### task3.ts

Contains `findAngleOfTriangle()` function that calculates the third angle of a triangle when given the other two angles (based on the fact that angles in a triangle sum to 180 degrees).

### task4.ts

Contains `getDiffInDays()` function that calculates the difference in days between two Date objects.

### task5.ts

Contains `getInitials()` function that extracts the first letter from each word in a name to create initials.

## Running the Project

To compile and run the project, execute the following commands:

```bash
# Compile all TypeScript files
tsc

# Run the compiled JavaScript
node 0001-task-01/index.js
```

Alternatively, you can compile and run individual task files:

```bash
# Example for compiling and running a specific file
tsc 0001-task-01/task1.ts
node 0001-task-01/task1.js
```

## Original single-file version

The original version of this code was in a single file. To run that version:

```bash
tsc 0001-task-01/app.ts
node 0001-task-01/app.js
```
