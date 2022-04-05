document.querySelector("#modeBut").addEventListener('click', modeSelect)
document.querySelector("#scaleBut").addEventListener('click', scaleSelect)
document.querySelector("#bothBut").addEventListener('click', genBoth)


//Chooses random scale and displays it
function scaleSelect() {
    const scale = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
    
    var rand_index = Math.floor(Math.random() * scale.length);

    let randScale = scale[rand_index];

    console.log(randScale);

    document.querySelector("#scale").innerHTML = `Scale: ${randScale}`;
   
}

//Chooses random mode and displays it
function modeSelect() {
    const mode = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];

    var rand_index2 = Math.floor(Math.random() * mode.length);

    let randMode = mode[rand_index2];

    document.querySelector("#mode").innerHTML = `Mode: ${randMode}`;
}

//Chooses random mode and scale and displays both
function genBoth() {
    scaleSelect();
    modeSelect();
}