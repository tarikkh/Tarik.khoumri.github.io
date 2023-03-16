const hamburgerButton=document.getElementById('humburger')
const navList=document.getElementById('nav-list')

function toggleButton(){
    navList.classList.toggle('show')
}

hamburgerButton.addEventListener('click',toggleButton)