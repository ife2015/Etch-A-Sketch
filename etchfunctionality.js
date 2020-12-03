var section = document.querySelector('.container');
var maindiv = document.querySelector('div.grid-container');
var items = document.getElementsByClassName('grid-item');
var buttons = document.querySelector('.reset');
var blackPen = document.querySelector('.blackpen');
var colorPen = document.querySelector('.colorpen');


let count = [];
let n =256; 
for( i=1; i<=n; i++){
    count.push(i);
}
for(i=0; i<=n-1; i++){
    maindiv.innerHTML+= '<div class="grid-item"></div>';
}

const options = document.querySelectorAll('.grid-item');


function makeBlocks() {
    for (var i = 0; i < 50; i++) {
        var row = document.createElement('div');
        row.className = "row";
        for (var j = 0; j < 50; j++) {
            var box = document.createElement('div');
            box.className = "box";
            row.appendChild(box);
        }                
        document.getElementById('boxParent').appendChild(row);
    }
}

buttons.addEventListener('click',clearGrid); 
blackPen.addEventListener('click',sketchBlack);
colorPen.addEventListener('click',sketchColor); 

function sketchColor () {
options.forEach(option => {
    option.addEventListener('mousemove', function (e){
        e.target.style.background = "rgb("+e.offsetX/0.1+","+e.offsetY/0.5+",95)";
    });
})
}

function clearGrid() {
    var hoverGrid = document.getElementsByClassName('grid-item');
    for(i = 0; i < hoverGrid.length; i++) {
      hoverGrid[i].style.backgroundColor = "beige";
    }
  } 

function sketchBlack () {
    options.forEach(option => {
        option.addEventListener('mousemove', function (e){
            e.target.style.background = "black";
        });
    })
}