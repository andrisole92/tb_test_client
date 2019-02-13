import React from 'react';
import ReactDOM from 'react-dom';
import App, {getMedian} from './App';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
    ReactDOM.unmountComponentAtNode(div);
});
describe("getMedian test", () => {
    it('gets the median', () => {
        expect(getMedian('asdasd')).toEqual(null);
        expect(getMedian([])).toEqual(null);
        expect(getMedian([1])).toEqual(1);
        expect(getMedian([1, 2, 3])).toEqual(2);
        expect(getMedian([1, 2, 3, 4])).toEqual('2, 3');
    });
});
