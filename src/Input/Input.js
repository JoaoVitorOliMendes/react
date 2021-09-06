import React from "react";
import { dimencoes } from "../triangulo";

export default class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = { exibir: props.exibir ? props.exibir === "false" ? false : true : true, value: props.value }
    }

    changeValue(x) {
        dimencoes[this.props.index] = x;
    }

    render() {
        if(this.state.exibir) {
            return (
                <input className="col-12 mb-4" value={ this.props.value } type="number"
                onChange={(e) => this.changeValue(e.target.value)}/>
            )
        }else {
            return (
                <input className="col-12 mb-4" value={ this.state.value } disabled/>
            )
        }
    }
}