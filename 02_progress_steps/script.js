const progress = document.getElementById('progress'); // select the progress bar
const prev = document.getElementById('prev'); // select the prev button
const next = document.getElementById('next'); // select the next button
const circles = document.querySelectorAll('.circle'); // select all the circles

// currentActive variable
let currentActive = 1;
/**
 * prev button event listener
 * - decrease currentActive by 1
 * - if currentActive is less than 1
 *    - set currentActive to 1
 *    - call the update function
 *    - return
 *    - stop the function
 *    - do not execute the rest of the code
 *    - do not call the update function
 */
prev.addEventListener('click', () => {
    currentActive--; // currentActive = currentActive - 1
    if (currentActive < 1) { // if currentActive is less than 1
        currentActive = 1; // set currentActive to 1
    }
    update(); // call the update function
});

/**
 * next button event listener
 * - increase currentActive by 1
 * - if currentActive is greater than the number of circles
 *     - set currentActive to the number of circles
 *     - call the update function
 *     - return
 *     - stop the function
 *     - do not execute the rest of the code
 *     - do not call the update function
 *     - do not increase currentActive by 1
 *     - do not set currentActive to the number of circles
 *     - do not call the update function
 *     - do not return
 *     - do not stop the function
 *     - do not execute the rest of the code
 */
next.addEventListener('click', () => {
    currentActive++; // currentActive = currentActive + 1
    if (currentActive > circles.length) { // if currentActive is greater than the number of circles
        currentActive = circles.length; // set currentActive to the number of circles
    }
    update();
});

/**
 * update function
 * - add active class to the circles
 * - calculate the width of the progress bar
 * - enable/disable the prev and next buttons
 * @returns {void}
 */
update = () => {
    circles.forEach((circle, index) => { // index:number = index of the circle
        if (index < currentActive) { // if index is less than currentActive
            circle.classList.add('active'); // add active class to the circle
        } else { // if index is greater than currentActive
            circle.classList.remove('active'); // remove active class from the circle
        }
    });
    const actives = document.querySelectorAll('.active'); // select all the circles with active class
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 95 + '%'; // calculate the width of the progress bar
    if (currentActive === 1) { // if currentActive is 1
        prev.disabled = true; // disable the prev button
    } else if (currentActive === circles.length) { // if currentActive is equal to the number of circles
        next.disabled = true; // disable the next button
    } else { // if currentActive is between 1 and the number of circles
        prev.disabled = false; // enable the prev button
        next.disabled = false; // enable the next button
    }
}