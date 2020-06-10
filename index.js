window.addEventListener('load' ,() => {
    // const sounds = document.querySelectorAll('.audio');
    const pads = document.querySelectorAll(".row div");
    const beats = document.querySelectorAll(".main-beats div")
    
    // console.log(sounds);
    // console.log(pads)
    const sounds = [new Audio('./sounds/Bass.mp3'),
                    new Audio("./sounds/Crash1.mp3"),
                    new Audio("./sounds/Crash2.mp3"),
                    new Audio("./sounds/Drum-Sticks.mp3"),
                    new Audio("./sounds/FloorTom1.mp3"),
                    new Audio("./sounds/Floor-Tom2.mp3"),
                    new Audio("./sounds/Hi-Hat1.mp3"),
                    new Audio("./sounds/Hi-Hat2.mp3"),
                    new Audio("./sounds/Medium-Tom1.mp3"),
                    new Audio("./sounds/Medium-Tom2.mp3"),
                    new Audio("./sounds/Ride.mp3"),
                    new Audio("./sounds/Small-Tom1.mp3"),
                    new Audio("./sounds/Small-Tom2.mp3"),
                    new Audio("./sounds/Snare.mp3"),
                    new Audio("./sounds/Splash1.mp3"),
                    new Audio("./sounds/Splash2.mp3"),

                ]

    
    

    pads.forEach((pad, index) => {
        pad.addEventListener('click', function() {
            sounds[index].currentTime = 0;
            sounds[index].play();
            beats[index].classList.add('animate');
            this.style.background = '#2196f3';
            this.style.boxShadow = ' 0 0 10px #2196f3,0 0 20px #2196f3,0 0 30px #2196f3';

            // this.style.css()

            removeAnimation(index);
        });
    });

    const removeAnimation = (index) => {
        beats[index].addEventListener('animationend',function(){
            this.classList.remove('animate');
            pads[index].style.background = 'none';
            pads[index].style.boxShadow = 'none';
        })
    }
});