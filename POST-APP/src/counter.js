import { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0) // return [] index => 0==state, 1==setState

    function addCounter() {
        setCounter( counter + 1 );
        console.log('Add Counter');
    }

    function subtractCounter() {
        // setCounter( counter - 1 )
        if ( counter > 0 ) {
        setCounter( counter - 1 )
        console.log('Subtract Counter');
        } else {
            
        }
    }

    function resetCounter() {
        setCounter( counter / counter - 1 )
        // setCounter(0)
        console.log('Reset Counter');
    }

    return (
        <div>
            <h1>Counter: {counter}</h1>
            <button onClick={addCounter}>+</button> &nbsp;
            <button onClick={subtractCounter}>-</button> &nbsp;
            <button onClick={resetCounter}>Reset</button> &nbsp;
        </div>
    );
}

export default Counter