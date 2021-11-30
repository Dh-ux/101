
var myUrl = "http://numbersapi.com/11/29/date";

$("#activate").click(callAjax);

function callAjax() {
  console.log("click");
  $.ajax({
     url: myUrl
     type: "GET",
  })
  .done(function(data) {
     console.log("Success:", data);
     $("#output").html(JSON.stringify(data));
  })

  .fail(function(request,error) {
     console.log(request, error);
     $("#output").html("Error")
  })

}