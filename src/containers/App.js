import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { fetchUserAndRepos } from '../actions';

import  '../css/styles.scss';
import {ProgressBar} from '../components/progressBar';
import {Button} from '../components/button';


class App extends Component {
    constructor(props) {
        super(props);
		this.state={
		 'progressBarData':[],
		 'selectedProgressBar':'',
		 'buttonData':[]
		}
		console.log(this.props);
        this.handleSubmit = this.handleSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount(){
        this.props.dispatch(fetchUserAndRepos('knishanth'));
    }
	
	componentWillReceiveProps(nextProps){
	  if((!nextProps.currentUserData.isFetching)&& nextProps.currentUserData.userData.buttons && nextProps.currentUserData.userData.buttons.length){
	     this.setState({
		   'buttonData':nextProps.currentUserData.userData.buttons,
		   'progressBarData':nextProps.currentUserData.userData.bars,
		   'selectedProgressBar':'0',
		   'limit':nextProps.currentUserData.userData.limit
		 });
	  }
	}
	
	handleSubmit(data){
	   var value = parseInt(this.state.progressBarData[this.state.selectedProgressBar],10)+parseInt(data,10);
	   if(value<0){
	     value=0;
	   }
	   var array=this.state.progressBarData;
	   array[this.state.selectedProgressBar]=value;
	   this.setState({'progressBarData':array});
	}
    
	handleChange(data){
	  this.setState({'selectedProgressBar':data.target.value});
	}
   
    render() {
        const { currentUserData } = this.props;
        const { userData } = currentUserData;
        return (
            <div>
                {currentUserData.isFetching && <h2>Loading...</h2>}
                {!currentUserData.isFetching &&
                    userData && (
                        <div>
                            <div id="progress-container">
							   { this.state.progressBarData.map((data,index)=>
								    <ProgressBar key={index} data={data} limit={this.state.limit}/>
								)}
	                        </div>
							<div className="container" id="input-selectors" >
							   <select id="drop-down" onChange={this.handleChange}>
							   { this.state.progressBarData.map((data,index)=>
		                          <option value={index}>#progress{index+1}</option>
								  )}
	                            </select>
							   {this.state.buttonData.map((data)=>
								   <Button handleSubmit={this.handleSubmit} value={data}/>
								)}
							</div>	
                        </div>
                    )}
            </div>
        );
    }
}

App.propTypes = {
    dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
    const {currentUserData} = state;
    return {
        currentUserData
    };
}

export default connect(mapStateToProps)(App);
