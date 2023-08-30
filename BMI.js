var weight = prompt("Enter your weight: ")
var height = prompt ("Enter your height:")

function calculate_BMI(h,w)
{
    var bmi = w/(h*h)
    return bmi;
}

 function interprate_BMI()
{
    if (bmi<18.5)
        alert("You are Undeweight ")     
    else if (bmi>=18.5 && bmi<25)
        alert("You are Normal weight ")     
    else if (bmi>=25)
        alert( "You are Overweight ")     
    else
        alert("Please chick the numbers again ")     
}

var bmi=calculate_BMI(height,weight)
interprate_BMI(bmi)
