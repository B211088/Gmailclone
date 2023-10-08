const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const focusSearch = $('.header__search-wrapper');
const inputSearch = $('.search-input');
const removeIcon = $('.search-remove');
const background = $('body');
const focusUser = $('.header__user');
const Modal = $('.user-modal');


focusSearch.addEventListener('focusin', function(e){
    const option = e.target.closest('.search-option');
    if(!option){
        focusSearch.style.background = '#fff';
    }
})

focusSearch.addEventListener('focusout', function(e){
    const option = e.target.closest('.search-option');
    if(!option){
        focusSearch.style.background = 'rgb(223, 236, 244)';
    }
})

inputSearch.addEventListener('input', function(e){
    removeIcon.classList.remove('none-block');
    if(inputSearch.value === ''){
        removeIcon.classList.add('none-block');
    }
})

removeIcon.addEventListener('click', function(){
    inputSearch.value = '';
    removeIcon.classList.add('none-block');
})

focusUser.addEventListener('click', function(e){
    Modal.style.display = 'flex';
})

background.addEventListener('click', function(e){
    const optionUser = e.target.closest('.header__user');
    if(!optionUser){
        Modal.style.display = 'none';
    }
  
})


