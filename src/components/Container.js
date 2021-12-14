import React from 'react'
import sounds from './sounds'

import DrumPad from './DrumPad'
import Display from './Display'

 const Container =(props)=>{
    let result = sounds.find(function(sound) {
        
        if (sound.letter === props.soundLetter) {
            return true
        }
        return false
    })

    let soundPlayed = 'waiting for input'

    if (result) {
        soundPlayed = result.name   
    } 
     
    
    return (
        <div id="drum-machine">
       <Display soundPlayed={soundPlayed} />
       {sounds.map((sound, index) =>
           <DrumPad playSound={props.toSendForward} key={index} name={sound.name} link={sound.link} letter={sound.letter} ></DrumPad>
         )}
       <h1>placeholder</h1>
        </div>
    )
}

export default Container