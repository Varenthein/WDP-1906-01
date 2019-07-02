/*CONST*/
const starsContainers = document.querySelectorAll('.stars-container');

/*LISTENERS*/
starsContainers.forEach(item => {
    const stars = item.querySelectorAll('.star');
    item.addEventListener('click', e => {
        if(e.target.classList.contains('star')){
            const id = e.target.dataset.index;
            removeState(stars);
            addState(stars, id);
        }
    })

    item.addEventListener('mouseover', e => {
        if(e.target.classList.contains('star')){
            const id = e.target.dataset.index;
            for(i=0 ; i <= id ; i++) {
            stars[i].classList.add('temp');
            }
        }
    }) 

    item.addEventListener('mouseout', e => {
        if(e.target.classList.contains('star')){
            stars.forEach(item => {
                item.classList.remove('temp');
            });
        }
    })
});

/*FUNCTIONS*/

//FUNCTION FOR DELETE CURRENT RATING AND CURRENT AVERAGE RATING
const removeState = (stars) => {
    stars.forEach(item => {
        item.classList.remove('full');
        item.classList.remove('active');
    });
};

//FUNCTION FOR ADD CURRENT RATING
const addState = (stars, id) => {
    for(i=0 ; i <= id ; i++) {
        stars[i].classList.add('active');
    }
}
