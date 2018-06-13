$( document ).ready(function(){
    var Random=Math.floor(Math.random()*120)
    
    $("#randomNumber").text(Random);
    
    var num1= Math.floor(Math.random()*12)
    var num2= Math.floor(Math.random()*12)
    var num3= Math.floor(Math.random()*12)
    var num4= Math.floor(Math.random()*12)
    
    var totalScore= 0; 
    var wins= 0;
    var losses = 0;

    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#blue").on ('click', function(){
      totalScore = totalScore + num1;
      $("#total").text(totalScore); 
      loseOrWin(totalScore,Random, wins, losses)
    })  
    $("#green").on ('click', function(){
      totalScore= totalScore + num2;
      $('#total').text(totalScore); 
      loseOrWin(totalScore,Random, wins, losses)
    })  
    $("#red").on ('click', function(){
      totalScore = totalScore + num3;
      $('#total').text(totalScore);
      loseOrWin(totalScore,Random, wins, losses)
    })  
    $("#yellow").on ('click', function(){
      totalScore = totalScore + num4;
      $('#total').text(totalScore); 
      loseOrWin(totalScore,Random, wins, losses)
    });   
  }); 

function reset(){
    Random=Math.floor(Math.random()*101+19);
    $("#randomNumber").text(Random);
    $("#total").text(0);
    num1= Math.floor(Math.random()*12);
    num2= Math.floor(Math.random()*12);
    num3= Math.floor(Math.random()*12);
    num4= Math.floor(Math.random()*12);
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
