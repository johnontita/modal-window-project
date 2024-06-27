const btnsOpenModal=document.querySelectorAll('.show')
console.log(btnsOpenModal)
const modalWindow=document.querySelector('.modal')
console.log(modalWindow)

const closeBtn=document.querySelector('.close-modal')
const overlay=document.querySelector('.overlay .hidden')

/*for(i=0;i<btnsOpenModal.length;i++)
    console.log(btnsOpenModal[i].textContent) //there is no need curly braces for short blocks

*/

for(i=0;i<btnsOpenModal.length;i++)
    btnsOpenModal[i].addEventListener('click',function(){
        console.log('button is clicked')
        // modalWindow.classList.remove('hidden')
        // modalWindow.style.display='block'
        
        
    
     

        

    
        
        
})