var btn = document.getElementById("promo_btn");
var btnTwo = document.getElementById("promo_btn_two");
var modal = document.getElementById("promo_modal");
var close = document.getElementById("promo_modal_close");

btn.onclick = function (){
    modal.style.display = "block";
}
btnTwo.onclick = function (){
    modal.style.display = "block";
}
close.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function (event){
    if(event.target == modal){
        modal.style.display = "none";
    }
}
jQuery(document).ready(($)=>{

    // документ загружен!

    $('.element-1').lightGallery({

    });

});
