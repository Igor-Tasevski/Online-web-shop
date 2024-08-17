
// I way ov solving for complex apps and long term solution

$("document").ready(function() {
   
    
    $.getJSON("info.json", successFn);
});

function successFn(result) {
    $.each(result.Nikeinfo, function(i, item) {
        var newsDiv = $("<div class='content'>");
        newsDiv.append(item.title);
        newsDiv.append(item.content);
        $("#ShoesContent").append(newsDiv);
    });
}



/* II way of solving Suitable for simple cases where the content is fixed and does not need to be processed as separate parts.


$("document").ready(function() {
    getData();
  });
  
  function getData() {
    $.ajax({
      // the URL for the request
      url: "shoes.txt",

      // whether this is a POST or GET request
      type: "GET",
     
      // the type of data we expect back
      dataType : "text"
    })
    .done(successFn)
    .fail(errorFn)
    .always(function (data, textStatus, jqXHR ) {
        console.log("The request is complete!");
    });
  }
  
  function successFn(data, status, jqXHR) {
    console.log("Setting result");
      $("#ShoesContent").append(data);
  }
  function errorFn(xhr, status, strErr) {
    console.log("There was an error!");
  }

  */