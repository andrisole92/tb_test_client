import axios from 'axios';
import React, {Component} from 'react';
import './App.css';
import ParticleContainer from "./ParticleContainer";

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

    async getPrimes(e) {
        const serverUrl = 'http://68.183.156.108:3000/';
        e.preventDefault();
        try {
            let res = await axios.get(serverUrl + this.state.upper_limit);
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
                <ParticleContainer/>
                <div className="task">
                    <div className="inputContainer">
                        <input className="input" type="number" value={this.state.upper_limit} onChange={(e) => {
                            e.preventDefault();
                            this.setState({upper_limit: e.target.value})
                        }}/>
                        <button className="button" type="button" onClick={(e) => this.getPrimes(e)}>Find Primes</button>
                    </div>
                    <div className="response">
                        <div className="response_median">
                            <p><b>Median:</b> {this.state.primes.length > 0 ? getMedian(this.state.primes) : null}</p>
                        </div>
                        <div className="response_all">
                            <p><b>Primes:</b><br/> {primes}</p>
                        </div>
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