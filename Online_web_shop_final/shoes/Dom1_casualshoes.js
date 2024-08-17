var x = document.getElementsByClassName("error")

for (var i = 0; i < x.length; i++) {

    const element = x[i];

    element.onclick =function(){

        element.style.color = "Red"
        element.style.fontWeight = "Bold"
        

    }

}

9.4


document.getElementById("progressbar").onclick = startDownload

function startDownload(){


    var element = document.getElementById("myBar");    
    var width = 0; 
    var identity = setInterval(animate, 50); 
      
    function animate() { 
      if (width >= 100) { 
        clearInterval(identity); 
      } else { 
        width++;  
        element.style.width = width + '%';  
        element.innerHTML = width * 1  + '%'; 
      } 
    } 
  } 
    