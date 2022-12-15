var btnSearch=document.querySelector('.search-box_btn')
var menu=document.querySelector('.menu-middle');

window.addEventListener('scroll',function(){
    console.log(window.pageYOffset);
    if(window.pageYOffset>150){
        // console.log('vi tri lớn hơn 150px');
        menu.classList.add('doimenu');
    }
    else{
        menu.classList.remove('doimenu');
    }
})

    btnSearch.addEventListener('click',function(){
        this.parentElement.classList.toggle('open')
        this.previousElementSibling.focus();
    })