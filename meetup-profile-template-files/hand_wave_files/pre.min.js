function fadeMyDiv()
{
    $("#preloader").fadeOut("slow"),
    $("body").delay(3e3)
}

$(window).on("load",function()
{
    window.setTimeout("fadeMyDiv();",1e3)
});