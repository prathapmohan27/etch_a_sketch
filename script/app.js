function makeGrid(defaultValue){

    const container=document.createElement('div');
    container.id='main';
    container.className='container';
    document.body.appendChild(container);

    const main=document.querySelector('#main');
    
    for(let i=0;i<defaultValue;i++){
        const row=document.createElement('div');
        row.id='row'+i;
        row.className='row';
        main.appendChild(row);
        var rows = document.getElementById('row'+i);
        for (var j=0; j<defaultValue; j++) {
            var box = document.createElement("div");
            box.className = "box";
            rows.appendChild(box);
        }
    }
    
    main.setAttribute('style','grid-template-columns: repeat(' + defaultValue + ', 1fr)');
    const gridRow=document.querySelector(".row");
    gridRow.setAttribute('style','grid-template-rows: repeat(' + defaultValue + ', 1fr)');

    gridBox=document.querySelectorAll(".box");
    gridBox.forEach(div => {
        div.addEventListener('mouseover', () => {
            // const randomR = Math.floor(Math.random() * 256);
            // const randomG = Math.floor(Math.random() * 256);
            // const randomB = Math.floor(Math.random() * 256);
            // div.style.background=`rgb(${randomR}, ${randomG}, ${randomB})`;
            div.style.background='black';
          });
    });

  
}

function changeSize(){ 
    var newSize=prompt("Enter New Size 1 to 100");
    if(newSize!==null){
    newSize=parseInt(newSize);
    if(newSize>100||1>newSize||Number.isNaN(newSize)){
        alert("Enter the valid number");
        changeSize();
    }
    else{
        clear();
        makeGrid(newSize);
    }
}
    else{
       return;
    }  
    
}

const changeButton=document.getElementById("change-size");
changeButton.addEventListener('click',changeSize);

function clear(){
const gridContainer=document.getElementById('main');
gridContainer.parentNode.removeChild(gridContainer);
}


window.onload = makeGrid(defaultValue=16);
