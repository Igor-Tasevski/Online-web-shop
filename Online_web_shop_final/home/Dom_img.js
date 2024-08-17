//4.2.2

//Setiranje na alt tekstot da bide "Slikata ne moze da se pokaze" 
//

/*
var x= document.getElementsByClassName("test")

for (var i = 0; i < x.length; i++) {

    const element = x[i];

    element.onclick =function(){

        console.log(element.alt = "Slikata ne moze da se pokaze")

    }

}
*/


//5.1


//I- Nacin so innerHTML da ja dobijam sodrzinata

/*
var x =document.getElementsByTagName("p");


for(i=0;i<x.length;i++) {
    console.log(x[i].innerHTML)

}

*/


// || nacin so innner text da ja dobijam sodrzinata


var x = document.getElementsByTagName("p");


for (i = 0; i < x.length; i++) {
    console.log(x[i].innerText)

}




5.2

/*
var x = document.getElementsByClassName("test")

for (var i = 0; i < x.length; i++) {

    const element = x[i];

    element.onclick =function(){

        console.log(element.style.width = "100px" )
        console.log(element.style.height ="100px")
        console.log(element.alt = "Image not found or resized")

    }


}



*/

6.4

let intervalid


document.getElementById("start").onclick = changeContent;


function changeContent() {


    var element = document.getElementById("PageHeader")

    intervalid = setInterval(function () { element.innerHTML += "*" }, 1000);
}





document.getElementById("end").onclick = returnBack;



function returnBack() {


    var x = document.getElementById("PageHeader")
    clearInterval(intervalid)
    element.innerHTML = ""

}


9.1



// Changing classes  with querySelectorAll 

/*
const nodeList = document.querySelectorAll("p")

for (let i = 0; i < nodeList.length; i++) {
    const element = nodeList[i];

    element.onclick = function () {

        (nodeList[i].classList.toggle('site-paragraph'))
        
    }
}

*/


const paragraphs = document.querySelectorAll('p');


paragraphs.forEach(paragraph => {

    paragraph.onclick = function () {

        paragraph.classList.toggle('site-paragraph')
    }

});






//Changing classes with getElementbyID
/*
document.getElementById("example1").onclick = swapClass


function swapClass() {


    if (document.getElementById("example1").className == "site-paragraph") {


        (document.getElementById("example1").className = "")
    } else {
        (document.getElementById("example1").className = "site-paragraph")
        return true;

    }


}




document.getElementById("example1").onclick = swappClass


function swappClass() {


    if (document.getElementById("example1").className == "site-paragraph") {


        (document.getElementById("example1").className = "")
    } else {
        (document.getElementById("example1").className = "site-paragraph")
        return true;

    }


}


document.getElementById("example2").onclick = swapClass_1


function swapClass_1() {


    if (document.getElementById("example2").className == "site-paragraph") {


        (document.getElementById("example2").className = "")
    } else {
        (document.getElementById("example2").className = "site-paragraph")
        return true;

    }


}



document.getElementById("example3").onclick = swapClass_2


function swapClass_2() {


    if (document.getElementById("example3").className == "site-paragraph") {


        (document.getElementById("example3").className = "")
    } else {
        (document.getElementById("example3").className = "site-paragraph")
        return true;

    }


}



document.getElementById("example4").onclick = swapClass_3


function swapClass_3() {


    if (document.getElementById("example4").className == "important-content") {


        (document.getElementById("example4").className = "")
    } else {
        (document.getElementById("example4").className = "important-content")
        return true;

    }


}


document.getElementById("example5").onclick = swapClass_4


function swapClass_4() {


    if (document.getElementById("example5").className == "site-paragraph") {


        (document.getElementById("example5").className = "")
    } else {
        (document.getElementById("example5").className = "site-paragraph")
        return true;

    }


}


document.getElementById("example6").onclick = swapClass_5


function swapClass_5() {


    if (document.getElementById("example6").className == "site-paragraph") {


        (document.getElementById("example6").className = "")
    } else {
        (document.getElementById("example6").className = "site-paragraph")
        return true;

    }


}


document.getElementById("example7").onclick = swapClass_6


function swapClass_6() {


    if (document.getElementById("example7").className == "important-content") {


        (document.getElementById("example7").className = "")
    } else {
        (document.getElementById("example7").className = "important-content")
        return true;

    }


}

*/

12.1
/*
setItem(): Adds key and value to localStorage
getItem(): Retrieves/gets items from localStorage
removeItem(): Removes an item from localStorage
clear(): Clears all data from localStorage
key(): Passes a number to retrieve the key of a localStorage
*/


// Check browser support//Local storage for video
//The localStorage object stores the data with no expiration date.
/*
if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("lastname", "Tasevski");
    // Retrieve
    document.getElementById("result").innerHTML = localStorage.getItem("lastname");
  } else {
    document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
  }

*/

const timer = document.getElementById("timer");
const progress = document.getElementById("progress");
var vid = document.getElementById("myVideo");

var result

document.getElementById("play").onclick = playResume

function playResume() {
    var PausedTime = localStorage.getItem("videoStatus");
    vid.currentTime = PausedTime;


    console.log(x)

    vid.play()
    progressLoop()
}

document.getElementById("pause").onclick = getCurTime

function getCurTime() {

    result = vid.currentTime;


    localStorage.setItem("videoStatus", vid.currentTime);

    vid.pause()

}


document.getElementById("cleartime").onclick = clear

function clear() {

    localStorage.clear()


}


function progressLoop() {
    setInterval(function () {
        progress.value = Math.round((vid.currentTime / vid.duration) * 100);
        timer.innerHTML = Math.round(vid.currentTime) + " seconds";
    });
}


/*
  var vid = document.getElementById("myVideo");

  //# for AVC1 codecs like avc1.42E01E
  if (vid.canPlayType('video/mp4; codecs="avc1"')){
   alert("This browser supports MP4 video formats ")

  }else {
    alert("This browser does not supports MP4 video formats ")
  }

  */


/*
if (Modernizr.myvideo) {
 
  // If your browser supports video 
  // then this code will execute
  alert("HTML5 Video is supported in your browser");
}
else {

  // If our browser doesn't supports 
  // video then this code will execute
  alert("HTML5 Video is not supported in your browser");
}
*/