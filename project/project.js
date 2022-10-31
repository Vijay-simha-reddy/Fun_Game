let player1_total=0;
let player2_total=0;
var count=3;
const btnshw=document.querySelector('.next');
const sbt=document.querySelector('.stop');
   
   document.getElementById("selected-card").addEventListener("click", function(){
       var player1_card =Math.floor(Math.random() * 18)
       document.getElementById("sel-cards").innerHTML +=player1_card+ "  " ;
       player1_total+=player1_card;
       document.getElementById("score").innerHTML = "Score : "+player1_total + "  " ;
       count--;

       document.getElementById("chance").innerHTML="You have "+count+" Chance or Leave it";
       if (count>0){
           document.getElementById("chance").innerHTML="You have only "+count+" Chance or Leave it &#x1F914;";
       }
       if (count==0){
           document.getElementById("chance").innerHTML="No more Chances has left uff.";
       }
       if(player1_total>24 && count>0){
           document.getElementById("chance").innerHTML="Ohh ! no chance &#128533";
       }
       if(count==0 || player1_total>24){
           btnshw.disabled=true;
       }
       
   });

   for (var i=0 ; i<3;i++) {
   document.getElementById("stop").addEventListener("click", function(){
       var player2_card =Math.floor(Math.random() * 18)
       document.getElementById("comp-cards").innerHTML += player2_card+"  " ;
       player2_total+=player2_card;
       document.getElementById("comp-score").innerHTML = "Score : "+player2_total+ "  " ;
       btnshw.disabled=true;
       sbt.disabled=true;
       if ((3-count)==1){
        document.getElementById("chance").innerHTML="You have used "+ (3-count) +" chance.";
       } 
       else{
        document.getElementById("chance").innerHTML="You have used "+ (3-count) +" chances.";
       }  
       document.getElementById("comp-chance").innerHTML="You have used 3 chances.";
       if ((13 <= player1_total && 24>=player1_total) && (13 <= player2_total && 24>=player2_total) && (player1_total > player2_total) && (player1_total!=player2_total)){
            document.getElementById("result").innerHTML="Player 1 Won the Game &#X1F60E";
       }
       else if ((13 <= player1_total && 24>=player1_total) && (13 > player2_total || 24<player2_total) && (player1_total!=player2_total)){
            document.getElementById("result").innerHTML="Player 1 Won the Game &#X1F60E";
       }
       else if ((13 <= player1_total && 24>=player1_total) && (13 <= player2_total && 24>=player2_total) && (player1_total < player2_total) && (player1_total!=player2_total)){
        document.getElementById("result").innerHTML="Player 2 Won the Game &#X1F62F";
        }
        else if((13 <= player2_total && 24>=player2_total) && (13 > player1_total || 24<player1_total) && (player1_total!=player2_total)){
            document.getElementById("result").innerHTML="Player 2 Won the Game &#X1F62F";
        }
        else{
            document.getElementById("result").innerHTML="Draw &#128522 !"
        }
   });
}