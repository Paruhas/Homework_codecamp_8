import React from 'react'

class ExtraCounter extends React.Component {
    // สร้าง State ใน Class Component
    constructor(props) {
        super(props),
        this.state = {
            counter: 0,
        };
        // // เพื่อให้ setState ไม่ undefined ต้องbindมัน เพราะมันอยู่ในตัว React.Component ; เป็นวิธีนึงแต่มีเขียนง่ายกว่า
        // this.handleAddCounter = this.handleAddCounter.bind(this);
    }


    // // เช็คว่าเกิดการ Mount
    // componentDidMount() {
    //     console.log('Mouting')
    // }
    // // เช็คว่าเกิดการ Update
    // componentDidUpdate() {
    //     console.log('Updated')
    // }
    // // เช็คว่าเกิดการ Unmount
    // componentWillUnmount() {
    //     console.log('Unmount')
    // }


    handleAddCounter = () => { // ต้องใช้แค่ Arrow เท่านั้น? => เพราะใน Fn แบบอื่นมันจะ scope ตัวนี้ ; แต่ Arrow จะ scope กว้างมาอีกชั้น (ไปหยุดที่ ExtraCounter)
        // console.log(this); // this == undefined เพราะมันไม่รู้จักในตัว Fn นี้ เนื่องจากมันคือ OBJ before the . ซึ่งถ้าเป็น Fn ปกติ มันหยุดแค่ตัว handleAddCounter
        this.setState(function(state) {
            return { counter: state.counter + 1,}
        })
        // console.log('+');
    };

    handleSubtractCounter = () => { 
        this.setState(function(state) {
            return { counter: state.counter - 1,}
        })
        // console.log('-');
    };

    handleResetCounter = () => { 
        this.setState(function(state) {
            return { counter: state.counter - state.counter,}
        })
        // console.log('0');
    };

    render() {
        return (
            <div>
                <h1>Counter : {this.state.counter}</h1>
                <button onClick={this.handleAddCounter}>add</button>
                <button onClick={this.handleSubtractCounter}>subtract</button>
                <button onClick={this.handleResetCounter}>reset</button>
            </div>
        )
    };
}

export default ExtraCounter;