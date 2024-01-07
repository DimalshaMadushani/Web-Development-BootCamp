//defibe the players as objects
const p1 = {
    score: 0,
    button:document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')

}

const p2 = {
    score: 0,
    button:document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')

}
//function to update score
function updateScore(player,opponent){
    if(!isGameOver){
         player.score += 1;
        if(player.score === targetScore){
            isGameOver = true;
            player.button.disabled = true;
            opponent.button.disabled = true;
            player.display.style.color = 'green';
            opponent.display.style.color = 'red';
          //  p1Display.classList.add('winner')
          //  p2Display.classList.add('loser')
        }
        player.display.textContent = player.score;
        //p1Display.style.color = 'red';
    }
}
const rstButton = document.querySelector('#rstButton');
const targetSelector = document.querySelector('#target');

let isGameOver = false;
let targetScore = 5;
//player 1 control

p1.button.addEventListener('click',function (){
   updateScore(p1,p2)
   
});

//player 2 control
p2.button.addEventListener('click',function (){
   updateScore(p2,p1)
   
});

// //target selector
targetSelector.addEventListener('change', function(){
    targetScore = parseInt(this.value);
   // console.log(targetScore)
    reset(p1,p2);

})

// reset option
rstButton.addEventListener('click', reset)

function reset(){
    isGameOver = false;
    for(let p of [p1,p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.style.color = 'black';
        p.button.disabled = false;
    }
    
 //   p1Display.classList.remove('has-text-success')
  //  p2Display.classList.remove('has-text-danger')
    
  

}

function changeColor(){

}
