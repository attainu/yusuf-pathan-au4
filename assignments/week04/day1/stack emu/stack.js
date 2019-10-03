var ar = [1,12,98,45,32];
document.getElementById('print').innerHTML = ar;
console.log(ar);
document.querySelector('#push').addEventListener("click",function (input) {
    var input = document.getElementById("input").value;
    if(input === ''){
        alert("please wrtite some values");
        return;
    }
    ar.push(input);
    document.getElementById('print').innerHTML = ar;
})
document.querySelector('#pop').addEventListener("click",function () {
    ar.pop();
    document.getElementById('print').innerHTML = ar;
})