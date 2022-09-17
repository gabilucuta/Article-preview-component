function myFunction(){
    
    
     var menu = document.getElementById("none");
     var element = document.getElementById("profile");
         element.classList.toggle("mystyle");
     if(menu.style.opacity == "0"){
        
         menu.style.opacity = "1";
     }else{
        menu.style.opacity = "0";
     }
    }


    