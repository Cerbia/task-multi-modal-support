'use strict';
(function(){ 

    var modals = document.getElementsByClassName('modal');
    var overlay = document.querySelector('#modal-overlay')
    var links = document.getElementsByClassName('show-modal');
    var closeModalButtons = document.getElementsByClassName('close-modal');
    
    var showModal = function(event){
        event.preventDefault();

        var linkId = this.getAttribute('href');

        overlay.classList.add('show');
        
        for (var i =0; i<modals.length; i++) {
            
            modals[i].getElementsByTagName('header')[0].innerHTML = `Modal header ${linkId.slice(1)}`;
            
            if(linkId == '#'+modals[i].id) {
                modals[i].classList.add('show');
            } else {
                modals[i].classList.remove('show');
            }  
        }
    };
    
    for(var i = 0; i < links.length; i++){
        links[i].addEventListener('click', showModal);
    }
    
    var hideModal = function(event){
        event.preventDefault();
        overlay.classList.remove('show');
    };
    
    for(var i = 0; i < closeModalButtons.length; i++){
        closeModalButtons[i].addEventListener('click', hideModal);
    }
    
    overlay.addEventListener('click', hideModal);
    
    for(var i = 0; i < modals.length; i++){
        modals[i].addEventListener('click', function(event){
            event.stopPropagation();
        });
    }
})(); 