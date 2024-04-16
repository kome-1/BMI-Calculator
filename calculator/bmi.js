const output = document.querySelector("#result");
const comment = document.querySelector("#comment");
const calculate = document.querySelector("#calculate");

calculate.addEventListener("click", () => {
    const height = document.querySelector("#height").value;
    const weight = document.querySelector("#weight").value;

    const heightInMeters = parseFloat(height) / 1000;
    const weightInKg = parseFloat(weight);

    const bmi =( weightInKg / heightInMeters ** 2);  

   output.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
     result.textContent = bmi;
    

    if (bmi < 18.5) {
        comment.textContent = " Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        comment.textContent = " Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        comment.textContent = " Overweight";
    } else {
        comment.textContent = " Obese";
    }
});