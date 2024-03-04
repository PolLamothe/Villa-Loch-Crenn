var searchParams = new URLSearchParams(window.location.search);

if(searchParams.get("lang") == "en"){
    translate()
}

function translate(){
    $("#header_").html("HomePage")
    $("#txt1").html("The Villa")
    $("#txt2").html("Surroundings")
    $("#txt3").html("Gallery")
    $("#txt4").html("Contact/Prices")
    for(var i = 0; i < $("a").length; i++){
        $("a")[i].href = $("a")[i].href + "?lang=en"
    }
}