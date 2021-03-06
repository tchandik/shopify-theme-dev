
// Modal Calculator 
let shldrDrop = document.getElementById('shldrDrop');
let shoulder = document.getElementById('shldrLength'); 
let shldrCalcBtn = document.getElementById('shldr-drop-calc-button-container');

shoulder.addEventListener('focus', () => {
    shoulder.addEventListener('blur', () => {
    
        if (shoulder.value === '') {
            shoulder.value = '0';
            shoulder.setAttribute('data-font','placeholder-input');

        } if (shoulder.value !== '0' && isNaN(shoulder.value)) {
            shoulder.value = '0';
         

        } if (!isNaN(shoulder.value)) {
            shoulder.setAttribute('data-font','font-value');
        }
      
    })
})


shldrDrop.addEventListener('focus', () => {
    shldrDrop.addEventListener('blur', () => {
    
        if (shldrDrop.value === '') {
            shldrDrop.value = '0';
            shldrDrop.setAttribute('data-font','placeholder-input');

        } if (shldrDrop.value !== '0' && isNaN(shldrDrop.value)) {
            shldrDrop.value = '0';
           

        } if (!isNaN(shldrDrop.value)) {
            shldrDrop.setAttribute('data-font','font-value');
        }
      
    })
})


shldrCalcBtn.addEventListener('click', (e) => {
    e.preventDefault();
    let shldrDropValue =  document.getElementById('shldrDrop').value; 
    let shoulder = document.getElementById('shldrLength').value; 

    let resultRad = Math.asin(shldrDropValue/shoulder); 
    let resultDeg = (resultRad*180)/Math.PI
    let result = resultDeg.toFixed(2);


   document.getElementById('result-shldr-Slope').innerText = ` ${result}° `;

});


// Text Input Logic 
let origin = document.getElementById('origin'); 
let stretch = document.getElementById('stretch');


origin.addEventListener('focus', () => {
    origin.addEventListener('blur', () => {
    
        if (origin.value === '') {
            origin.value = 'Example: 10';
            origin.setAttribute('data-font','placeholder-input');

        } if (origin.value !== 'Fabric stretches too' && isNaN(origin.value)) {
            origin.value = 'Example: 10';

        } if (!isNaN(origin.value)) {
           origin.setAttribute('data-font','font-value');
        }
      
    })
})



stretch.addEventListener('focus', () => {
    stretch.addEventListener('blur', () => {
    
        if (stretch.value === '') {
            stretch.value = 'Example: 13';
            stretch.setAttribute('data-font','placeholder-input');

        } if (stretch.value !== 'Fabric stretches too' && isNaN(stretch.value)) {
            stretch.value = 'Example: 13';

        } if (!isNaN(stretch.value)) {
           stretch.setAttribute('data-font','font-value');
        }
      
    })
})




// End of Text Input Logic


let rdcCalcBtn = document.getElementById('rdc-calc-button-container');

rdcCalcBtn.addEventListener('click', (e) => {
    e.preventDefault();
   let origin = document.getElementById('origin').value; 
   let stretch = document.getElementById('stretch').value;

   let result = (100-((origin/stretch)*100));
   let resultRound = result.toFixed(2);

 

   document.getElementById('result').innerText = ` ${resultRound} %`;

});

// End of Modal Calculator 

//Get Modal Node List 
let modalNode = document.getElementsByClassName('modal'); 
//Open Modal 
let modalBtnNode = document.getElementsByClassName('fa-ruler'); 
//Close Modal Btn 
let closeBtnNode = document.getElementsByClassName('closeBtn');  





window.addEventListener('click', (e) =>{
    if(e.target == modalNode[0]) {
        modalNode[0].style.display = 'none';
    }
} )

modalBtnNode[0].addEventListener('click', () => {
    modalNode[0].style.display = 'block';
})

closeBtnNode[0].addEventListener('click', () => {
    modalNode[0].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[1]) {
        modalNode[1].style.display = 'none';
    }
} )

modalBtnNode[1].addEventListener('click', () => {
    modalNode[1].style.display = 'block';
})

closeBtnNode[1].addEventListener('click', () => {
    modalNode[1].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[2]) {
        modalNode[2].style.display = 'none';
    }
} )

modalBtnNode[2].addEventListener('click', () => {
    modalNode[2].style.display = 'block';
})

closeBtnNode[2].addEventListener('click', () => {
    modalNode[2].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[3]) {
        modalNode[3].style.display = 'none';
    }
} )

modalBtnNode[3].addEventListener('click', () => {
    modalNode[3].style.display = 'block';
})

closeBtnNode[3].addEventListener('click', () => {
    modalNode[3].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[4]) {
        modalNode[4].style.display = 'none';
    }
} )

