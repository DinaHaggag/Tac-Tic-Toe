// start 
let start = document.querySelector('#start');
let beforeGame = document.querySelector('.first-screen');


start.addEventListener('click',function(){
   
    beforeGame.style.display = "none";
     document.querySelector('.the-game').style.display = "block";
    
})

// Go back
let back = document.querySelector('#back');

back.addEventListener('click',function(){
    location.reload();

})

// winner
let squeres = [];

let winFlag = false;

function winner (){
    
    for ( let i=1 ; i<10 ;i++){

     squeres[i] = document.getElementById('item' + i).innerHTML.trim();
    }
    if(!winFlag){
        if(squeres[1]==squeres[2] && squeres[2]==squeres[3] && squeres[2]!=""){
            title.innerHTML = ` ${squeres[1]} winner `;
            document.getElementById('item'+1).style.background = '#eff6ff';
            document.getElementById('item'+2).style.background = '#eff6ff';
            document.getElementById('item'+3).style.background = '#eff6ff';
            winFlag = true;

        }

        else if (squeres[4]==squeres[5] && squeres[5]==squeres[6] && squeres[5]!=""){
            title.innerHTML = ` ${squeres[4]} winner `;
            document.getElementById('item'+4).style.background = '#eff6ff';
            document.getElementById('item'+5).style.background = '#eff6ff';
            document.getElementById('item'+6).style.background = '#eff6ff';
            winFlag = true;
            
        }

        else if (squeres[7]==squeres[8] && squeres[8]==squeres[9] && squeres[8]!=""){
            title.innerHTML = ` ${squeres[7]} winner `;
            document.getElementById('item'+7).style.background = '#eff6ff';
            document.getElementById('item'+8).style.background = '#eff6ff';
            document.getElementById('item'+9).style.background = '#eff6ff';
            winFlag = true;
            
        }

        else if (squeres[1]==squeres[4] && squeres[4]==squeres[7] && squeres[4]!=""){
            title.innerHTML = ` ${squeres[1]} winner `;
            document.getElementById('item'+1).style.background = '#eff6ff';
            document.getElementById('item'+4).style.background = '#eff6ff';
            document.getElementById('item'+7).style.background = '#eff6ff';
            winFlag = true;

        }

        else if (squeres[2]==squeres[5] && squeres[5]==squeres[8] && squeres[5]!=""){
            title.innerHTML = ` ${squeres[2]} winner `;
            document.getElementById('item'+2).style.background = '#eff6ff';
            document.getElementById('item'+5).style.background = '#eff6ff';
            document.getElementById('item'+8).style.background = '#eff6ff';
            winFlag = true;        

        }

        else if (squeres[3]==squeres[6] && squeres[6]==squeres[9] && squeres[6]!=""){
            title.innerHTML = ` ${squeres[3]} winner `;
            document.getElementById('item'+3).style.background = '#eff6ff';
            document.getElementById('item'+6).style.background = '#eff6ff';
            document.getElementById('item'+9).style.background = '#eff6ff';
            winFlag = true;

        }

        else if (squeres[1]==squeres[5] && squeres[5]==squeres[9] && squeres[5]!=""){
            title.innerHTML = ` ${squeres[1]} winner `;
            document.getElementById('item'+1).style.background = '#eff6ff';
            document.getElementById('item'+5).style.background = '#eff6ff';
            document.getElementById('item'+9).style.background = '#eff6ff';
            winFlag = true;
            
        }

        else if (squeres[3]==squeres[5] && squeres[5]==squeres[7] && squeres[5]!=""){
            title.innerHTML = ` ${squeres[3]} winner `;
            document.getElementById('item'+3).style.background = '#eff6ff';
            document.getElementById('item'+5).style.background = '#eff6ff';
            document.getElementById('item'+7).style.background = '#eff6ff';
            winFlag = true;
        
        }
    }
    if((squeres.join('').replaceAll(' ','').length == 9)&& (!winFlag)){
        title.innerHTML = "A Tie";
     }
     
         
}


// adding sign by player
let title = document.querySelector(".screen");
let turn = "x";
function game(id){
    let cell = document.getElementById(id);
    if(!winFlag){
        if (turn === "x"  && cell.innerHTML == ""){
            cell.innerHTML = "x";
            turn = "o";
            title.innerHTML = "O Turn";

        }
        else if (turn === "o"  && cell.innerHTML == ""){
        cell.innerHTML = "o";
        turn = "x";
        title.innerHTML = "X Turn";
        }
        winner ();
    }
}

