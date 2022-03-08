function computerPlay() {
    let computerResult = '';
    let computerSelect = ['Rock', 'Scissor', 'Paper'];
    for (let i = 0; i < computerSelect.length; i++) {
        computerResult = Math.floor(Math.random() * computerSelect.length);
        console.log(computerSelect[computerResult]);
        return computerResult;   
    }
}

computerPlay();