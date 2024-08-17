//4.2.3
//Find all span elements with class error and change color to blue




/* I nacin 
var x = document.querySelectorAll(".error")

       for (i=0;i<x.length;i++){

        x[i].style.color = "Blue"
    }
*/

// II nacin
/*
var x = document.getElementsByClassName("error");

for (let i = 0; i < x.length; i++) {
  x[i].style.color = "Blue";
}

*/

//III nacin 


var x = document.getElementsByClassName("error")

for (var i = 0; i < x.length; i++) {

    const element = x[i];

    element.onclick =function(){

        element.style.color = "red"
        element.style.fontWeight = "bold"
        

    }


}




7.1


var m = document.getElementById("Check").onclick = increaseValue
var a = 0

function increaseValue(){
  
    
    alert("Vrednosta sega e :" +a)
    a++

}








