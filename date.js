const startdate = document.getElementById('startdate');
const enddate = document.getElementById('enddate');
var ladate = new Date();
let todayday;
let todaywrong = ladate.getDate();
console.log("program running")

if(ladate.getDate() < 10){
    todayday = '0' + todaywrong;
    console.log('day running');
}

startdate.value =(ladate.getFullYear() + "-" + (ladate.getMonth()+1) + "-" + todayday);
console.log(ladate.getFullYear() + "-" + (ladate.getMonth()+1) + "-" + todayday);
enddate.value = (ladate.getFullYear() + "-" + (ladate.getMonth()+1) + "-" + todayday);