import React from 'react';

class App extends React.Component {
    state = {
        count: 0
    };
    add = () => { 
        console.log('더하기');
        this.setState({ count: this.state.count+1});
    };
    minus = () => {
        console.log('빼기');
        this.setState(current => ({ count: current.count-1}));
    };

    render() {
        return (
            <div>
                <h1> 현재 값은: {this.state.count}</h1>
                <button onClick={this.add}>더하기</button>
                <button onClick={this.minus}>빼기</button>
            </div>
        )
    }
}

export default App;