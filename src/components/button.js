import React from 'react';

export class Button extends React.Component {
  render() {
    return (
      <input type="button" class="button" value={this.props.value} onClick={()=>{this.props.handleSubmit(this.props.value)}}/>
    );
  }
}

