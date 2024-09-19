let regularFare = 800;

if (child < 10) {
    console.log("Free")
} 

else if (student == regularFare * 0.5) {
    // fare = regularFare * 0.5;  // 50% discount for students
    console.log("50% discount for students")
} 

else if (seniorCitizen >= 60 && regularFare * 0.85 ) {
     // 15% discount for senior citizens
    console.log("15% discount for senior citizens")
} 

else {
   
    console.log("Regular fare for everyone else")
}