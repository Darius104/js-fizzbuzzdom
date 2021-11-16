// const burgerButton = document.querySelector('.header-right > a');
// burgerButton.addEventListener('click',
//     function() {
//         const hamburgerMenu = document.querySelector('.hamburger-menu');
//         hamburgerMenu.classList.add('active');
//     }
// );
// const closeButton = document.querySelector('.close');
// closeButton.addEventListener('click',
//     function() {
//         const hamburgerMenu = document.querySelector('.hamburger-menu');
//         hamburgerMenu.classList.remove('active');
//     }
// );
for( let z = 1; z <= 100; z++ ){
    
    if( z % 3 === 0 && z % 5 === 0){
        console.log('FizzBuzz');
        
    }else if( z % 3 === 0 ){
        console.log('Fizz');

    }else if( z % 5 === 0 ){
        console.log('Buzz');
    }else{
        console.log(z);
    }
    
}

