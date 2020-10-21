$(document).ready(function(){
    
    $('#label').blur(function(){

        var label = $('#label').val();
        var relabel = /^[\w \d \s]{3, 15}$/;
        if(!label.test(relabel)){
            alert("Greska");
        }

    });


    


});