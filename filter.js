function filterImages(category) {
    let imageCards = document.querySelectorAll('.imageCard');

    imageCards.forEach(card => {
        let imgElement = card.querySelector('img');

        if (category === 'animals') {
            imgElement.style.display = 'block';
            imgElement.src = "animals.jpg"; 

        } else if (category === 'nature') {
            imgElement.style.display = 'block';
            imgElement.src = "nature.jpg"; 

        } else if (category === 'food') {
            imgElement.style.display = 'block';
            imgElement.src = "food.jpg"; 

        } else if (category === 'all') { 
            imgElement.style.display = 'block';  
        }
    });
}
