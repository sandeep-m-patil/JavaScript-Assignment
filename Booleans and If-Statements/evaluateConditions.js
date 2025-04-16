const user1 = {
    age: 20,
    hasLicense: true,
    temperature: 25,
    humidity: 50,
    role: "user",
    isActive: false,
    isLoggedIn: false,
    isPremiumUser: true,
    userType: "student",
    score: 92,
    completedAssignments: 6,
    onLeave: false
  };

  function evaluateConditions(obj) {
    // Condition 1: Eligible to drive
    if (obj.age > 18 && obj.hasLicense) {
      return "Eligible to drive";
    }
  
    // Condition 2: High discomfort
    if (obj.temperature > 30 || obj.humidity > 70) {
      return "Warning: High discomfort level";
    }
  
    // Condition 3: Access granted for admin/editor
    if ((obj.role === "admin" || obj.role === "editor") && obj.isActive) {
      return "Access granted";
    }
  
    // Condition 4: Not logged in but trying to access premium
    if (!obj.isLoggedIn && obj.isPremiumUser) {
      return "Please log in to access premium features";
    }
  
    // Condition 5: Student with high score
    if (obj.userType === "student" && obj.score >= 90 && obj.completedAssignments >= 5) {
      return "Excellent student performance";
    }
  
    // Condition 6: Employee on leave or not active
    if ((obj.role === "employee" && obj.onLeave) || !obj.isActive) {
      return "Access temporarily disabled";
    }
  
    // Default
    return "No specific condition met";
  }
  
  
  console.log(evaluateConditions(user1)); // "Eligible to drive"
  