window.addEventListener('load', init);

//Globals
let imageList = ['Gary', 'Pim', 'Mike'];
let imageField;

let form;
let alert;

/**
 * Initialize after the DOM is ready
 */
function init() {
    //Retrieve the playing field element from the HTML
    imageField = document.getElementById('image-field');

    imageField.addEventListener("click", playingFieldClickHandler)

    createPlayField();
}

/**
 * Generate the playing field dynamically with all the available images
 */
function createPlayField() {

    //Loop through all the images
    for (let i = 0; i < imageList.length; i++) {
        //Create div for card
        let div = document.createElement('div');
        div.classList.add('team-images');

        //Create & append H2 to div
        let h2 = document.createElement('h2');
        h2.innerHTML = imageList[i].toString();
        h2.classList.add('h2')
        div.appendChild(h2);

        // Create image & append to div
        let img = document.createElement('img');
        // img.src = `img/${imageList[i]}.png`;
        img.src = `tools/js-img/questionmark.png`;
        img.dataset.id = imageList[i].toString();
        div.appendChild(img);

        //Append div to playing field
        imageField.appendChild(div);
    }
}


/**
 * Show the card by its front so the player knows whats going on
 *
 * @param e
 */
function playingFieldClickHandler(e) {
    let clickedItem = e.target;

    if (clickedItem.nodeName === 'IMG') {
        clickedItem.src = `tools/js-img/${clickedItem.dataset.id}.png`;
    }
}
