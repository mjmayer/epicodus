$(document).ready(function() {
    $(".clickable").click(function() {
        $("#walrus").slideToggle();
    })

    $("#foo").click(function() {
       $("#clicked").prepend("<li>Foo</li>");
       $("#response").prepend("<li>What?</li>");
        $("ul#clicked").children("li").first().click(function(){
            $(this).remove();
        })
        $("ul#response").children("li").first().click(function(){
            $(this).remove();
        })
    })

    $("#bar").click(function() {
        $("#clicked").prepend("<li>Bar</li>");
        $("#response").prepend("<li>What?</li>");
        $("ul#clicked").children("li").first().click(function(){
            $(this).remove();
        })
        $("ul#response").children("li").first().click(function(){
            $(this).remove();
        })
    })

    $("#baz").click(function() {
        $("#clicked").prepend("<li>Baz</li>");
        $("#response").prepend("<li>What?</li>");
        $("ul#clicked").children("li").first().click(function(){
            $(this).remove();
        })
        $("ul#response").children("li").first().click(function(){
            $(this).remove();
        })
    })


    $("#night-mode").click(function() {
        $("body").toggleClass("night-mode")
    })

});