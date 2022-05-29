document.querySelector("#modeBut").addEventListener('click', modeSelect)
document.querySelector("#scaleBut").addEventListener('click', scaleSelect)
document.querySelector("#bothBut").addEventListener('click', genBoth)
document.querySelector("audio").addEventListender('click', toggleAudio)


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

//play/pause button functionality

function toggleAudio() {
    if (audio.paused) {
        audio.play();
        playerButton.innerHTML = pauseIcon;
    } else {
        audio.pause();
        playerButton.innerHTML = playIcon;
    }
}

//play scale based on what is generated with genBoth()

function playAudio() {
    
}

//Scale objects with modes as methods?

const scaleAFlat = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = ""
    }
    dorian: function() {
        
    }
    ionian: function() {
        
    }
    locrian: function() {
        
    }
    lydian: function() {
        
    }
    mixolydian: function() {
        
    }
    phrygian: function() {
        
    }
}