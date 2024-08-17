
//6.2 On.click for header element, image and ul element

function all() {

    var x = document.getElementsByClassName("test")
    var heading = document.getElementById("PageHeader")
    var y = document.getElementsByClassName("Unordered")

    heading.onclick = function() {
        alert("You clicked on the heading")

    }

    for (var i = 0; i < x.length; i++) {
        const element = x[i];


        element.onclick = function() {
            alert("You clicked on the image")

        }
    }
    for (var i = 0; i < y.length; i++) {
        const myelement = y[i];


        myelement.onclick = function() {
            alert("You clicked on element from unordered list")
        }

    }


}


window.onload = function() {
    all()
}



