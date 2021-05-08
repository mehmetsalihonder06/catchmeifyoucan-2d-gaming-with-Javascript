
var geyik=new Image();
var backg=new Image();
var score=0;
backg.src="https://st3.depositphotos.com/30811966/33369/v/1600/depositphotos_333696338-stock-illustration-vector-illustration-abstract-polygon-landscape.jpg"
geyik.src ="https://cdn.shopify.com/s/files/1/1791/8743/files/278429_ohqagrzk6gl_6006d3bf-a1a0-4ff0-b438-a308f33de10f_150x.png?v=1515333536";

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
function draw(){
    ctx.drawImage(backg, 0,-210);
    //ctx.drawImage(geyik,120,350);
  
  
    RandomGeyik();
}

draw();

function RandomGeyik(){
    var a=Math.ceil(Math.random() * 10)*137;
    var b=Math.ceil(Math.random() * 10)*48;
    ctx.drawImage(geyik,a ,b);
    //alert( a +" " + b);
    
    c.addEventListener('mousedown', e => {
        var x1 = e.offsetX;
        var y1 = e.offsetY;
        
      
    

        if(  (x1-a<200)            && (y1-b<250     )     )           {
           
            var audio = new Audio('mouse_click_single.wav');
            audio.play();
                score=score+1;
                ctx.font = "30px Arial";
                ctx.fillText("Score: "+ score , 100, 50);
                draw();

            

        }
        else
            {
                ctx.font = "30px Arial";
                ctx.fillText("Score: "+ score , 100, 50);
				alert("lutfen sayfayı yenieyin.");
                
            }
      });
      
    


}

