import React from "react";
import { classificacaoTriangulo, dimencoes } from "../triangulo";

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = { exibir: true }
    }

    calcularTriangulo() {
        var x = dimencoes;
        if(x[0] === x[1] || x[1] === x[2]){
            if(x[0] === x[2]) {
                this.classificacaoTriangulo = "Equilátero"
            }else {
                this.classificacaoTriangulo = "Isósceles"
            }
        }else {
            this.classificacaoTriangulo = "Escaleno"
        }
    }

    render() {
        return (
            <button className="btn btn-primary" onClick={() => this.calcularTriangulo() }>
                {this.props.nome}
            </button>
        )
    }
}