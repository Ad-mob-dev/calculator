function num(num){

var displ = document.getElementById("disp");
displ.value += num;

}


function cls(){
var displ = document.getElementById("disp");
displ.value = " ";

}


function del(){

    var displ = document.getElementById("disp");
displ.value = displ.value.substr(0, displ.value.length-1);
}

function sqr(){
var val = document.getElementById("disp");
x = val.value;
val.value = Math.sqrt(x);
}

function calc(){
var disp = document.getElementById("disp");
var res = disp.value;
disp.value = eval(res);
}


function cube(){
    var disp = document.getElementById("disp");
    var res = disp.value;
    disp.value = res * res * res;
    }


    
function square(){
    var disp = document.getElementById("disp");
    var res = disp.value;
    disp.value = res * res;
    }