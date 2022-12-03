import React from 'react';

export default class Sorter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textField:'',
            parsedList: {
                kingdom: [],
                landscapes: [],
                playsWith: [],
            }
        };
    }

    handleChange(event) {
        this.setState({textField: event.target.value})
        let parsedList = this.parseCardList(event.target.value)
        this.setState({parsedList: parsedList});
    }
    
    parseCardList(cardList){
        let cards = cardList.split(', ')
        let kingdomList = cards.slice(0, 10)
        let landscapesList = cards.slice(10, cards.length-2)
        let playsWithList = cards.slice(cards.length-2)
        let kingdomSort = kingdomList.sort()
        let landscapeSort = landscapesList.sort()
        let playsWithSort = playsWithList.sort()
        return {
            kingdom: kingdomSort,
            landscapes: landscapeSort,
            playsWith: playsWithSort
        }
    }

    render() {
        return (<div>
            <label>
                Card List:
                <input type="text" value={this.state.textField} onChange={this.handleChange.bind(this)} />
            </label>

            <div>
                Kingdom Cards:
                <div>
                {this.state.parsedList.kingdom.map((cardName) => 
                <div>
                    {cardName}
                </div>
                )}

                </div>
            </div>
            <div>
                ---
            </div>
            <div>
                Landscape Cards:
                {this.state.parsedList.landscapes.map((cardName) => 
                <div>
                    {cardName}
                </div>
                )}
            </div>
            <div>
                ---
            </div>
            <div>
                Plays With:
                {this.state.parsedList.playsWith.map((cardName) => 
                <div>
                    {cardName}
                </div>
                )}
            </div>
        </div>)
    }
}
