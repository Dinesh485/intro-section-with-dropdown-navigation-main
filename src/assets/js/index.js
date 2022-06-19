

const dropDownBtn = document.querySelectorAll('.drop_down_btn')
const dropDownContents = document.querySelectorAll('.drop_down_contents')
const menuOpenBtn = document.querySelector('#menu_open_btn')
const menuCloseBtn = document.querySelector('#menu_close_btn')
const menu = document.querySelector('#menu')
const overlay = document.querySelector('#overlay')

if(window.innerWidth < 1023){
   dropDownBtn.forEach(ele =>{
      ele.addEventListener('click', function(e){
         const contents = this.nextElementSibling;
         const arrow = this.children[1]
         const sh= contents.scrollHeight;
         const h =  contents.style.height;
         dropDownContents.forEach(item => item.style.height = null)
          dropDownBtn.forEach(item => item.children[1].style.transform = 'rotate(0deg)')
         if(h){
            contents.style.height = null
            arrow.style.transform = 'rotate(0)'
         }else{
            contents.style.height = sh + 'px'
            arrow.style.transform = 'rotate(180deg)'
         }
      })
})

}

menuOpenBtn.addEventListener('click' , function(e){
   overlay.classList.add('bg-black/50')
   menu.classList.remove('translate-x-full')
})
menuCloseBtn.addEventListener('click' , function(e){
   overlay.classList.remove('bg-black/50')
   menu.classList.add('translate-x-full')
})