document.querySelector("#modeBut").addEventListener('click', modeSelect)
document.querySelector("#scaleBut").addEventListener('click', scaleSelect)
document.querySelector("#bothBut").addEventListener('click', genBoth)
// document.querySelector("audio").addEventListener('click', toggleAudio)
document.querySelector("#bothBut").addEventListener('click', playAudio)


//Chooses random scale and displays it
function scaleSelect() {
    const scale = ["C", "C#", "D", "Eb", "E", "F", "F#", "G", "Ab", "A", "Bb", "B"];
    
    var rand_index = Math.floor(Math.random() * scale.length);

    let randScale = scale[rand_index];

    document.querySelector("#scale").innerHTML = `${randScale}`;
   
}

//Chooses random mode and displays it
function modeSelect() {
    const mode = ["Ionian", "Dorian", "Phrygian", "Lydian", "Mixolydian", "Aeolian", "Locrian"];

    var rand_index2 = Math.floor(Math.random() * mode.length);

    let randMode = mode[rand_index2];

    document.querySelector("#mode").innerHTML = `${randMode}`;
}

//Chooses random mode and scale and displays both
function genBoth() {
    scaleSelect();
    modeSelect();
}

//Testing to see if src can be target for change



//play/pause button functionality

// function toggleAudio() {
//     if (audio.paused) {
//         audio.play();
//         playerButton.innerHTML = pauseIcon;
//     } else {
//         audio.pause();
//         playerButton.innerHTML = playIcon;
//     }
// }

//play scale based on what is generated with genBoth() or scaleSelect()/modeSelect()

function playAudio() {
    let selectScale = document.getElementById("scale").innerHTML
    let selectMode = document.getElementById("mode").innerHTML
    let audio = document.querySelector('audio')
    let src = document.getElementById('audioSrc')

    if (selectScale === "Ab") {
        if(selectMode === "Aeolian") {
           document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-aeolian.wav'); 
           document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
        } else if(selectMode === "Dorian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-dorian.wav'); 
            document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
        } else if(selectMode === "Ionian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-ionian.wav');
            document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
        } else if(selectMode === "Locrian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-locrian.wav');
            document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
        } else if(selectMode === "Lydian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-lydian.wav');
            document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
        } else if(selectMode === "Mixolydian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-mixolydian.wav');
            document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
        } else if(selectMode === "Phrygian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-flat-modes/a-flat-phrygian.wav');
            document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
        }
    }
    
    else if (selectScale === "A") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/a-modes/a-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }
    
    else if (selectScale === "Bb") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-flat-modes/b-flat-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "B") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/b-modes/b-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "C") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-modes/c-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "C#") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/c-sharp-modes/c-sharp-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "D") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/d-modes/d-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "Eb") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-flat-modes/e-flat-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "E") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/e-modes/e-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "F") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-modes/f-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "F#") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/f-sharp-modes/f-sharp-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    else if (selectScale === "G") {
        if(selectMode === "Aeolian") {
            document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-aeolian.wav'); 
            document.querySelector('p').innerHTML = "Aeolian is the sixth mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor third, minor sixth, and minor seventh."
         } else if(selectMode === "Dorian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-dorian.wav'); 
             document.querySelector('p').innerHTML = "Dorian is the second mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the Major sixth."
         } else if(selectMode === "Ionian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-ionian.wav');
             document.querySelector('p').innerHTML = "Ionian is the first mode. There are no alterations in this one, it is simply a Major Scale."
         } else if(selectMode === "Locrian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-locrian.wav');
             document.querySelector('p').innerHTML = "Locrian is the seventh mode. Scale degrees 1 3 5 7 spell out a half diminished seventh chord. This is unique because most of the notes are altered from the typical Major Scale."
         } else if(selectMode === "Lydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-lydian.wav');
             document.querySelector('p').innerHTML = "Lydian is the fourth mode. Scale degrees 1 3 5 7 spell out a Major seventh chord. This is unique because of the sharp fourth."
         } else if(selectMode === "Mixolydian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-mixolydian.wav');
             document.querySelector('p').innerHTML = "Mixolydian is the fifth mode. Scale degrees 1 3 5 7 spell out a Dominant seventh chord. This is unique because of the flat seventh."
         } else if(selectMode === "Phrygian") {
             document.getElementById("audioSrc").setAttribute('src', 'audio/g-modes/g-phrygian.wav');
             document.querySelector('p').innerHTML = "Phrygian is the third mode. Scale degrees 1 3 5 7 spell out a minor seventh chord. This is unique because of the minor second."
         }
    }

    audio.load()
    
}


// function playAudio () {
//     let selectScale = document.getElementById("scale").innerHTML
//     let selectMode = document.getElementById("mode").innerHTML   

//     if (selectScale === 'Ab') {
//        if (selectMode === 'aolian') {
        
//        } 
//     }
// }

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