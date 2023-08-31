
let count=0;
let saves = '';
let countEl=document.getElementById('counter');
let saveEl = document.getElementById('pre_entries');
function increment(){
    count++;
    countEl.textContent=count;
}

function saveCount(){
    saves += count + ' -  ';
    saveEl.textContent=saves;
    count = 0;
    countEl.textContent=count;
}

