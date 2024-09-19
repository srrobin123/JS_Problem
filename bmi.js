let weight = 60;
let height = 5.7;
  
let bmi = weight / (height * height);

if (bmi < 18.5) {
    console.log("Your BMI is " + bmi.toFixed(2) + ". You are underweight.");
} 
else if (bmi >= 18.5 && bmi <= 24.9) {
    console.log("Your BMI is " + bmi.toFixed(2) + ". You are normal.");
} 
else if (bmi >= 25 && bmi <= 29.9) {
    console.log("Your BMI is " + bmi.toFixed(2) + ". You are overweight.");
} 
else {
    console.log("Your BMI is " + bmi.toFixed(2) + ". You are obese.");
}