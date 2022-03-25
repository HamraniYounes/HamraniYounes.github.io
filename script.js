
//Calcul de l'age
function calculate_age(dob) { 
    var diff_ms = Date.now() - dob.getTime();
    var age_dt = new Date(diff_ms); 
  
    return Math.abs(age_dt.getUTCFullYear() - 1970);
}

var age=calculate_age(new Date(1996, 10, 24));

$(document).ready(function(){
    $(".age").text(age + " years old");
});