import React from 'react'

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            contador: 0,
            isDown: true,
        };
    }

    handlePushUp = () => {
        // Formas diferentes de usar el setState
        /*this.setState({
            contador: (this.state.isDown ? (this.state.contador + 1) : (this.state.contador)),
            isDown: !this.state.isDown
        });*/

        this.setState((currentState) => {
            return {
                isDown: !currentState.isDown,
                contador: !currentState.isDown
                    ? currentState.contador +1
                    : currentState.contador
            }
        })
    };

    render() {
        return (
            <div className="{styles.container}">
                <button onClick={this.handlePushUp}>Flexion</button>
                <p>{this.state.contador}</p>
                {this.state.isDown ? (
                    <img src="{vegetaDown}" alt="down" />
                ) : (
                    <img src="{vegetaUp}" alt="up" />
                )}
            </div>
        );
    }
}

export default Counter
