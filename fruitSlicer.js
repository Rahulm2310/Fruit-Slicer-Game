var fruits=["apple","banana","orange","pineapple","grapes","cherry","pear","watermelon"];
var lifes;
var score;
var playing=false;
var action;

$(function(){
$("#start").on("click",function(){

    $("#gameover").hide();
    if(playing)
    {
        location.reload();
    }
    else{

    playing=true;
    score=0;
    lifes=3;
    $("#lifes").show();
    $("#score").show();
   
    addhearts();

    $("#start").html("Reset Game");

    startaction();
       
    }
    
   
    
});




function addhearts(){
    $("#lifes").html("");
    for(var i=1;i<=lifes;i++)
    {
        $("#lifes").append("<img src='heart.png' class='heart'>");
    }
}

function startaction(){
    $("#fruit1").show();
    choosefruit();
    var position=Math.round(450*Math.random());
    $("#fruit1").css({"left":position,"top":-50});
    var step=1+Math.round(10*Math.random());

    action =  setInterval(function(){
    var up=$("#fruit1").position().top + step;
    $("#fruit1").css("top",up);

   

    if($("#fruit1").position().top>350){
        if(lifes>1)
        {
            $("#fruit1").show();
            choosefruit();

            position=Math.round(450*Math.random());
               $("#fruit1").css({"left":position,"top":-50});

               step=1+Math.round(5*Math.random());

               lifes=lifes-1;

               addhearts();
        }

        else{
            playing=false;
            $("#gameover").show();
            $("#start").html("Start Game");
            $("#endscore").html(score);
            $("#lifes").hide();
            stopaction();
        }

        
    }

   
    },40);
}

$("#fruit1").on("mouseover",function(){
    score++;
    $("#scoreshow").html(score);
    $("#slicesound")[0].play();

    clearInterval(action);

    $("#fruit1").hide("explode",500);

    setTimeout(startaction, 500);
});



function choosefruit(){
    var randfruit=fruits[Math.round(7*Math.random())];
        $("#fruit1").attr("src",randfruit+".png");
}

function stopaction(){
    clearInterval(action);
    $("#fruit1").hide();
}

});
