$(document).ready(function () {


    $("btnSubmit").click(function () {
        let $inputText = $("#msg").val
        $inputText.keyup(); {
            if ($inputText !== "") {
                $("#btnSubmit").prop("disabled", false);//setting disabled attribute on html element to disabled
            } else {
                $("#btnSubmit").prop("disabled", true);//setting disabled=disabled attribute to false in HTML
                alert ($inputText); //alert the value of the input
                $("<div></div>").appendTo("body"); //created a div element and appended to the body of document
                $("div").append("<h2></h2>");
                $("h2").append($inputText);
            }
        }
    })





        //when user mouses over h2, assign it a new bgcolor and border radius



});