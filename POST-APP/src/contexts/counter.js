import React, { useReducer , useContext } from 'react'

const CounterContext = React.createContext(); // สร้าง Context ขึ้นมา


const INITIAL_STATE = { 
    counter: 0
};

function counterReducer(state, action) {
    switch(action.type) {
        case "increment":
            return { counter: state.counter + 1 };
        case "decrement":
            return ( state.counter === 0 ) ? { counter: 0 } : { counter: state.counter - 1 };
        case "reset":
            return { counter: 0 };
        default:
            return state;
    }   
};


function CounterProvider(props) { // สร้าง Provider มาจาก CounterContext ของ react
    const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);

    const counterContextValue = { // value ที่ส่งเข้าไป
        state,
        dispatch
    };
    
    return (
        <CounterContext.Provider value={counterContextValue}>
            {props.children} {/*  จะเอาไปครอบ พวกลูกจะได้ access ตัวก้อน Reducer ได้ */}
        </CounterContext.Provider>
    );
}


function useCounter() { // วิธีการ Consume  ; ในหน้า app.js ต้องครอบ component ตัวที่มันจะ Consume เสมอถึงจะใช้งานได้
    const context = useContext(CounterContext)
    return context;
}


export { CounterProvider , useCounter };
