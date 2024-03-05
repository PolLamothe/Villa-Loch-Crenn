var searchParams = new URLSearchParams(window.location.search);

if(searchParams.get("lang") == "en"){
    translate()
}

function translate(){
    $("#txt1").text("Penmarch is located in southern Finistère, 34 km from the town of Quimper. Many places to discover nearby:")
    $('#txt2').text("Near the house: Supermarket 2km away, Bakery 300m away, Creperies and Restaurants 400m away. Nearby activities: Beach, Canoe Kayak, Surfing, Kite Surfing, Fishing, Sailing, Hiking on Coastal Paths and Boat Trips.")
}