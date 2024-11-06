document.getElementById('calorieForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const activityLevel = parseFloat(document.getElementById('activityLevel').value);
    const resultElement = document.getElementById('result');
    const suggestionsElement = document.getElementById('dietSuggestions');
    const mealPlanElement = document.getElementById('mealPlan');
    const ctx = document.getElementById('calorieChart').getContext('2d');

    if (isNaN(weight) || weight <= 0) {
        resultElement.textContent = 'Please enter a valid weight.';
        suggestionsElement.style.display = 'none';
        mealPlanElement.style.display = 'none';
        return;
    }

    // Calculate Total Daily Energy Expenditure (TDEE)
    const bmr = 10 * weight + 6.25 * 170 - 5 * 30 + 5; // Approximation for male, replace with actual BMR formula if needed.
    const tdee = bmr * activityLevel;

    // Show the result
    resultElement.textContent = `Your Total Daily Energy Expenditure (TDEE) is approximately ${Math.round(tdee)} calories.`;

    // Show Diet Suggestions
    suggestionsElement.style.display = 'block';
    suggestionsElement.innerHTML = `
        <p>To maintain your weight: ${Math.round(tdee)} calories/day</p>
        <p>To lose weight (500-calorie deficit): ${Math.round(tdee - 500)} calories/day</p>
        <p>To gain weight (500-calorie surplus): ${Math.round(tdee + 500)} calories/day</p>
    `;

    // Display the meal plan breakdown
    mealPlanElement.style.display = 'block';
    const mealPlan = getMealPlan(tdee);
    mealPlanElement.innerHTML = `
        <p><strong>Breakfast:</strong> ${Math.round(mealPlan.breakfast)} calories</p>
        <p><strong>Lunch:</strong> ${Math.round(mealPlan.lunch)} calories</p>
        <p><strong>Dinner:</strong> ${Math.round(mealPlan.dinner)} calories</p>
        <p><strong>Snacks:</strong> ${Math.round(mealPlan.snacks)} calories</p>
    `;

    // Display the chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Maintain', 'Lose', 'Gain'],
            datasets: [{
                label: 'Calories per Day',
                data: [tdee, tdee - 500, tdee + 500],
                backgroundColor: ['#28a745', '#dc3545', '#ffc107'],
                borderColor: ['#218838', '#c82333', '#e0a800'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                tooltip: {
                    enabled: true,
                },
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});

function getMealPlan(tdee) {
    // Breakdown the TDEE into meals
    const mealCalories = tdee / 3; // Basic equal distribution for Breakfast, Lunch, and Dinner
    const snackCalories = tdee * 0.2; // Snacks get 20% of the total calories

    return {
        breakfast: mealCalories * 0.3, // 30% for breakfast
        lunch: mealCalories * 0.35,     // 35% for lunch
        dinner: mealCalories * 0.35,    // 35% for dinner
        snacks: snackCalories           // 20% for snacks
    };
}
