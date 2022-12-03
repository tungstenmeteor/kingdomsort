import React, { useState } from "react";
import "./App.css";
import ReactDOM from 'react-dom/client';

const [cardList, setCardList] = useState([]) ;

function App(){
return (
  <div>
  <div>
            
  Kingdom Cards:  
  {cardList}
</div>
<div> 
  ---
</div>
<div>
  Landscape Cards:
</div>
<div> 
  ---
</div>
<div>
  Plays With:
</div>
</div>
)

}

export default class Input extends React.Component {
  render() {

    class NameForm extends React.Component {
      constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
        this.setCardList({value: event.target.value});
        console.log (setCardList)
      }
    
      handleSubmit(event) {
        event.preventDefault();
      }
    
      render() {
        return (
          <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Card List:
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          <div>---</div>
            <div>
            </div>
          </div>
        );
      }
    }
    
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<NameForm />);

  return ( 
  <div className = "App">
<div>
  
  Kingdom Cards:  
  
</div>
<div> 
  ---
</div>
<div>
  Landscape Cards:
</div>
</div>
  );

}
}