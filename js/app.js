'use strict';
var names=[];
var numbers=25;
var currentCout=0;
var table=document.getElementById('table-info')
function Items(name){
    this.name=name;
    this.path='images/'+name;
    this.timeShown=0;
    this.votes=0;
   names.push(this);

};
new Items('bag.jpg');
new Items('banana.jpg');
new Items('bathroom.jpg');
new Items('boots.jpg');
new Items('breakfast.jpg');
new Items('bubblegum.jpg');
new Items('chair.jpg');
new Items('cthulhu.jpg');
new Items('dog-duck.jpg');
new Items('dragon.jpg');
new Items('pen.jpg');
new Items('pet-sweep.jpg');
new Items('scissors.jpg');
new Items('shark.jpg');
new Items('sweep.png');
new Items('tauntaun.jpg');
new Items('unicorn.jpg');
new Items('usb.gif');
new Items('water-can.jpg');
new Items('win-glass.jpg');
var NumberofAttemps=document.getElementById('number-of-attemps-form');

NumberofAttemps.addEventListener('click',number);
function number(e){
e.preventDefault();
numbers=document.getElementById('number-of-attemps').value;
};
var indexNumber=[0,0,0,0,0,0]

function runder(){
do {
    indexNumber[3]=Math.floor(Math.random()*names.length)
} while (indexNumber[3]===indexNumber[0]||indexNumber[3]===indexNumber[1]||indexNumber[3]===indexNumber[2]);
do {
    indexNumber[4]=Math.floor(Math.random()*names.length)
} while (indexNumber[4]===indexNumber[0]||indexNumber[4]===indexNumber[1]||indexNumber[4]===indexNumber[2]||indexNumber[4]===indexNumber[3]);
do {
    indexNumber[5]=Math.floor(Math.random()*names.length)
} while (indexNumber[5]===indexNumber[0]||indexNumber[5]===indexNumber[1]||indexNumber[5]===indexNumber[2]||indexNumber[5]===indexNumber[3]||indexNumber[5]===indexNumber[4]);

indexNumber[0]=indexNumber[3];
indexNumber[1]=indexNumber[4];
indexNumber[2]=indexNumber[5];
var image1=document.getElementById('image1');
var image2=document.getElementById('image2');
var image3=document.getElementById('image3');
image1.src = names[indexNumber[3]].path;
names[indexNumber[3]].timeShown++;
image2.src = names[indexNumber[4]].path;
names[indexNumber[4]].timeShown++;
image3.src = names[indexNumber[5]].path;
names[indexNumber[5]].timeShown++;
};
runder();
image1.addEventListener('click',funs);
image2.addEventListener('click',funs);
image3.addEventListener('click',funs);
function funs(){
currentCout++;
if(currentCout <= numbers){
    if(event.target.id === 'image1'){
      names[indexNumber[3]].votes++
    } else {
      if (event.target.id === 'image2') {
        names[indexNumber[4]].votes++
      } else {
        names[indexNumber[5]].votes++
      }
    }
runder();

  }else{for (let i = 0; i < names.length; i++) {
    if (names[i].votes!==0) {
        var itemrow=document.createElement('tr')
        table.appendChild(itemrow)
        var itemcell=document.createElement('td')
        itemrow.appendChild(itemcell)
        itemcell.textContent=names[i].name
       
        var itemcell=document.createElement('td')
        itemrow.appendChild(itemcell)
        itemcell.textContent=names[i].timeShown
        
        var itemcell=document.createElement('td')
        itemrow.appendChild(itemcell)
        itemcell.textContent=names[i].votes
        
        var call=(names[i].votes/names[i].timeShown)
        var itemcell=document.createElement('td')
        itemrow.appendChild(itemcell)
        itemcell.textContent=call
    }  
  }
     
  image1.removeEventListener('click',funs);
  image2.removeEventListener('click',funs);
  image3.removeEventListener('click',funs);
  }

  }
