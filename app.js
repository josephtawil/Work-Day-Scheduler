$(document).ready(function () {
    var div = document.querySelector(".container");
    var date = moment().format('MMMM Do YYYY, h:mm:ss a');
    $(div).prepend(date);
    var button = document.querySelector("#button");
    var text = document.querySelector("#row");
    var toggleBackground = text.getAttribute("class");
    var inputText = "";
    var localStorage = window.localStorage;
    $(button).on("click", function (e) {
        e.preventDefault();
        inputText = $("#text").val();
        localStorage.setItem('Event', inputText);
        if (toggleBackground === "col-10 alert alert-secondary") {
            text.setAttribute("class", "col-10 alert alert-success");
        }
    });
});
