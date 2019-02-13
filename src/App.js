import axios from 'axios';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            upper_limit: '',
            primes: []
        }
    }

    async componentDidMount() {

    }

    async getPrimes() {
        try {
            let res = await axios.get('http://localhost:3000/' + this.state.upper_limit);
            let {primes} = res.data;
            console.log(primes);
            this.setState({primes: primes});
        } catch (err) {
            console.log(err);
        }

    }


    render() {
        const primes = this.state.primes.map((prime, i) => {
            return <span key={'prime' + i}
                         className="prime">{prime}{i === this.state.primes.length - 1 ? '' : ', '}</span>
        });

        return (
            <div className="App">
                <div className="inputContainer">
                    <input type="number" value={this.state.upper_limit} onChange={(e) => {
                        this.setState({upper_limit: e.target.value})
                    }}/>
                    <button type="button" onClick={() => this.getPrimes()}>Find Primes</button>
                </div>
                <div className="response">
                    <div className="response_median">
                        {this.state.primes.length > 0 ? getMedian(this.state.primes) : null}
                    </div>
                    <div className="response_all">
                        {primes}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;

export const getMedian = (primes) => {
    if (!Array.isArray(primes)) return null;
    if (primes.length === 0) return null;
    let med;
    if (primes.length % 2 === 1) {
        console.log('single');
        med = Math.round((primes.length - 1) / 2);
        return primes[med];
    } else {
        console.log('double');
        med = Math.round(primes.length / 2);
        return primes[med - 1] + ', ' + primes[med];
    }
};