window.onload = function(){
    ispisiTabeluProizvodi();}
function ispisiTabeluProizvodi() {
    var tabelaProizvoda = [
        'Renault Captur, 11 500,13 900',
        'Renault Clio, 11 700, 14 000',
        'Renault Espace, 12 500, 15 000',
        'Renault Kadjar, 13 400, 16 000',
        'Renault Kangoo, 8 900, 10 700',
        'Renault Koleos, 14 600, 17 500',
        'Renault Laguna, 13 300, 16 000',
        'Renault Megane, 15 800, 19 000',
        'Renault Scenic, 14 800, 17 300',
        'Renault Talisman, 21 500, 25 800',
        'Renault Trafic, 17 200, 20 600'
    ];

    var ispisTabele = "<table class='tabela'><thead><tr><th>Naziv proizvoda</th><th>Cena bez PDV-a</th><th>Cena sa PDV-om (20%)</th></tr></thead>";
    for(var i=0; i< tabelaProizvoda.length; i++) {
        var dohvatiProizvod = tabelaProizvoda[i].split(',');
        ispisTabele += '<tr><td>' + dohvatiProizvod[0] + '</td><td>' + dohvatiProizvod[1]  + ' eur</td><td>' + dohvatiProizvod[2] + ' eur</td></tr>';
    }
    ispisTabele += '<table>';
    document.querySelector('#tabelaProizvodi').innerHTML = ispisTabele;

}
