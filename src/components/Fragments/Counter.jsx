import React from "react"

class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        console.log("render 1")
    }

    componentDidMount() {
        this.setState({ count: 10 })
        console.log("render 2 DidMount")
    }

    render() {
        return (
            <div className=" flex justify-center items-center px-12 gap-4 mt-10">
                <h1>{this.state.count}</h1>
                <button className="btn text-white" onClick={() => this.setState({ count: this.state.count + 1 })} tittle="click Me!">add</button>
                {console.log("render 3")}
            </div>
        )
    }
}

export default Counter






