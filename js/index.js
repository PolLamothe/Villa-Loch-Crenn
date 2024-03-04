var searchParams = new URLSearchParams(window.location.search);

if(searchParams.get("lang") == "en"){
    translate()
}

function translate(){
    $("#text1").html("Villa with heated pool for 13 persons, 300 meters from the sea")
    $("#nombre_de_pièces").html("Laundry and Menage provided")
    $("#nombre_de_Chambres").html("5 Bedrooms")
    $("#nombre_de_salle_de_bain").html("2 Bathrooms")
    $("#nombre_de_toilettes").html("2 Toilets")
    $("#piscine_intérieure").html("Heated pool")
    $("#description1_txt1").html("This villa of 160m2 at 300 meters from the sea is perfect for vacantion with friends or family")
    $("#description1_txt2").html("It is located un a privileged place of the south finistère, Penmarch, at 300 meters from the sea and the Eckmul lighthouse, in a quiet dead end, at 4km from the Pors Scarn beach et near of the Pointe De La Torche, surfers' spot")
    $("#description1_txt3").html("The Villa have a closed garden of 800m2 with a private pool of 4m*8m, heated and secured (rigid tarpaulin and fence with access door), 5 bedrooms, 2 bathrooms and a sauna for 4 persons")
    $("#AlentoursTitle").html("The Surroundings")
    $("#description2_txt1").html("Come and discover Penmarch in the south Finistère it large fin sandy beaches (Pors Carn, Steir) it beautiful landscapes, the Pointe De La Torche, it small traditionnal villages of fisherman. Enjoy the bike rides or the walk on the coastal paths")
    $("#description2_txt2").html("Sea side")
    $("#description2_txt3").html("Culturals activites")
    $("#description2_txt4").html("Sportives activities")
    $("#la_villa_btn").htlm("The Villa")
    $("#les_alentours_btn").html("The Surroundings")
}