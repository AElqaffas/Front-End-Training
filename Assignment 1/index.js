var addBtn= document.getElementById("submitBtn");
addBtn.addEventListener('click',add);
var list = document.getElementsByClassName("list-group");

var searchBtn=document.getElementById("searchBtn");
searchBtn.addEventListener('click',btnSearch);
var input=document.getElementById('searchTxt');
input.addEventListener('keyup',search)

function add(event){
var input = document.getElementById('submitTxt');
list[0].innerHTML+= '<li class="list-group-item">'+input.value+'</li>';
}

function search(event){
    console.log(input.value.length)
    
var items = document.getElementsByClassName('list-group-item');

for(var i=0 ; i<items.length;i++){
    if(!items[i].textContent.includes(input.value)/*substr(0,input.value.length) != input.value*/){
    items[i].style.display='none';
    }
    else{
        items[i].style.display='initial';
    }

}   
}

function btnSearch(event){
    var items = document.getElementsByClassName('list-group-item');
    for(var i=0;i<items.length;i++)
    if(items[i].textContent!=input.value)
    items[i].style.display='none';
}