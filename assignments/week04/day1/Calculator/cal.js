document.querySelector("#add").addEventListener("click",function (firstvalue,secondvalue) {
    var firstvalue = document.getElementById("firstvalue").value;
    var secondvalue = document.getElementById("secondvalue").value;
    if(firstvalue == "" || secondvalue == ""){
        document.getElementById("result").value = "";
        alert("please enter some value");
        return;
    }    
    var result = parseInt(firstvalue) + parseInt(secondvalue);
    document.getElementById("result").value = result;
    return;
})

document.querySelector("#sub").addEventListener("click",function (firstvalue,secondvalue) {
    var firstvalue = document.getElementById("firstvalue").value;
    var secondvalue = document.getElementById("secondvalue").value;
    if(firstvalue == "" || secondvalue == ""){
        document.getElementById("result").value = "";
        alert("please enter some value");
        return;
    }    
    var result = parseInt(firstvalue) - parseInt(secondvalue);
    document.getElementById("result").value = result;
    return;
})

document.querySelector("#mul").addEventListener("click",function (firstvalue,secondvalue) {
    var firstvalue = document.getElementById("firstvalue").value;
    var secondvalue = document.getElementById("secondvalue").value;
    if(firstvalue == "" || secondvalue == ""){
        document.getElementById("result").value = "";
        alert("please enter some value");
        return;
    }    
    var result = parseInt(firstvalue) * parseInt(secondvalue);
    document.getElementById("result").value = result;
    return;
})

document.querySelector("#div").addEventListener("click",function (firstvalue,secondvalue) {
    var firstvalue = document.getElementById("firstvalue").value;
    var secondvalue = document.getElementById("secondvalue").value;
    if(firstvalue == "" || secondvalue == ""){
        document.getElementById("result").value = "";
        alert("please enter some value");
        return;
    }    
    var result = parseInt(firstvalue) / parseInt(secondvalue);
    document.getElementById("result").value = result;
    return;
})