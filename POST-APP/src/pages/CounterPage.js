import Counter from '../component/Counter'
import ExtraCounter from '../component/ExtraCounter'

import { useEffect, useReducer, useState } from 'react'
import Button from '../component/Button';

import { useCounter } from '../contexts/counter'
import { useHistory } from 'react-router-dom';

import { increment, decrement, reset, addN }  from '../features/counter/counterSlice' // ใช้กับ dispatch ในการส่งค่าออกไป เมื่อกดปุ่ม
import { useDispatch, useSelector } from 'react-redux'; //useDispatch ใช้เพื่อ dispatch action เพื่อเปลี่ยนค่า

// // ปิดเพราะ Refactor useReducer ทำ Context Hook
// const INITIAL_STATE = { 
//     counter: 0
// };

// function counterReducer(state, action) {
//     switch(action.type) {
//         case "increment":
//             return { counter: state.counter + 1 };
//         case "decrement":
//             return ( state.counter === 0 ) ? { counter: 0 } : { counter: state.counter - 1 };
//         case "reset":
//             return { counter: 0 };
//         default:
//             return state;
//     }   
// }

function CounterPage() {
    // // ทดสอบ useEffect() // ใช้ ซ่อน/แสดง ตัว counter
    const [toggle, setToggle] = useState(true);


    // // ทดสอบ Unmount()
    // const [toggle, setToggle] = useState(true);
    
    
    // // แบบปกติ
    // return (
    //     <div>
    //         <h1>Counter page</h1>
    //         <ExtraCounter></ExtraCounter>

    //         {/* ทดสอบ Unmount() */}

    //         {/* {toggle && <ExtraCounter />}
    //         <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
            

    //         {/* ทดสอบ useEffect() */}

    //         {toggle && <Counter />}
    //         <button onClick={() => setToggle(!toggle)}>Toggle</button>
    //     </div>
    // )

    
    // // แบบเอา useState มาใช้ข้างนอก แล้ว props access ค่าเอา
    // const [counter, setCounter] = useState(0);
    // return (
    //     <div>
    //         <h1>Counter page</h1>
    //         {toggle && 
    //             <Counter 
    //                 counter={counter}
    //                 setCounter={setCounter}
    //             />
    //         }
    //         <h1>Show Counter: {counter}</h1>
    //         <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    //     </div>
    // )
    

    // // แบบใช้ useReducer
    // const [state, dispatch] = useReducer(counterReducer, INITIAL_STATE);
    // return (
    //     <div>
    //         <h1>Counter page</h1>
    //         {toggle && 
    //             <Counter 
    //                 counter={state.counter}
    //                 incrementCounter={() => dispatch({ type: "increment" })}
    //                 decrementCounter={() => dispatch({ type: "decrement" })}
    //                 resetCounter={() => dispatch({ type: "reset" })}
    //             />
    //         }
    //         <h1>Show Counter: { toggle ? 'SHOW' : 'HIDE' }</h1>
    //         <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    //     </div>
    // )

    const history = useHistory();
    // const n = prompt();
    
    // // วิธี context + reducer
    // // แบบใช้ useReducer => refactor === Context Hook
    // const counter = useCounter();
    // // const { state, dispatch} = useCounter(); // <<< destructuring ได้เหมือนกัน
    // // console.log('counter' , counter);
    // // ทำปุ่ม GO HOME กลับไปหน้า Home 
    // return (
    //     <div>
    //         <h1>Counter page</h1>
    //         {toggle && 
    //             <Counter 
    //                 counter={counter.state.counter}
    //                 incrementCounter={() => counter.dispatch({ type: "increment" })}
    //                 decrementCounter={() => counter.dispatch({ type: "decrement" })}
    //                 resetCounter={() => counter.dispatch({ type: "reset" })}
    //             />
    //         }
    //         <h1>Show Counter: { toggle ? 'SHOW' : 'HIDE' }</h1>
    //         <div>
    //             <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
    //         </div>
    //         <div>
    //             <Button onClick={() => history.push("/home")}>Go Home</Button>
    //         </div>
    //     </div>
    // )

    // วิธี redux tool
    const dispatch = useDispatch();
    const counter = useSelector((reducer) => reducer.counter.counter);
    
    // state เก็บ prompt ของ user
    const [amount ,setAmount] = useState(0);
    // const addPromptContinue = () => {
    //         return amount
    // };

    const addPrompt = () => {
        if (amount !== 0 ) {
            return amount
        } else {
            let userPrompt = NaN;
            while (isNaN(userPrompt)) {
                userPrompt = +prompt('Enter NUMBER you want')
            }
            setAmount(userPrompt)
            return userPrompt
        }
    };

    // console.log(amount)

    return (
        <div>
            <h1>Counter page</h1>
            {toggle &&  
                <Counter 
                    counter={counter}
                    incrementCounter={() => dispatch(increment())}
                    decrementCounter={() => dispatch(decrement())}
                    resetCounter={() => dispatch(reset())}
                    addPrompt={() => dispatch(addN(addPrompt()))}
                    // addPromptContinue={() => dispatch(addN(addPromptContinue()))}
                    amount={amount}
                />
            }
            <h1>Show Counter: { toggle ? 'SHOW' : 'HIDE' }</h1>
            <div>
                <Button onClick={() => setToggle(!toggle)}>Toggle</Button>
            </div>
            <div>
                <Button onClick={() => history.push("/home")}>Go Home</Button>
            </div>
        </div>
    )

}

export default CounterPage