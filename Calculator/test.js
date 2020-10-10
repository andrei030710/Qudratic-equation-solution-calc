// function myFunction(){
//     var a = prompt("Enter first side");
//     var b = prompt("Enter 2nd side");
//     var c = Math.sqrt(a**2+b**2)
//     document.write(c)
// }
function fAddition(){
    var x = 
    +document.getElementById("myNumber1").value;
    var y =
    +document.getElementById("myNumber2").value;
    var sum;
    sum = x + y;
    document.getElementById("result1").innerHTML = sum;
}
function fMultiplication(){
    var x = 
    +document.getElementById("myNumber1").value;
    var y =
    +document.getElementById("myNumber2").value;
    var product = x * y;
    document.getElementById("result1").innerHTML = product;
}
function fDivision(){
    var x =
    +document.getElementById("myNumber1").value;
    var y =
    +document.getElementById("myNumber2").value;
    var quotient = x / y;
    document.getElementById("result1").innerHTML = quotient;
}
function fSubtraction(){
    var x =
    +document.getElementById("myNumber1").value;
    var y = 
    +document.getElementById("myNumber2").value;
    var difference = x - y;
    document.getElementById("result1").innerHTML = difference;
}
function fQuadratic(){
    var a =
    +document.getElementById("myNumber1").value;
    var b = 
    +document.getElementById("myNumber2").value;
    var c = 
    +document.getElementById("myNumber3").value;
    var x = Math.sqrt(b**2-4*a*c)
    var y = (-b + x)/(2*a)
    var z = (-b - x)/(2*a)
    document.getElementById("sol1").innerHTML = y;
    document.getElementById("sol2").innerHTML = z;
}
function fVertex(){
    var a = 
    +document.getElementById("myNumber1").value;
    var b =
    +document.getElementById("myNumber2").value;
    var h = (-b)/(2*a)
    document.getElementById("ver").innerHTML = h;
}