// Code by nhduc.info
document.addEventListener("DOMContentLoaded",function(){
    var a = document.getElementsByClassName("s1");
    var b = document.getElementsByClassName("s2");
    console.log(a);
    console.log(b);
    
    
    var n1 = document.getElementById("n1");
    console.log(n1);
    var k1 = n1.getAttribute('data-key');
    var b1 = document.getElementById("b1");
    var k2 = b1.getAttribute('data-key');
    n1.onclick = function(){
        if(k1 == k2) b1.classList.remove("a");
    }
    var n2 = document.getElementById("n2");
    console.log(n2);
    var k3 = n2.getAttribute('data-key');
    var b2 = document.getElementById("t1");
    var k4 = b2.getAttribute('data-key');
    n2.onclick = function(){
        if(k3 == k4) {
            b1.classList.add("a");
            b2.classList.remove("a");
        }
    }
    
})