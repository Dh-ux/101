/**
 * Author:    Lexin Xiong
 * Created:   11.20.2021
 *
 * License: Public Domain.
 **/



 var myUrl = "https://xkcd.com/info.0.json";

 $("#activate").click(runAPI);

 function printOutput(text){
   $("#output").html(text);
 };

 function runAPI() {
   console.log("click");
   // Using the core $.ajax() method
   $.ajax({
     // API endpoint
     url: myUrl,
     // POST or GET request
     type: "GET",
     // data type we expect back
     dataType : "json",
 })
 // If the request succeeds
 // data is passed back
 .done(function(data) {
     console.log("Success:", data);
     var imgUrl = data.img;
     var imgTag = "<img src=" + imgUrl + ">";
     console.log(imgUrl, imgTag);
     $("#output").html(imgTag)
 })
 // If the request fails
 .fail(function(request,error) {
     console.log(request, error);
 });
 }
