// Animacija pri pokretanju igrice
$(document).ready(function(){

    $(".fade").fadeIn(3000);
    // $(".play").delay(3200).show();
   setTimeout(() => {
       $(".play").show();
   }, 3200);


});



$('.play').click(function(){
    var slova = ['P','O','S','A','O']
    slova.sort(function() { return 0.5 - Math.random() });
    $('.fade span').remove();
    $('.play').hide('slow');

    counter = 0
    jQuery.each( slova, function( i, val ) {
        counter = counter+500;
        setTimeout(() => {
            $('.fade').append(`<span class="leterVal" name="${val}">${val}</span>`);
        }, counter);

        setTimeout(() => {
          
        }, 2600);
    

        // slideOutUp



         console.log(counter);


        // 2500ms  radi animacija posle toga treba da krece timer
      });
});

// Funkcija za detekciju klika i spajanje elemenata provera da li je korisnik uneo ispravna slova redosled


// arr = [];
$(document).on('click','.leterVal',function(){
    var valueFormLeter= $(this).attr('name');

    var valueCorect = valueFormLeter+valueFormLeter;
    console.log(valueCorect);

});





