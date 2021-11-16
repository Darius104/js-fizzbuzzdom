const box_container = document.querySelector('.container');

for( let z = 1; z <= 100; z++ ){
    
    if( z % 3 === 0 && z % 5 === 0){
        let mTot = 'FrizzBuzz';
        const zTot = `
        <div class="box">${mTot}</div>
    `;
    box_container.innerHTML += zTot;
        
    }else if( z % 3 === 0 ){
        let mTre = 'Fizz';
        const zTre = `
        <div class="box">${mTre}</div>
    `;
    box_container.innerHTML += zTre;

    }else if( z % 5 === 0 ){
        let mCinque = 'Buzz';
        const zCinque = `
        <div class="box">${mCinque}</div>
    `;
    box_container.innerHTML += zCinque;

    }else{
        const zNormale = `
        <div class="box">${z}</div>
    `;
    box_container.innerHTML += zNormale;
    }
    
    
}