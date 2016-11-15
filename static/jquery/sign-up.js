$(document).ready(function(){
    $("#input-number").blur(function(e){
        if(validatePhone("contenido")){
            return true;
        }

        else if ( $("#input-number").val().length == 0) {
            alert("Ingrese su número");
            $('#ft-sign').attr("disabled", true);
            return false;
        }

        else{
           $('#ft-sign').attr("disabled", true);
           alert("Ingrese un número valido");
           return false;
        }
    });
    function validatePhone(contenido){
        var a = document.getElementById("input-number").value;
        var filter = /^[0-9-+]+$/;
        if (filter.test(a)) {
            return true;
        }
        else {
            return false;
        }
    };
    /* Número Rndom*/
    $("#ft-sign, #button-resend").click(function(){
        var x = Math.floor((Math.random() * 9999) + 1);
        alert( x );
    });

    /*Almacenar número */
    $("#numeroTelefonico").text(localStorage.getItem("inputN"));
    $("#ft-sign").click(function(){
        var input = $("#input-number").val();
        window.localStorage.setItem("inputN", input);
    });
});


