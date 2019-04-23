import React, { useState } from 'react';

function StateHookExample () {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
        setCount(count+1);
    }
    const moving = () => {
        let moved = '_';
        for(let i=0; i<count; i++) {
            moved += '_';
        }
        return moved + '🚶';
    }
    return (
        <div>
            <p>You Clicked {count} times. {moving()}</p>
            <button onClick={incrementCount}>Move Me!</button>
        </div>
    )
}

export default StateHookExample;