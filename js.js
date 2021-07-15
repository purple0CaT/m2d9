window.onload= ()=>{
    showJumb()
}

function showJumb(){
    const jumb = document.querySelector('.jumbotron')
    jumb.classList.remove('non-act')
}
// <!-- EXERCISE 5
// Add a DELETE bootstrap button at the end of each row of the tracklist. 
// Attach the functionality to remove its row when it gets clicked.  

// ##EXTRA##
// Make only one button visible at a time, for each row, when the single row gets hovered. 
// Animate it with a fade-in effect upon the user hovering and fade-out when he/she goes away from it.
// -->
const trackButt = document.querySelectorAll('.removeTrack')

for(let but of trackButt){
    but.addEventListener('click', removeTrack)
    function removeTrack(){
    but.parentElement.parentElement.remove()
    }
}