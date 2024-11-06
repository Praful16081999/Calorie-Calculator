package caloriecalculator;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/calories")
public class CalorieController {

    @PostMapping("/calculate")
    public double calculateCalories(@RequestBody CalorieRequest request) {
        // Simple calculation: BMR * activity level (simplified)
        return request.getWeight() * request.getActivityLevel();
    }
}

class CalorieRequest {
    private double weight;
    private double activityLevel;

    // Getters and Setters
    public double getWeight() {
        return weight;
    }

    public void setWeight(double weight) {
        this.weight = weight;
    }

    public double getActivityLevel() {
        return activityLevel;
    }

    public void setActivityLevel(double activityLevel) {
        this.activityLevel = activityLevel;
    }
}
