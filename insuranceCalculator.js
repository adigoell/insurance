function calculatePremium() {
    // Get input values
    let age = document.getElementById("age").value;
    let gender = document.getElementById("gender").value;
    let coverage = document.getElementById("coverage").value;

    // Base premium calculation
    let basePremium = coverage * 0.05;

    // Adjust premium based on age
    if (age < 25) {
        basePremium *= 1.5;
    } else if (age > 60) {
        basePremium *= 2;
    }

    // Adjust premium based on gender
    if (gender === "male") {
        basePremium *= 1.1;
    } else if (gender === "female") {
        basePremium *= 1.05;
    }

    // Display the calculated premium
    document.getElementById("premiumAmount").innerText = `₹${basePremium.toFixed(2)}`;
}
