var checkBox = document.getElementsByTagName("input");
var first; //First CheckBox Clicked

for(var i=0;i<checkBox.length;i++){
    checkBox[i].addEventListener('click',normalClick)
}
/**
 * Activates the Event Listener for a "Shift" Key Press When The User Clicks a CheckBox
 * @param : e 
 */
function normalClick(e){ 
    document.addEventListener('keydown',addShift);
    first=e.target.offsetTop; 
}

function addShift(event){ 
    if(event.key==="Shift"){   
        for(var i=0; i<checkBox.length;i++){
            checkBox[i].addEventListener('click',click);
            checkBox[i].removeEventListener('click',normalClick);     
        }
        
    }
}

document.addEventListener('keyup',removeShift);

function removeShift(event){  
        for(var i=0; i<checkBox.length;i++){
            checkBox[i].removeEventListener('click',click);
            checkBox[i].addEventListener('click',normalClick);
    }
}

/**
 * Checks The CheckBoxes Between The Two Selected Ones Based on Their OffsetTop  
 * @param e 
 */
function click(e){
    var last=e.target.offsetTop; //Last CheckBox Clicked
    var temp=last;
    for(var i=0; i<checkBox.length;i++){
      
          if(first>last)
            [first,last]=[last,first];
          if(checkBox[i].offsetTop>=first && checkBox[i].offsetTop<=last){
            if(e.target.checked==true)
                checkBox[i].checked=true;
            else
                checkBox[i].checked=false;
          } 
    }    
    first=temp;
}