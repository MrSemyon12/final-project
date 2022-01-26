let loadImages = fetch('pack.json');

loadImages.then(response => {
    response.json().then(result => {
        add(result.img1);
        add(result.img2);
        add(result.img3);
    });
});

function add(url) {
    const img = document.createElement('img');
    img.src = url;
    document.querySelector('.gallery').append(img);
}