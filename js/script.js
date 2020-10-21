window.onload=function(){
    ucitajSlike();
    ucitajRadio();
    ucitajCheck();
}

function ucitajSlike(){
    var nizSlike = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg', '../images/6.jpg'];
    var alt = ['slika1', 'slika2', 'slika3', 'slika4', 'slika5', 'slika6'];
    var ispisSlike ="";
        for(var i=0; i<nizSlike.length; i++){
            ispisSlike += "<div class='slika'><a href='" + nizSlike[i] + "'><img src='"+ nizSlike[i] +"' alt='"+ alt[i] +"'/></a></div>";
        }

    document.getElementById("slike").innerHTML = ispisSlike;
}

function ucitajRadio(){
    var nizRadio = ['Nikola', 'Bojana', 'Nemanja', 'Sofija'];
    var ispisVozila = "";
    document.getElementById("vozilo").innerHTML = "Izaberi ime:";
    for(var i=0; i<nizRadio.length; i++){
        ispisVozila += "<input type='radio' name='rbIme' value='"+ nizRadio[i] +"'/>"+ nizRadio[i];
    }
    document.getElementById("vozilo").innerHTML = ispisVozila;
}

function ucitajCheck(){
    var nizCheck = ['Barselona', 'Firenca', 'Lisabon', 'Porto'];
    var ispisCheck = "";
    for(var i = 0; i<nizCheck.length; i++){
        ispisCheck += "<input type='checkbox' name='"+ nizCheck[i] +"'/>"+nizCheck[i];
    }
    document.getElementById("check").innerHTML = ispisCheck;
}