import { useEffect, useState } from 'react'

import Button from './Button';

// // แบบปกติ (1)
// function Counter() {
    // // ไม่ใช้แล้วเมื่อ ดึง useState ออกไปข้างนอก
    // const [counter, setCounter] = useState(0);


    // // ทดสอบ useEffect()
    // useEffect(function() {
    //     console.log('Test Effect')
    // }, []);
    // useEffect(function() {
    //     console.log('Counter\'s Effect')

    //     return function() {
    //         // cleanup Fn
    //         console.log('Clean up')
    //      }
    // }, [counter]);


    // // แบบปกติ (1) ต่อ
    // return (
    //     <div>
    //         <h1>{counter}</h1>
    //         <button onClick={function() {
    //                 return setCounter(counter + 1)}}
    //             >
    //                 add
    //         </button>
    //         <button onClick={function() {
    //                 return setCounter(counter - 1)}}
    //             >
    //                 subtract
    //         </button>
    //         <button onClick={function() {
    //                 return setCounter(0)}}
    //             >
    //                 reset
    //         </button>
    //     </div>
    // )


// // แบบเอา useState มาใช้ข้างนอก แล้ว props access ค่าเอา
// function Counter(props) {
//     return (
//         <div>
//             <h1>{props.counter}</h1>
//             <Button onClick={function() {
//                     return props.setCounter(props.counter + 1)}}
//                 >
//                     add
//             </Button>
//             <Button onClick={function() {
//                     return props.setCounter(props.counter - 1)}}
//                 >
//                     subtract
//             </Button>
//             <Button onClick={function() {
//                     return props.setCounter(0)}}
//                 >
//                     reset
//             </Button>
//         </div>
//     )

// แบบใช้ useReducer
function Counter(props) {
    
    // console.log(props.amount)

    return (
        <div>
            <h1>{props.counter}</h1>
            <Button onClick={ props.incrementCounter }
                >
                    add
            </Button>
            <Button onClick={ props.decrementCounter }
                >
                    subtract
            </Button>
            <Button onClick={ props.resetCounter }
                >
                    reset
            </Button>
            {/* <Button onClick={ props.amount === 0 ? props.addPrompt : props.addPromptContinue } */}
            <Button onClick={  props.addPrompt  }
                >
                    add N
            </Button>
        </div>
    )


}

export default Counter