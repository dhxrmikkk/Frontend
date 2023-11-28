function calculate(){
    let marks1 = parseInt(document.getElementById("marks1").value)
    let marks2 = parseInt(document.getElementById("marks2").value)
    let marks3 = parseInt(document.getElementById("marks3").value)
    let marks4 = parseInt(document.getElementById("marks4").value)
    if (marks1 == "" || marks2 == "" || marks3 == "" || marks4 == ""){
        document.getElementById("total").innerHTML = "Value Can't be empty";
    }
    else{
        let sum = marks1 + marks2 + marks3 + marks4
        let avg = sum / 4
        document.getElementById("total").innerHTML = "Total is : " + sum;
        document.getElementById("avg").innerHTML = "Avarage is : " + avg;
    }
}
