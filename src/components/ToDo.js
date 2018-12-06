import React, {Component} from 'react';

class ToDO extends Component{
  render(){
    return(
	  <li>
         <input type="checkbox" checked={ this.props.isCompleted } />
         <span>{ this.props.description }</span>
       </li>
	);
  }
}

export default ToDO;