



11.1
$("#jq").click(function() {
    $("#jq").animate({
        "opacity": "hide"
    }, 2000);
})


11.2

/*

$("#jq1").click(function() {
    $("#jq1").toggleClass("blue");
});

*/

11.3


$("ol li:last-child").click(function() {
    $("ol li:last-child").css("color", "yellow");
});


11.4
/
$("a").hover(function() {
    $("a").attr({

        "title": "Visited"
    });
});





