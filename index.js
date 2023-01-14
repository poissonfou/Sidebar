function Expand(){
 const menu = document.querySelector('nav');
 const imgLogo = document.querySelector('.logo');
 const infoUser = document.querySelector('.user-info');
 const footerNav = document.querySelector('.bottom-div');
 const input = document.querySelector('.input');
 document.querySelectorAll('.descp').forEach(function(element){
 element.classList.toggle('expanded-block');
})
      
 menu.classList.toggle('expanded-nav');
 imgLogo.classList.toggle('expanded-block');
 infoUser.classList.toggle('expanded-flex');
 footerNav.classList.toggle('padding');
 input.classList.toggle('expanded-block')
}
    
