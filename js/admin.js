var list = document.getElementById('list');
var listbutton = document.getElementById('listbutton');

listbutton.addEventListener('click',updatelist);
function updatelist(){
    if(list.style.display=="inherit"){
        list.style.display="none";
        return;
    }
    list.style.display="inherit";
}