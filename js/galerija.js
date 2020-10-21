window.onload = function() {
   ucitajSlike()}
   
   function ucitajSlike(){
      var nizSlika = ['../images/1.jpg', '../images/2.jpg', '../images/3.jpg', '../images/4.jpg', '../images/5.jpg', '../images/6.jpg'];
      var alt = ['slika1', 'slika2', 'slika3', 'slika4', 'slika5', 'slika6']
      var ispisiSLike = "";
      for(var i = 0; i < nizSlika.length; i++) {
          ispisiSLike += "<div class='slika'><a href='" + nizSlika[i] +"'><img src='" + nizSlika[i] + "'alt='" + alt[i] + "'/></a></div>";
      }
      document.querySelector('#onamaSlike').innerHTML = ispisiSLike;
   }


   $(document).ready(function(){
      $(".slika a").vanillabox();
  });




