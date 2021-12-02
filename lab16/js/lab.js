/**
 * Author:    Tatum Going
 * Created:   11.20.2021
 *
 * License: Public Domain.
 **/


var myUrl= "https://xkcd.com/200/info.0.json";
 // Using the core $.ajax() method
function callAjax(){
  console.log("running");

   $.ajax({
       // The URL for the request (from the api docs)
       url: myUrl,
       type: "GET",
       dataType: "json",
  })


  .done(function(data) {
    console.log("Success:", data);
    var comicObj= data;
    $("#output").html(comicObj.title);
    var imgTag = "<p> </p> <img src=" + comicObj.img + ">";
    $("#output").append(imgTag);
  })

  .fail(function(request, error) {
    console.log(request, error);
  })

}

callAjax();
