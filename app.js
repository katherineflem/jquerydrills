$(document).ready(function () {

    //made the following happen when button is clicked

    $("#btnSubmit").click(function () {
        $("btnSubmit").prop("disabled", true);
            if ($("inputText") === "") {
                $("btnSubmit").prop("disabled", true)
            } else {
                 alert($("#inputText").val());
                 $("<div></div>").appendTo("body");
                 $("<h2></h2>").appendTo("div");
                 ("h2").append($("#inputText").val());

        }
     $("<ul></ul>").appendTo("body");
     let text = $("#inputText").val()
     $("ul").append("<li></li")

$("h2").mouseover(function(){
$("h2").css({
    "background-color": "purple",
    "border-radius": "5px"

})
})
    });


});

