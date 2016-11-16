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
    /*Almacenar número */
    $("#numeroTelefonico").text(localStorage.getItem("inputTel"));
    $("#ft-sign").click(function(){
        var input = $("#input-number").val();
        window.localStorage.setItem("inputTel", input);
    });

    /* Número Rndom*/
    $("#ft-sign, #button-resend").click(function(){
        var numRandom = Math.floor((Math.random() * 9999) + 1);
        alert( numRandom );
    });

    /* Verificar núm=ero random*/
    var traerRandom = window.localStorage.getItem("alerRan");
        $("#ft-sign1").click(function() {
     var unir = $("#number-verify1").val().toString() + $("#number-verify2").val().toString() + $("#number-verify3").val().toString() + $("#number-verify4").val().toString();
            var guardarNUm = window.localStorage.setItem("alerRan", numRandom);
            if( unir == traerRandom){
                alert("salio :) ");
                return true;
            }
            else {
                return false;
            }
        });

});


