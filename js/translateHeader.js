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
}