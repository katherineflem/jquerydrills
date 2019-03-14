$(document).ready(function () {

    //made the following happen when button is clicked

    $("#btnSubmit").click(function () {
        $("btnSubmit").prop("disabled", true);
            if ($("inputText") === "") {
                $("btnSubmit").prop("disabled", true)
            } else {
                 alert($("#inputText").val());
                 ("h2").append($("#inputText").val());

        }
        $("<div></div>").appendTo("body");
        $("<h2></h2>").appendTo("div");


    });


});

