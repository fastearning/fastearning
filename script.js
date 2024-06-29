var a=1;
var btn=document.getElementById("menubtn");
var mobile_menu=document.getElementById("menu");

btn.addEventListener("click", myFunction);

function myFunction() {
    if(a==1){
         mobile_menu.style.top=70+"px";
        btn.innerHTML="╳";
        a=0;
    }else{
        mobile_menu.style.top=-100+"vh";
        btn.innerHTML="☰";
        a=1;
    }
}

