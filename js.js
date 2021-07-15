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
let trackButt = document.querySelectorAll('.removeTrack')
for(let but of trackButt){
    but.addEventListener('click', removeTrack)
    function removeTrack(){
    but.parentElement.parentElement.remove()
    }
}


// TRACK ADDING
const trackAdd = document.getElementById('addTrack')
const tableBody = document.querySelector('.table tbody')



trackAdd.addEventListener('click', addTrack)


function addTrack(){
    let trackId = document.getElementById('trackID')
    let trackTitle = document.getElementById('trackTitle')
    let trackDuration = document.getElementById('trackDuration')
    let trackFeaturing = document.getElementById('trackFeaturing')
    let liveTrack = document.getElementById('liveTrack')
    
    let row=document.createElement('tr')

    let colH=document.createElement('th')
    colH.setAttribute('scope', 'row')
    colH.innerText= trackId.value

    let colB1=document.createElement('td')
    colB1.innerText= trackTitle.value

    let colB2=document.createElement('td')
    colB2.innerText= trackDuration.value

    let colB3=document.createElement('td')
    colB3.innerText= trackFeaturing.value

    let colB4=document.createElement('td')
    if(liveTrack.checked==true){
        colB4.innerText= "Live track"
    } else {
        colB4.innerText= "Not a live track"
    }

    let colB5=document.createElement('td')
    let buttn=document.createElement('button')
    buttn.innerText = "Remove"
    buttn.classList.add("removeTrack")
    
    row.appendChild(colH)
    row.appendChild(colB1)
    row.appendChild(colB2)
    row.appendChild(colB3)
    row.appendChild(colB4)
    row.appendChild(colB5)
    colB5.appendChild(buttn)

    tableBody.appendChild(row)
    // Clearing the values
    trackId.value = ""
    trackTitle.value = ""
    trackDuration.value = ""
    trackFeaturing.value = ""
    liveTrack.checked = false

    alert("Track added")

    // listener renewing
    trackButt = document.querySelectorAll('.removeTrack')

    for(let but of trackButt){
        but.addEventListener('click', removeTrack)
        function removeTrack(){
        but.parentElement.parentElement.remove()
        }
    }
    
}


