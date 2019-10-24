$("#tellSec").click(function(){
    
  var portfolio= $("#portfolio").offset().top;  
    
   $("html,body").animate({scrollTop:portfolio-150},1000);
    
    
    
})

$("nav a").click(function(){
    
    var hrefNav= $(this).attr("href");
    var scrollNav =$(hrefNav).offset().top;
    $("html,body").animate({scrollTop:scrollNav},1000);
    
    
})
$(window).scroll(function(){
    var portfolio= $("#portfolio").offset().top;  
    var winNav=$(window).scrollTop();
    
    if(winNav>portfolio-100)
    {
        $("nav").css("backgroundColor","black");
        
    }
    else
        {
            $("nav").css("backgroundColor","rgba(0,0,0,0.3)");
            
        }
    
})