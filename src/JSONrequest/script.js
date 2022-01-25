fetch('pack.json').then((result) => {
    result.json().then((result) =>{
        addIMG(result.im1);
        addIMG(result.im2);
        addIMG(result.im3);
    })

})

function addIMG(link){
    let nextImg = document.createElement('img');
    nextImg.src = link;
    let body = document.querySelector('body');
    body.append(nextImg);

}