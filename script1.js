const limenu=document.getElementById('menu');
const icon=document.getElementById('butn');
const home1=document.getElementById('home2');

// MOBILE MENU//

function mobilemenu(){
    if(limenu.style.display=='block'){
        limenu.style.display='none';
        home1.style.marginTop="initial";
        
    }
    else{
        limenu.style.display='block';
        home1.style.marginTop="280px";
    }
}

icon.addEventListener('click',mobilemenu);


//NORMAL MENU//

function normalmenu(){
    if(window.innerWidth>782){
        limenu.style.display='inline'
    }
    else if(window.innerWidth <=782){
        limenu.style.display='none';
        
    }
}

window.addEventListener('resize',normalmenu);

function color(value) {
    document.body.style.backgroundColor=value;
}
 




