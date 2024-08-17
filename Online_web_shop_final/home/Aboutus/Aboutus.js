9.2

//To add class
document.getElementById("changeBackground").onclick = addClass
const table = document.getElementById("changeBackground")
const rows = table.rows;
let isOddEvenAdded = false

function addClass() {
    if (!isOddEvenAdded) {
        for (let i = 0; i < rows.length; i++) {
            if (i % 2 == 0) {
                rows[i].classList.add("odd");
            } else {
                rows[i].classList.add("even");
            }
        }
        isOddEvenAdded = true;
    } else {
        for (let i = 0; i < rows.length; i++) {
            rows[i].classList.remove("odd", "even");
        }
        isOddEvenAdded = false;
    }
}






/*Changing background only without onclick


const table = document.getElementById("changeBackground");
const rows = table.rows;
for (let i = 0; i < rows.length; i++) {
if (i % 2 === 0) {
rows[i].style.backgroundColor = "lightgray";
} else {
rows[i].style.backgroundColor = "white";
}
}

*/

9.3





document.getElementById("addcolor").onclick = addNewColor


function addNewColor() {


    var myelement = document.getElementById("change")

    myelement.style.backgroundColor = "orange"

}



document.getElementById("increase").onclick = increaseBoth


function increaseBoth() {


    var myelement = document.getElementById("change")

    myelement.style.width = "110px"
    myelement.style.height = "110px"
}




document.getElementById("decrease").onclick = decreaseWidth


function decreaseWidth() {


    var myelement = document.getElementById("change")

    myelement.style.width = "100px"

}