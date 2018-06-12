$( document ).ready(function(){
    var Random=Math.floor(Math.random()*101+19)
    
    $("#randomNumber").text(Random);
    
    var num1= Math.floor(Math.random()*11+1)
    var num2= Math.floor(Math.random()*11+1)
    var num3= Math.floor(Math.random()*11+1)
    var num4= Math.floor(Math.random()*11+1)
    
    var totalScore= 0; 
    var wins= 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#blue").on ('click', function(){
      totalScore = totalScore + num1;
      console.log("New userTotal= " + totalScore);
      $("#total").text(totalScore); 
      loseOrWin(totalScore,Random, wins, losses)
    })  
    $("#green").on ('click', function(){
      totalScore= totalScore + num2;
      console.log("New userTotal= " + userTotal);
      $('#finalTotal').text(userTotal); 
      loseOrWin(totalScore,Random, wins, losses)
    })  
    $("#red").on ('click', function(){
      totalScore = totalScore + num3;
      console.log("New userTotal= " + totalScore);
      $('#finalTotal').text(totalScore);
      loseOrWin(totalScore,Random, wins, losses)
    })  
    $("#yellow").on ('click', function(){
      totalScore = totalScore + num4;
      console.log("New userTotal= " + totalScore);
      $('#finalTotal').text(userTotal); 
      loseOrWin(totalScore,Random, wins, losses)
    });   
  }); 

function reset(){
    Random=Math.floor(Math.random()*101+19);
    $("#randomNumber").text(Random);
    $("#total").text(0);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
} 

function loseOrWin(totalScore,Random, wins, losses) {
    if (totalScore == Random){
        alert("You won!");
        wins++; 
        $('#wins').text(wins);
        reset();
    }
    else if ( totalScore > Random){
        losses++;
        $('#losses').text(losses);
        alert ("You lose!");
        reset()
    }
}
