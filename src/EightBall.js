import {useState} from 'react';
import './EightBall.css';

const EightBall = (props) => {
    const choice = (array) => {
        const randomAnswerIndex = Math.floor(Math.random() * array.length);
        return array[randomAnswerIndex];
    }

    const [message, setMessage] = useState("Think of a Question");
    const [color, setColor] = useState("black");

    const click = () => {
        const {msg, color} = choice(props.answers);
        setMessage(msg);
        setColor(color);
    }

    const reset = () => {
        setMessage("Think of a Question");
        setColor("black");
    }
    
    return (
        <div>
            <h1 className='EightBall-header'>Eight Ball</h1>
            
            <div className='EightBall' onClick={click} style={{backgroundColor: color}}>
                <b className='EightBall-text'>{message}</b>
            </div>
            <button className='reset-button' onClick={reset}>Reset Magic Eight Ball</button>
        </div>
    )
}

export default EightBall;