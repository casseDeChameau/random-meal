// -------  VARIABLES
let diskNodeList = document.querySelectorAll('.disk');
let arrayDisk = Array.from(diskNodeList);
let bell = document.querySelector('.bell');

// -------  FUNCTIONS
function turnDisks() {
    arrayDisk.forEach(function(item) {
        let randomDeg = Math.floor(Math.random() * 100 + 1);
        item.style.transform = 'rotate(' + (randomDeg * 90) + 'deg)';
    })
}

// -------  APPLICATION
// window.addEventListener('wheel', turnDisks);
bell.addEventListener('click', turnDisks);