import React from 'react'

const DrumPad = (props) => {
    
    function playSound (){
        props.playSound(null, props.letter)
        console.log(777777)
    }


    return (
        <button onClick={playSound} className="drum-pad" id={props.name}>
            {props.letter}<audio className="clip" id={props.letter} src={props.link}></audio>
        </button>
    )
}

export default DrumPad



