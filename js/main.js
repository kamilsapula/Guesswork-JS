$(document).ready(function(){
    var score = Math.ceil(Math.random()*3);
    
    var i = 2;
    $(document).keydown(function(e) {
        
        $(".box").removeClass("chosen-box");
        
        switch(e.which) {
            case 37: 
                i--;      
                if (i <= 1) {
                    i = 1;
                }   
                $("#box" + i).addClass("chosen-box");             
            break;

            case 39:    
                i++;  
                if (i >= 3) {
                    i = 3;
                }   
                $("#box" + i).addClass("chosen-box");   
            break;
                
            case 13:
                $("#box" + i).addClass("flip-box");
                
                if (i == score) {
                    $("#box" + i).find(".chosen-box-text").text("Wybrałeś odpowiednią kartę!")
                }
            default: return; 
        }
        e.preventDefault();
        
    });
    
});

