let isPlay=false;
function play(){
    isPlay=true;
    imgEl.setAttribute('src',"logo.jpg");

}
const imgEl = document.getElementById('img-el');
let cardsEl=document.getElementById('cards-el');
// cardsEl.textContent = ;
const arr = ['tu','india','usa','indonesia','alg'];
arr.pop();
arr.shift();
arr.unshift('china');
arr.push('pakistan');
console.log(arr+ '🍔');
changArr(arr);

function changArr(array1){
array1[0]='rhaeel';
}

console.log(arr);

