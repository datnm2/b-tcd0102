import React, { Component } from 'react'

export default class PtBac2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: "",
            b: "",
            c: "",
            result: ""
        };
        this.onAChanged = this.onAChanged.bind(this)
        this.onBChanged = this.onBChanged.bind(this)
        this.onCChanged = this.onCChanged.bind(this)
        this.calculate = this.calculate.bind(this)
        this.clearForm = this.clearForm.bind(this)
    }

    clearForm() {
        this.setState({
            a: "",
            b: "",
            c: "",
            result: "Vui lòng nhập các tham số sau đó bấm 'Giải'!"
        })
    }
    calculate() {
        //   var { a,b,c} = this.state  //Spread Operator
        var a = parseFloat(this.state.a)
        var b = parseFloat(this.state.b)
        var c = parseFloat(this.state.c)
        console.log(a);
        console.log(b);
        console.log(c);

        var delta = Math.pow(b, 2) - 4 * a * c

        console.log("delta", delta);

        if (delta < 0) {
            this.setState({
                result: "PT vô nghiệm!"
            })
        } else if (delta === 0) {
            var result = -b / (2 * a)
            this.setState({
                result: "PT có nghiệm kép x1=x2=" + result
            })
        }
        else {
            var x1 = (-b + Math.sqrt(delta)) / (2 * a)
            var x2 = (-b - Math.sqrt(delta)) / (2 * a)
            this.setState({
                result: `PT có 2 nghiệm x1=${x1} và x2=${x2}`
            })
        }
    }
    onAChanged(event) {
        var a = event.target.value;
        console.log("a value", a);
        
        var numberRegex = /^[+-]?(\.\d+)?$/; //Regular Expression
        if (a.match(numberRegex) || a === "") {
            this.setState({
                a: event.target.value
            })
        }
    }
    onBChanged(event) {
        this.setState({
            b: event.target.value
        })
    }
    onCChanged(event) {
        this.setState({
            c: event.target.value
        })
    }
    render() {
        console.log("state", this.state);

        return (
            <div>
                <div className="title">Giải Phương trình bậc 2</div>
                <div className="params">Nhập hệ số phươn trình
                    <div>
                        <input name="inputA" onChange={this.onAChanged} value={this.state.a}></input> <span>X2+</span>
                        <input name="inputB" onChange={this.onBChanged} value={this.state.b}></input><span>X+</span>
                        <input name="inputC" onChange={this.onCChanged} value={this.state.c}></input><span>=0</span>
                    </div>
                </div>
                <div className="result">Nghiệm phương trình :
                    <div>{this.state.result}</div>
                </div>
                <div className="command" onClick={this.calculate}><button>Giải</button></div>
                <div className="command" onClick={this.clearForm}><button>Clear</button></div>
            </div>
        )
    }
}
