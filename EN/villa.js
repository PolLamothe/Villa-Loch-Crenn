const Sauna = document.getElementById('Sauna');
const SaunaText = document.getElementById('Sauna_txt');
const Salle_a_manger = document.getElementById('Salle_a_manger');
const Salle_a_mangerText = document.getElementById('Salle_a_manger_txt');
const Cuisine = document.getElementById('Cuisine');
const CuisineText = document.getElementById('Cuisine_txt');
const Salon = document.getElementById('Salon');
const SalonText = document.getElementById("Salon_txt");
const Douche = document.getElementById('Douche');
const DoucheText = document.getElementById('Douche_txt');
const Baignoire = document.getElementById('Baignoire');
const BaignoireText = document.getElementById('Baignoire_txt');
const image = document.getElementById('int_img');
const global = document.getElementById('Global1')

const Chambre1 = document.getElementById('Chambre1');
const chambre1Text = document.getElementById('Chambre1_txt');
const Chambre2 = document.getElementById('Chambre2');
const chambre2Text = document.getElementById('Chambre2_txt');
const Chambre3 = document.getElementById('Chambre3');
const chambre3Text = document.getElementById('Chambre3_txt');
const Chambre4 = document.getElementById('Chambre4');
const chambre4Text = document.getElementById('Chambre4_txt');
const Chambre5 = document.getElementById('Chambre5');
const chambre5Text = document.getElementById('Chambre5_txt');
const image2 = document.getElementById('chambre_img'); 
const Global2 = document.getElementById('Global2')

const PiscineJour = document.getElementById('PiscineJour');
const PiscineJourtxt = document.getElementById('PiscineJour_txt');
const PiscineNuit = document.getElementById('PiscineNuit');
const PiscineNuittxt = document.getElementById('PiscineNuit_txt');
const image3 = document.getElementById('image3');

if(window.innerWidth >767){
    image.style.height = (window.innerHeight * 0.7)+'px';
    image2.style.height = (window.innerHeight * 0.7)+'px';
    image3.style.height = (window.innerHeight * 0.7)+'px';
}else{
    image.style.height = (window.innerHeight * 0.5)+'px';
    image2.style.height = (window.innerHeight * 0.5)+'px';
    image3.style.height = (window.innerHeight * 0.5)+'px';
}


Sauna.addEventListener('click', updateSauna);
function updateSauna(){
    SaunaText.style.display = "";
    Salle_a_manger.style.borderTopWidth = '1px';
    Salle_a_manger.style.marginTop = "1%";
    image.style.display = "";
    image.src = "../css/image/Sauna.webp";
    reset('Sauna');
};

Salle_a_manger.addEventListener('click', updateSalle_a_manger);
function updateSalle_a_manger(){
    Salle_a_mangerText.style.display = "";
    Cuisine.style.borderTopWidth = "1px";
    Cuisine.style.marginTop = "1%";
    image.style.display = "";
    image.src = "../css/image/Salle a manger.webp";
    reset('Salle_a_manger');
};

Cuisine.addEventListener('click', updateCuisine);
function updateCuisine(){
    CuisineText.style.display = "";
    Salon.style.borderTopWidth = '1px';
    Salon.style.marginTop = "1p%";
    image.style.display = "";
    image.src = "../css/image/Cuisine 1.webp"
    reset('Cuisine');
};

Salon.addEventListener('click', updateSalon);
function updateSalon(){
    SalonText.style.display = "";
    Douche.style.borderTopWidth = "1px";
    Douche.style.marginTop = "1%";
    image.style.display = "";
    image.src = "../css/image/Salon.webp";
    reset('Salon');
};

Douche.addEventListener('click', updateDouche);
function updateDouche(){
    DoucheText.style.display = "";
    Baignoire.style.borderTopWidth = "1px";
    Baignoire.style.marginTop = "1%";
    image.style.display = "";
    image.src = "../css/image/Douche.webp";
    reset('Douche');
}

Baignoire.addEventListener('click', updateBaignoire);
function updateBaignoire(){
    BaignoireText.style.display = "";
    image.style.display = "";
    image.src = "../css/image/Baignoire.webp";
    reset('Bain');
}

