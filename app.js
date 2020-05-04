$(document).ready(function () {
    var div = document.querySelector(".container");
    var date = moment().format('MMMM Do YYYY');
    var del = document.querySelector("#delete");
    $(".jumbotron").append(`<h2>${date}</h2>`);
    var inputText = "";
    var button = document.querySelector(".saveBtn");


    $("#button").on("click", function () {
        inputText = $("#text").val();
        localStorage.setItem("Event", inputText);
        var data = localStorage.getItem("Event");
        $("#area").append(`<h3 style="text-align:center">${inputText}</h3>`);

    });

    if (localStorage != null) {
        $("#area").append(`<h3 style="text-align:center">${localStorage.getItem("Event")}</h3>`);
    }

    function removeEvent() {
        $("#delete").on("click", function () {
            localStorage.removeItem("Event");
            $("#area").html("");
        });
    };
});

