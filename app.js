function weightConvert(Num){
    document.getElementById("pounds").value = Num*2.2046;
    document.getElementById("kilograms").value = Num*1;
    document.getElementById("ounces").value = Num*35.274;
    document.getElementById("grams").value = Num*1000;
    document.getElementById("stones").value = Num*0.1574;

}
