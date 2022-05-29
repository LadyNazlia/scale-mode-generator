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
       audio.src = "a-flat-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-flat-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-flat-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-flat-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-flat-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-flat-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-flat-phrygian.wav"
    }
}

const scaleA = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "a-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "a-phrygian.wav"
    }
}

const scaleBFlat = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "b-flat-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-flat-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-flat-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-flat-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-flat-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-flat-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-flat-phrygian.wav"
    }
}

const scaleB = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "b-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "b-phrygian.wav"
    }
}

const scaleC = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "c-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-phrygian.wav"
    }
}

const scaleCSharp = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "c-sharp-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-sharp-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-sharp-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-sharp-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-sharp-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-sharp-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "c-sharp-phrygian.wav"
    }
}

const scaleD = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "d-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "d-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "d-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "d-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "d-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "d-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "d-phrygian.wav"
    }
}

const scaleEFlat = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "e-flat-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-flat-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-flat-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-flat-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-flat-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-flat-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-flat-phrygian.wav"
    }
}

const scaleE = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "a-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "e-phrygian.wav"
    }
}

const scaleF = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "f-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-phrygian.wav"
    }
}

const scaleFSharp = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "f-sharp-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-sharp-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-sharp-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-sharp-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-sharp-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-sharp-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "f-sharp-phrygian.wav"
    }
}

const scaleG = {
    aeolian: function() {
       const audio = document.querySelector("audio")
       audio.src = "g-aeolian.wav"
    },
    dorian: function() {
        const audio = document.querySelector("audio")
        audio.src = "g-dorian.wav"
    },
    ionian: function() {
        const audio = document.querySelector("audio")
        audio.src = "g-ionian.wav"
    },
    locrian: function() {
        const audio = document.querySelector("audio")
        audio.src = "g-locrian.wav"  
    },
    lydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "g-lydian.wav"
    },
    mixolydian: function() {
        const audio = document.querySelector("audio")
        audio.src = "g-mixolydian.wav"
    },
    phrygian: function() {
        const audio = document.querySelector("audio")
        audio.src = "g-phrygian.wav"
    }
}