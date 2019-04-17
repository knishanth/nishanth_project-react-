import React from 'react';

export class ProgressBar extends React.Component {
  render() {
    let style={"width":parseInt((this.props.data/this.props.limit)*100,10)+'%'};
	let applyClass=(this.props.data>this.props.limit?"progress-status excess-limit":"progress-status");
	
    return (
                    <div className="container">
					    <div className="progress-bar-container">
						   <span className="show">{parseInt((this.props.data/this.props.limit)*100,10)}%</span>
						   <div style={style} className={applyClass}></div>
						</div>
					</div>
    );
  }
}

