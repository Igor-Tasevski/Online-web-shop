

//1.2

/*

$("document").ready(function() {
    alert("Documentot se vcita")

});

*/

//1.3

/*

$("document").ready(function() {
    $("p").prepend("This is inside paragraph.")

})

*/


//1.4. I case


$("document").ready(function () {
    $("#location").on("mousemove", onMouseMove)
    $("#location").on("mouseleave", onMouseuseLeave)


});

function onMouseMove(evt) {

    $("#location").text(evt.type + " X:" + evt.pageX + " Y:" + evt.pageY)


}

function onMouseuseLeave(evt) {

    $("#location").text(evt.type)

}




$("document").ready(function () {
    $("#location2").on("mousemove", onMouseeMove)
    $("#location2").on("mouseleave", onMouseuseLeavee)


});

function onMouseeMove(evt1) {

    $("#location2").text(evt1.type + " X:" + evt1.pageX + " Y:" + evt1.pageY)


}

function onMouseuseLeavee(evt1) {

    $("#location2").text(evt1.type)

}




//1.4. II case

/*
$("document").ready(function() {
    $("#location").on("mousemove",onMouseeMove)
    $("#location2").on("mousemove",onMouseeMove)
    $("#location").on("mouseleave", onMouseuseLeavee)
    $("#location2").on("mouseleave", onMouseuseLeavee)
     

});

function onMouseeMove (evt,evt1){
    $("#location").text ( evt.type+ " X:" +evt.pageX+ " Y:"+evt.pageY)
    $("#location2").text ( evt1.type+ " X:" +evt1.pageX+ " Y:"+evt1.pageY)
}


function onMouseuseLeavee(evt,evt1){
    $("#location").text (evt.type)
    $("#location2").text (evt1.type)

}

*/

//1.5 


$("document").ready(function () {
    $("#animation").animate({ height: '300px', opacity: '0.4' }, "slow")
    $("#animation").animate({ width: '350px', opacity: '0.8' }, "slow")
    $("#animation").animate({ height: '100px', opacity: '0.4' }, "slow")
    $("#animation").animate({ width: '100px', opacity: '0.8' }, "slow")
})


1.6

$("document").ready(function () {
    $("#ex1").on("mouseover", loadHTML)
    $("#ex2").on("mouseover", loadHTMLL)
    $("#ex3").on("mouseover", loaddHTML)
    $("#ex4").on("mouseover", looadHTML)

});

function loadHTML() {
    $("#ex1").load("Sampletextcontent.txt")

}


function loadHTMLL() {
    $("#ex2").load("Secondelement.txt")

}


function loaddHTML() {
    $("#ex3").load("Thirdelement.txt")

}

function looadHTML() {
    $("#ex4").load("Fourthelement.txt")

}



/*Another Jquery Functions  */


2.1

/*I case */

/*
 $(document).ready(function(){
     
 var images = $("img")
 images.each(function(){
 images.css("border","3px solid red")

 })

});

*/
2.1

/* II case */

/*
$(document).ready(function() {

    var border = 3;

    $("img").each(function (index, element) {
        $(element).css("border", border + "px solid red")

        border = border + 2;

        index++

    })




});

*/

2.1
/*III case  */

/*
$(document).ready(function(){
    var border = 3;
    var leftmargin = 4;

    $("img").each(function(index, element){
       
       $(element).css("border",+border+ "px solid red")
       $(element).css("margin-left",+leftmargin+"4px") 
      leftmargin =leftmargin+0.5;
      border = border+2;
      index++
    })



});
*/


2.2

$(document).ready(function () {
    $("#first_1").click(function () {
        $("p").hide();
    });

});

$(document).ready(function () {
    $("#second_2").click(function () {
        $(".test").hide()

    });


});


$(document).ready(function () {
    $("#third_3").click(function () {
        $("#one").hide()

    });


});


    

2.5

/*

$(document).ready(function() {
    $(".menu_bar ul li a").css("color", "red")


});

*/
2.6

$(document).ready(function () {
    $("li:contains('%')").addClass("Discount")


});







3.1

$(document).ready(function () {

    $("#topp").append('<a href ="./home.html"> Zlat-Em </a>')
});


$(document).ready(function () {
    $("h3").css({ "color": "orange", "text-transform": "uppercase" })


});

$(document).ready(function () {
    $("#jq1").css("color", "white")
    $("#jq1").css("border", "3px solid green")
    $("#jq1").css("margin-bottom", "54px")

});


$(document).ready(function () {


    $("#example1").css("border", "3px solid red")
    $("#example1").css("margin-bottom", "54px")

});

3.2

$(document).ready(function(){

    $('.offers a').click(function(){
      window.open(this.href);
      return false;
    });
  
  });



$(document).ready(function () {
    $("#offers-wrap p").wrap("<div style='color:blue'/>")
    $("#offers-wrap p").wrap("<div style='border:2px solid brown'/>")
});

$(document).ready(function () {


    $("#offers-wrap p").css("padding", "12px")
    $("#offers-wrap p").css("margin", "2px")

});








3.3

$(document).ready(function() {
    $("#FR").html('<a href ="./Customers_comments.html"> Frank Jones </a>');
    $("#PY").html('<a href ="./Customers_comments.html"> Patrick Yoder </a>');
    $("#RF").html('<a href ="./Customers_comments.html"> Robert Farrell </a>');
    $("#BY").html('<a href ="./Customers_comments.html"> Ben Jaworowski </a>');

});
/*
 $(document).ready(function(){
    $("#FR").css("text-decoration","underline");
    $("#PY").css("text-decoration","underline");
    $("#RF").css("text-decoration","underline");

 }); 

 */
/*
$(document).ready(function() {
    $("#FR").css("border", "2px solid red");
    $("#PY").css("border", "2px solid green");
    $("#RF").css("border", "2px solid yellow");

});
*/

// similar with 4.3 
/*
$(document).ready(function() {
    $("#FR a").hover(function () {
        $("#FR a").attr({

            "title": "Frank Jones Comment"
        });
    });
});
*/


3.4

$(document).ready(function() {
    $(".info-links h5").css("text-decoration", "underline")
     /*$(".info-links h5").css("background-color", "red")*/
});





4.1 //css styles switched off for navigation menu// same effect via Jquery bellow

//I -way of solving

/*
$(document).ready(function(){

    $(" .menu_bar a").hover(function(){
        $(this).css({"background-color": "yellow","border":"1px solid green","color":"red"});
        }, function(){
        $(this).css({"background-color": "transparent","color":"purple","border":"none"});
      })
   
    });
*/

//II way of solving

$(document).ready(function() {
    $('.menu_bar a').hover(function () {
        $(this).addClass('desc');
    }, function () {
        $(this).removeClass('desc');
    })
})




4.2

$(document).ready(function() {
    $('#More_1').hover(function () {
        $("#Change1").addClass('as');
    }, function () {
        $("#Change1").removeClass('as');
    })
})



$(document).ready(function() {
    $('#More_2').hover(function () {
        $("#Change2").addClass('as');
    }, function () {
        $("#Change2").removeClass('as');
    })
})

$(document).ready(function() {
    $('#More_3').hover(function () {
        $("#Change3").addClass('as');
    }, function () {
        $("#Change3").removeClass('as');
    })
})



$(document).ready(function() {
    $('#More_4').hover(function () {
        $("#Change4").addClass('as');
    }, function () {
        $("#Change4").removeClass('as');
    })
})


4.3

$(document).ready(function() {
    $("#FR a").click(function() {
        $("#FR a").attr({"title": "Frank Jones, our best customer"})
    $("#FR a").css("color","yellow")


    })

});  




