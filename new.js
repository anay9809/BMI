var weight= 58;
var height=1.60;
var BMI=weight/(height*height);
console.log(BMI)
if(BMI<18.5){
    console.log("Underweight");
}else if(BMI>=18.6 && BMI<=24.9){
    console.log("Healthy");
}else if(BMI>=25 && BMI<=25.9){
    console.log("Overweight");
}else if(BMI>=30 ){
    console.log("Obese");
}else{
    console.log("Invalid");
}