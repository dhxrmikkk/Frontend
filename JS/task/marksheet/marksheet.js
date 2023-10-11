let marks = Number(prompt("Enter Marks"))

if(marks > 100){
    console.log("Invalid Input")
}
else if(marks >= 80 && marks <= 99){
    console.log("Distinction class")
}
else if(marks >= 60 && marks < 80){
    console.log("First class")
}
else if(marks >= 33 && marks < 60){
    console.log("Pass Class")
}
else{
    console.log("Fail")
}