import React, {Component} from 'react';
import Particles from 'react-particles-js';

class ParticleContainer extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }
    render() {


        return (
            <Particles className="particles"
                       params={{
                           "particles": {
                               "number": {
                                   "value": 50
                               },
                               "size": {
                                   "value": 3
                               }
                           },
                           "interactivity": {
                               "events": {
                                   "onhover": {
                                       "enable": true,
                                       "mode": "repulse"
                                   }
                               }
                           }
                       }}
                       style={{
                           width: '100%',
                           height: '100%',
                           position: 'absolute',
                           top: '0'
                       }}
            />


        );
    }
}

export default ParticleContainer;