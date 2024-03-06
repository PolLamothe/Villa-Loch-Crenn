var searchParams = new URLSearchParams(window.location.search);

if(searchParams.get("lang") == "en"){
    translate()
}

function translate(){
    $('#title1').text('Contact us')
    $("#nameInput").attr("placeholder", "Name")
    $("#phone").attr("placeholder", "Phone")
    $('#sendButton').attr("value", "Send")
    $('#title2').text('Address')
    $('#title4').text('Phone')
    $("#title5").text("Book your stay")
    $("#txt1").text("Come and discover southern Finistère for an exceptional holiday")
    $("#title6").text("Our prices")
    $("#txt2").html("<b>The price includes:</b> Charges, all linen (beds made, bathroom and kitchen linen) and end-of-stay cleaning services")
    $('#txt3').html("<b>Per week:</b> from 1100€ to 2700€")
    $("#txt4").html("<b>Minimum duration:</b> 1 week from Saturday to Saturday")
    $("#txt5").html("<b>Deposit:</b> 25% of the rental price")
    $("#txt6").html("<b>Deposit to be paid on site:</b> €1000 (returned upon departure)")
    $("#title7").text("Check availability")
    $("#txt7").text("From")
    $("#txt8").text("To")
    $("#txt9").attr("value", "Check availability")
}