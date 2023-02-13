const closeBtn = document.querySelector('.sidebar-header');
const toggleBtn = document.querySelector('.bars');
const links = document.querySelector('.links')
toggleBtn.addEventListener('click', function(){
    links.classList.add('show')
    document.body.style.backgroundColor = 'rgba(0,0,0,.6)';
    document.body.style.transition = 'all 1s ease-in-out';

})
closeBtn.addEventListener('click', function(){
    links.classList.remove('show')
    document.body.style.backgroundColor = 'inherit'
})