modalBtnNode[4].addEventListener('click', () => {
    modalNode[4].style.display = 'block';
})

closeBtnNode[4].addEventListener('click', () => {
    modalNode[4].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[5]) {
        modalNode[5].style.display = 'none';
    }
} )

modalBtnNode[5].addEventListener('click', () => {
    modalNode[5].style.display = 'block';
})

closeBtnNode[5].addEventListener('click', () => {
    modalNode[5].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[6]) {
        modalNode[6].style.display = 'none';
    }
} )

modalBtnNode[6].addEventListener('click', () => {
    modalNode[6].style.display = 'block';
})

closeBtnNode[6].addEventListener('click', () => {
    modalNode[6].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[7]) {
        modalNode[7].style.display = 'none';
    }
} )

modalBtnNode[7].addEventListener('click', () => {
    modalNode[7].style.display = 'block';
})

closeBtnNode[7].addEventListener('click', () => {
    modalNode[7].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[8]) {
        modalNode[8].style.display = 'none';
    }
} )

modalBtnNode[8].addEventListener('click', () => {
    modalNode[8].style.display = 'block';
})

closeBtnNode[8].addEventListener('click', () => {
    modalNode[8].style.display = 'none';
})//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[9]) {
        modalNode[9].style.display = 'none';
    }
} )

modalBtnNode[9].addEventListener('click', () => {
    modalNode[9].style.display = 'block';
})

closeBtnNode[9].addEventListener('click', () => {
    modalNode[9].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[10]) {
        modalNode[10].style.display = 'none';
    }
} )

modalBtnNode[10].addEventListener('click', () => {
    modalNode[10].style.display = 'block';
})

closeBtnNode[10].addEventListener('click', () => {
    modalNode[10].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[11]) {
        modalNode[11].style.display = 'none';
    }
} )

modalBtnNode[11].addEventListener('click', () => {
    modalNode[11].style.display = 'block';
})

closeBtnNode[11].addEventListener('click', () => {
    modalNode[11].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[12]) {
        modalNode[12].style.display = 'none';
    }
} )

modalBtnNode[12].addEventListener('click', () => {
    modalNode[12].style.display = 'block';
})

closeBtnNode[12].addEventListener('click', () => {
    modalNode[12].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[13]) {
        modalNode[13].style.display = 'none';
    }
} )

modalBtnNode[13].addEventListener('click', () => {
    modalNode[13].style.display = 'block';
})

closeBtnNode[13].addEventListener('click', () => {
    modalNode[13].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[14]) {
        modalNode[14].style.display = 'none';
    }
} )

modalBtnNode[14].addEventListener('click', () => {
    modalNode[14].style.display = 'block';
})

closeBtnNode[14].addEventListener('click', () => {
    modalNode[14].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[15]) {
        modalNode[15].style.display = 'none';
    }
} )

modalBtnNode[15].addEventListener('click', () => {
    modalNode[15].style.display = 'block';
})

closeBtnNode[15].addEventListener('click', () => {
    modalNode[15].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[16]) {
        modalNode[16].style.display = 'none';
    }
} )

modalBtnNode[16].addEventListener('click', () => {
    modalNode[16].style.display = 'block';
})

closeBtnNode[16].addEventListener('click', () => {
    modalNode[16].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[17]) {
        modalNode[17].style.display = 'none';
    }
} )

modalBtnNode[17].addEventListener('click', () => {
    modalNode[17].style.display = 'block';
})

closeBtnNode[17].addEventListener('click', () => {
    modalNode[17].style.display = 'none';
})
//////////////////////////////////////////
window.addEventListener('click', (e) =>{
    if(e.target == modalNode[18]) {
        modalNode[18].style.display = 'none';
    }
} )

modalBtnNode[18].addEventListener('click', () => {
    modalNode[18].style.display = 'block';
})

closeBtnNode[18].addEventListener('click', () => {
    modalNode[18].style.display = 'none';
})








// // Add event listener for the window  
window.addEventListener('click', (e) => {

    for(i=0; i<modalNode.length; i++) {
    if (e.target == modalNode[i]) {
        for (j=0; j < modalNode.length; j++) {
            modalNode[j].style.display = "none";
        }
    }
}
})

// //Event Listener to Open Modal

for (i=0; i < modalBtnNode.length; i++) {
    modalBtnNode[i].addEventListener('click', (e)=> {
        e.preventDefault(); 
        for (j=0; j < modalNode.length; j++) {
          
            modalNode[j].style.display = 'block';
        }
    })
}

// //Event Listener to Close Modal

for (i=0; i < closeBtnNode.length; i++) {
    closeBtnNode[i].addEventListener('click', (e)=> {
        e.preventDefault(); 
        for (j=0; j < modalNode.length; j++) {
            modalNode[j].style.display = 'none';
        }
    })
}

