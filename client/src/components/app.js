import React, { Component } from 'react';
import '../assets/css/stylesheet.css';
import ReactDOM from 'react-dom';
import Main from './main';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Test from '../../helper/test'; // do not remove test
import Footer from './footer';
import Menu from './menu.js'
import SecondPageComponent from './event_details';
import Event from './event_item';
import EventDetails from './event_details';
import VideoDetail from './video_detail';

class App extends Component {
    constructor(props){
				super(props);
				
        this.state = { 
					events: [],
					filteredEvents: [],
					searchQuery: null
				}

		this.searchInfoCallBack=this.searchInfoCallBack.bind(this);

	}

	handleSearch(term){
		if(term === ''){
			return this.setState({
				filteredEvents: []
			});
		}

		const filteredEvents = this.state.events.filter((event) => {
			const genre = event.genre_name.toLowerCase();
			term = term.toLowerCase();

			return genre.indexOf(term) >= 0;
		});

		if (filteredEvents.length) {
		console.log('Filtered Events:', filteredEvents);
		this.setState({ filteredEvents });
		}
	}

	setEvents(events){
		console.log('=============SET Events=============');
		this.setState({ events });
	}

	searchInfoCallBack(searchquery){
		this.setState({
			searchQuery: searchquery   // from state : from parameter
		})
		
	}

	render(){
		const { events, filteredEvents,searchQuery } = this.state;
		let activeEvents = events;
		if(filteredEvents.length){
			console.log('app filterevents',filteredEvents);
			activeEvents = filteredEvents;
		}

		return (
			<Router>
				<div>
					<Menu searchBarCallBack={this.searchInfoCallBack}  search={this.handleSearch.bind(this)} Menutitles = "Live Music App"/>  
					<div className="container-fluid">  
						<Route exact path="/" render={(props) => {
							return <Main searchQuery={searchQuery}   {...props} carouselEvents={activeEvents} title={activeEvents} events={activeEvents} addEvents={this.setEvents.bind(this)}/>
						}} />
					</div>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default App;
