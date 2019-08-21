import React from 'react';

export class Todo extends React.Component {

    render() {
        return (  
          <li date={this.props.data}>
              {this.props.text}
          </li>
        );
    }

}