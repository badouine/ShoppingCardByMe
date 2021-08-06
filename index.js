const { func } = require("prop-types");

var min = document.querySelector('.minus');
var max = document.querySelector('.plus');
var money = document.querySelector('.dollar');
var count = 0;
var tot = 150;
var counter = document.getElementById('count')
counter.innerHTML = count;
var total = document.getElementById('total');
//total.value = 'dollar'
// Add item when clicked in every click

//for(let i=0; i < min.length; i++){
  min.addEventListener('click', function(){
    counter.innerHTML = --count; 
    total.innerHTML = tot * counter.innerHTML; 
    
  });

//};

//for(let i = 0; i < max.length; i++){
  max.addEventListener('click', function(){
    counter.innerHTML = ++count;
    total.innerHTML = tot * counter.innerHTML; 
  });


  //   Heart clicked color Red
document.querySelector('.redheart').onclick = function(e){
  var heart = document.querySelector('#red');
      heart.classList.toggle('show');
      e.preventDefault();
}


// Remove cARD
function removeCard(){
  var card = document.getElementById('card');
  card.remove();
}
//}


/* max.addEventListener('click', function(){
  counter.innerHTML = ++count;
}); */

/* 
for(var i=0; i<uprice.length; i++){
  uprice[i].addEventListener('click', count);
}


function count(e){
  e.preventDefault();
  counter.innerHTML = ++cont;
  let btn = e.target;
  let par = btn.children;
  console.log(par);
}
 */

/* 

Objective
For this checkpoint, you’ll have to recreate
 a shopping cart. In this scenario, it’s a cart in which items have already 
 been preselected and from this particular screen, the user is able to apply
  the following instructions. 
  
  Instructions
Adjust the quantity of each item through  “+” and “-” buttons.
Delete items from the cart.
Like items through a clickable heart-shaped button that will change color accordingly.
See the total price adjusted according to quantity and deletions.
  
*/