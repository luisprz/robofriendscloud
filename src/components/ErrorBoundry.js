import React, { Component } from 'react';
//esto es para que si hay algun error, se siga obteniendo un nice UI, es decir, un mensaje, y no que explote
//la idea es que podemos agarrar aqui un error del componente como cardlist y rendearlo.

class ErrorBoundry extends Component { //para tener acceso a los this.props, se pone como parametro props
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error, info) { //es como el try catch en javascript
        this.setState({ hasError: true }) //esto es que si hay un error tire el h1
    }

    render() {
        if (this.state.hasError) {
            return <h1> Ops. thats not good </h1>
        }
        return this.props.children //render whatever inside errorboundry
    }
}

export default ErrorBoundry; //siempre se exporta la clase para tener acceso a ella
