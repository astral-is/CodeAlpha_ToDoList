const inputBox=document.getElementById('input-box');
const listContainer=document.getElementById('list-container');

function addTask(){
    if(inputBox.value===''){
        alert('You must write something!')
    }
    else{
        let li=document.createElement('li');
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span=document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span);
    }
    inputBox.value='';
    storeData();        //call function after task added
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        storeData();    //call after check
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        storeData();    //call after check
    }
}, false);

function storeData(){
    localStorage.setItem('data',listContainer.innerHTML);
}
function displayTask(){
    listContainer.innerHTML=localStorage.getItem('data');
}
displayTask();   //function to display previous acitivities on reopening browser
