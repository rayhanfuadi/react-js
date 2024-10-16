import React from "react"
import ButtonAuth from "../Elements/Button/ButtonAuth"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
    }
    render() {
        return (
            <div className="bg-white flex justify-center items-center px-12 gap-4">
                <h1>{this.state.count}</h1>
                <ButtonAuth onClick={() => this.setState({ count: this.state.count + 1 })} tittle="click Me!" />
            </div>
        )
    }
}

export default Counter






