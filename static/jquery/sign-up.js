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
    }
});

