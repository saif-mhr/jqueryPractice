$(document).ready(function () {
    $("button").mouseup(function () {
        $("p").css("color", "red");
        // $("p").hide();

    });
    //$("#pf").hover(function () {
    //    alert("hshf");
    //});

    $("input").focus(function () {
        $(this).css("background-color", "gray");
    });
    $("input").blur(function () {
        $(this).css("background-color", "red");
    });
});