
# Calorie Calculator

## Overview

The **Calorie Calculator** is a simple web-based tool that helps users determine the number of calories they need to maintain their weight based on their weight and activity level. Additionally, it provides meal suggestions and a visual representation of the daily calorie distribution using a dynamic chart.

---

## Features

- **Calorie Calculation**: Based on the user's weight and selected activity level, the tool calculates the recommended daily calorie intake.
- **Activity Levels**: Users can select from five different activity levels:
  - Sedentary
  - Lightly Active
  - Moderately Active
  - Very Active
  - Super Active
- **Meal Suggestions**: The tool offers basic suggestions for meal planning based on the calculated calorie intake.
- **Chart Visualization**: A dynamic chart (using Chart.js) is generated to visually represent the calorie distribution for the day.

---

## How It Works

1. **User Input**: 
   - The user enters their weight (in kilograms) and selects their activity level from the dropdown menu.
2. **Calorie Calculation**:
   - Once the form is submitted, the tool calculates the daily calorie intake using a basic multiplier based on the selected activity level.
3. **Results Display**:
   - The calculated calorie result is displayed on the page.
   - Suggested meals based on the calorie intake are shown below the result.
4. **Chart Visualization**:
   - A pie chart is dynamically generated to show the breakdown of the daily calorie intake in a visual format.

---

## File Structure

```
/calorie-calculator
│
├── index.html        # The main HTML file
├── styles.css        # Styles for the webpage
├── script.js         # JavaScript logic to handle calculations and chart
├── README.md         # Project overview and documentation
└── assets/            # Folder for any image assets (if applicable)
```

---

## Usage

1. **Weight Input**: Enter your weight in kilograms.
2. **Activity Level**: Select the appropriate activity level from the dropdown.
3. **Calculate**: Press the "Calculate" button to get the results:
   - The daily calorie requirement will be displayed.
   - Meal suggestions and a pie chart will be shown to help you visualize your calorie intake for the day.

---

## Example

### Input:
- Weight: 70 kg
- Activity Level: Moderately Active

### Output:
- Calculated Calorie Requirement: 2,200 kcal
- Meal Suggestions: 
  - Breakfast: 500 kcal
  - Lunch: 700 kcal
  - Dinner: 800 kcal
  - Snacks: 200 kcal
- Pie Chart: A breakdown of calories across different meals.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Contact

For any questions or feedback, please reach out via [email](pathakpraful007@gmail.com).

---

Enjoy using the **Calorie Calculator** and take control of your health today!
