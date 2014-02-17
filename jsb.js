window.onclick = cal;

function cal() {
    if ( document.getElementById ) {
        var oShow = document.getElementById('show');
        if ( oShow ) {
                 oShow.onclick = calculateDistance;
         }
    }
}

function calculateDistance() {
    var oPlanet = document.getElementById("planet-name").value;
    var oDistance = document.getElementById("distance");
    var oDiameter = document.getElementById("diameter");

    if ( oPlanet == "mercury" ) {
        
        oDistance.value ="36 milion miles";
        oDiameter.value ="3100 miles";
        exit();
        
        /*oDistance.value.write("36 milion miles");
        oDiameter.value.write("3100 miles");
        exit();*/
    }
    else if ( oPlanet == "venus" ) {
        oDistance.value = "67 milion miles";
        oDiameter.value = "7700 miles";
    }
    else if ( oPlanet == "earth" ) {
        oDistance.value = "93 milion miles";
        oDiameter.value = "7920 miles";
    }
    else if ( oPlanet == "mars" ) {
        oDistance.value = "141 milion miles";
        oDiameter.value = "4200 miles";
    }
}


