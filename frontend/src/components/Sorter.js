import React from 'react';

export default class Sorter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kingdom: [],
            landscapes: [],
            playsWith: [],
        };
    }

    handleChange(event) {
        this.setState({kingdom: event.target.value});
    }

    render() {
        return (<div>
            <label>
                Card List:
                <input type="text" value={this.state.kingdom} onChange={this.handleChange.bind(this)} />
            </label>

            <div>
                Kingdom Cards:
                {this.state.kingdom}
            </div>
            <div>
                ---
            </div>
            <div>
                Landscape Cards:
                {this.state.landscapes}
            </div>
            <div>
                ---
            </div>
            <div>
                Plays With:
                {this.state.playsWith}
            </div>
        </div>)
    }
}
