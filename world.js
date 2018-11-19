window.onload = function (){

    

document.getElementById("lookup").onclick = function (){

    var url  = "world.php?country=";

    

    var httpReq = new XMLHttpRequest();

    var results = document.getElementById("country").value;

    httpReq.onreadystatechange = function(){

        if (httpReq.readyState == 4 && httpReq.status == 200){

           

            document.getElementById("result").innerHTML = httpReq.responseText;

        }

     
    };

    if (document.getElementById("all").checked){

        httpReq.open("GET","world.php?all=true", true);

    } else {

        httpReq.open("GET", url + results, true);

    }

    httpReq.send();

    };

};