function reset(exeption){
    if(exeption != 'Sauna'){
    SaunaText.style.display = "none";
    Salle_a_manger.style.borderTopWidth = '0px';
    Salle_a_manger.style.marginTop = "0%";
    };

    if(exeption != 'Salle_a_manger'){
    Salle_a_mangerText.style.display = "none";
    Cuisine.style.borderTopWidth = '0px';
    Cuisine.style.marginTop = "0%";
    };

    if(exeption != 'Cuisine'){
    CuisineText.style.display = "none";
    Salon.style.borderTopWidth = '0px';
    Salon.style.marginTop = "0%";
    };

    if(exeption != 'Salon'){
    SalonText.style.display = "none";
    Douche.style.borderTopWidth = '0px';
    Douche.style.marginTop = '0%';
    };

    if(exeption != 'Douche'){
        DoucheText.style.display = "none";
        Baignoire.style.borderTopWidth = "0px";
        Baignoire.style.marginTop = '0%';
    };

    if(exeption != 'Bain'){
        BaignoireText.style.display = "none";
    };
};

Chambre1.addEventListener('click', updateChambre1);
function updateChambre1(){
    chambre1Text.style.display = "";
    Chambre2.style.borderTopWidth = '1px';
    Chambre2.style.marginTop = "1%";
    image2.style.display = "";
    image2.src = "../css/image/Chambre1.webp";
    reset2('Chambre1');
};

Chambre2.addEventListener('click', updateChambre2);
function updateChambre2(){
    chambre2Text.style.display = "";
    Chambre3.style.borderTopWidth = "1px";
    Chambre3.style.marginTop = "1%";
    image2.style.display = "";
    image2.src = "../css/image/Chambre2.webp";
    reset2('Chambre2');
};

Chambre3.addEventListener('click', updateChambre3);
function updateChambre3(){
    chambre3Text.style.display = "";
    Chambre4.style.borderTopWidth = '1px';
    Chambre4.style.marginTop = "1px";
    image2.style.display = "";
    image2.src = "../css/image/Chambre3.webp"
    reset2('Chambre3');
};

Chambre4.addEventListener('click', updateChambre4);
function updateChambre4(){
    chambre4Text.style.display = "";
    image2.style.display = "";
    image2.src = "../css/image/Chambre4.webp";
    Chambre5.style.borderTopWidth = '1px';
    Chambre5.style.marginTop = '1px';
    reset2('Chambre4');
};

Chambre5.addEventListener('click', updateChambre5);
function updateChambre5(){
    chambre5Text.style.display = "";
    image2.style.display = "";
    image2.src = "../css/image/Chambre5.webp";
    reset2('Chambre5');
}

function reset2(exeption){
    if(exeption != 'Chambre1'){
    chambre1Text.style.display = "none";
    Chambre2.style.borderTopWidth = '0px';
    Chambre2.style.marginTop = "0%";
    };

    if(exeption != 'Chambre2'){
    chambre2Text.style.display = "none";
    Chambre3.style.borderTopWidth = '0px';
    Chambre3.style.marginTop = "0%";
    };

    if(exeption != 'Chambre3'){
    chambre3Text.style.display = "none";
    Chambre4.style.borderTopWidth = '0px';
    Chambre4.style.marginTop = "0%";
    };

    if(exeption != 'Chambre4'){
    chambre4Text.style.display = "none";
    Chambre5.style.borderTopWidth = '0px';
    Chambre5.style.marginTop = '0%';
    };

    if(exeption != 'Chambre5'){
    chambre5Text.style.display = "none";
    }
};

PiscineJour.addEventListener('click', updatePiscineJour);
function updatePiscineJour(){
    PiscineJourtxt.style.display = "";
    PiscineNuit.style.borderTopWidth = '1px';
    PiscineNuit.style.marginTop = "1%";
    image3.src = "../css/image/PiscineJour.webp";
    image3.style.display = "";
    reset3('PiscineJour');
};

PiscineNuit.addEventListener('click', updatePiscineNuit);
function updatePiscineNuit(){
    PiscineNuittxt.style.display = "";
    image3.src = "../css/image/PiscineNuit.webp";
    image3.style.display = "";
    reset3('PiscineNuit');
};

function reset3(exeption){
    if(exeption != 'PiscineJour'){
        PiscineJourtxt.style.display = "none";
        PiscineNuit.style.borderTopWidth = '0px';
        PiscineNuit.style.marginTop = "0%";
    }
    if(exeption != 'PiscineNuit'){
        PiscineNuittxt.style.display = "none";
    }
}