document.addEventListener('keydown', manageKeyDowns);
document.addEventListener('keyup', manageKeyUps);

function manageKeyDowns(evt) {
    switch (evt.code) {
        case "Space":
            showScreen(2);
    }

}

function manageKeyUps() {
    
}